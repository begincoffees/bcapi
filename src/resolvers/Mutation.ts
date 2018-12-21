import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs'
import { UserParent } from "./User";
import { getUserId } from "../utils";
import { Context } from "./types/Context";
import { createGuestInvoice } from "../utils/stripe";
import { MutationResolvers } from "../generated/graphqlgen";

export interface MutationParent {}

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  customerSignup: async (_parent, {..._args}, context: any, _info) => {
    try {

      const stripeId = await context.stripe.customers.create({
        email: _args.email,
      }).then((customer) => {
        return customer.id;
      })
      console.log(stripeId)
      if (stripeId){
        const password = await bcrypt.hash(_args.password, 10)
        const customer = await context.db.createUser({
          firstName: _args.firstName,
          lastName: _args.lastName,
          email: _args.email,
          role: 'CUSTOMER',
          password,
          permissions: {
            set: [
              "read:products",
              "read:feed",
              "write:account",
              "read:purchases"
            ]
          },
          stripeId,
          cart: {
            create: {
              itemCount: 0,
              totalPrice: "0"
            }
          }
        })
      
        const token = jwt.sign({ userId: customer.id }, process.env.APP_SECRET, {expiresIn: '1y'})
        return {
          token: token,
          user: customer as UserParent
        }
      }
    } catch(err) {
      console.log(err.message)
      throw new Error("Error signing up!");      
    }
  },
  vendorSignup: async (_parent, _args, context: any, _info)=> {
    try {
      const stripeId = await context.stripe.customers.create({
        email: _args.email,
      }).then((customer) => {
        return customer.id;
      })
      console.log(stripeId)
      if(stripeId !== undefined){
        const password = await bcrypt.hash(_args.password, 10).then(res => res)
        const vendor = await context.db.createUser({
          bizName: _args.name,
          email: _args.email,
          password: password,
          role: "VENDOR",
          stripeId,
          cart: {
            create: {
              itemCount: 0,
              totalPrice: "0"
            }
          },
          permissions: {
            set: [
              "read:products",
              "write:products",
              "read:feed",
              "write:account",
              "read:purchases",
              "read:sales"
            ]
          },
        
          
        })
        const token = jwt.sign({ userId: vendor.id }, process.env.APP_SECRET, {expiresIn: '1y'})
        return {
          token,
          user: vendor as UserParent
        }
      }

    } catch(err) {
      console.log(err.message)
      throw new Error("Error signing up");      
    }
  },
  login: async (_parent, {email, password}, context: Context, _info) => {
    const user = await context.db.user({email}).then(res => res)

    if(user){
      const session = { 
        userId: user.id, 
        role: user.role, 
        permissions: user.permissions, 
      }
      const token = jwt.sign({...session},process.env.APP_SECRET)

      return {
        token,
        user: user as UserParent
      }
    } else {
      throw new Error("I'm having completing your log in. Would you mind trying again?")
    }
  },
  checkout: async (_parent, _args: any, context: Context, _info) => {
    try {
      const id = getUserId(context)
      const record = await createGuestInvoice(_args.email)
      const created = await record.created
      const customer = await record.customer
      const stripePaymentId = await record.id

      // instead we need to return the record to the client as a token 
      // client sends the token to another resolver to create the invoice and
      // save in db

      await context.db.createInvoice({
        amount: _args.amount,
        email: _args.email,
        created,
        stripePaymentId,
        stripeCustomerId: customer,
        vendors:{connect: [..._args.vendors]},
        customer: {connect: {id}},
        items: {connect: [..._args.items]}
      } as any)


      return {success: true}
    } catch(err) {
      console.debug(err.message)
      throw new Error('error checkout')
    }
  },
  createNewProduct: async (_parent, _args, context: any, _info) => {
    try {
      const id = getUserId(context)
      await context.db.createProduct({
        name: _args.name,
        description:  _args.description,
        varietal: _args.varietal,
        price: _args.price,
        vendor: {connect: {id}}
        
      })
      return {success: true}
    } catch {
      throw new Error("Problem creating product!s");      
    }
  },
  createNewInvoice: (parent, args, context) => null
};
