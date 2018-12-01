import { MutationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { AuthPayloadParent } from "./AuthPayload";
import { MutationResultParent } from "./MutationResult";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs'
import * as moment from 'moment';
import { UserParent } from "./User";

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  customerSignup: async (_parent, {..._args}, context: any, _info): Promise<AuthPayloadParent> => {
    try {
      const password = await bcrypt.hash(_args.password, 10)
      const customer = await context.db.mutation.createUser({
        firstName: _args.firstName,
        lastName: _args.lastName,
        email: _args.email,
        password,
        permissions: {
          set: [
            "read:products",
            "read:feed",
            "write:account",
            "read:purchases"
          ]
        },
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
    } catch {
      throw new Error("Error signing up!");      
    }
  },
  vendorSignup: async (_parent, _args, context: any, _info): Promise<AuthPayloadParent> => {
    try {
      const password = await bcrypt.hash(_args.password, 10).then(res => res)
      const vendor = await context.db.mutation.createUser({
        bizName: _args.name,
        email: _args.email,
        password: password,
        role: "VENDOR",
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
    } catch {
      throw new Error("Error signing up");      
    }
  },
  login: async (_parent, {email, password}, context: any, _info): Promise<AuthPayloadParent> => {
    const user = await context.db.query.user({where: {email}}).then(res => res)

    if(!user){  
      throw new Error('No user found. Check your email')
    }

    const passwordHash = user.password
    const validPassword = await bcrypt.compare(password, passwordHash)
    
    // if(!validPassword){
    //   console.log(password, passwordHash)
    //   throw new Error('Wrong password')
    // }

    /**
     * found match
     */
    // const currentSession = await context
    //   .db
    //   .authPayloads({where:{user: user.id}})
    //   .then(res => res.reduce((acc, curr) => ({...acc, ...curr}), null));
    //const isExpired = jwt.verify(context.authentication, process.env.APP_SECRET, res => res)

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
      throw new Error("I'm having completing your log in; Would you mind trying again?")
    }
  },
  logout: async (_parent, _args, context: any, _info): Promise<MutationResultParent> => {
    try {
      return {success: true}
    } catch {
      throw new Error("Resolver not implemented");      
    }
  },
  addItemToCart: async (_parent, _args, context: any, _info): Promise<MutationResultParent> => {
    try {
      return {success: true}
    } catch {
      throw new Error("Resolver not implemented");      
    }
  },
  updateCartItem: async (_parent, _args, context: any, _info): Promise<MutationResultParent> => {
    try {
      return {success: true}
    } catch {
      throw new Error("Resolver not implemented");      
    }
  },
  removeItemFromCart: async (_parent, _args, context: any, _info): Promise<MutationResultParent> => {
    try {
      return {success: true}
    } catch {
      throw new Error("Resolver not implemented");      
    }
  },
  clearCart: async (_parent, _args, context: any, _info): Promise<MutationResultParent> => {
    try {
      return {success: true}
    } catch {
      throw new Error("Resolver not implemented");      
    }
  },
  checkout: async (_parent, _args, context: any, _info): Promise<MutationResultParent> => {
    try {
      return {success: true}
    } catch {
      throw new Error("Resolver not implemented");      
    }
  },
  createNewProduct: async (_parent, _args, context: any, _info): Promise<MutationResultParent> => {
    try {
      await context.db.mutation.createProduct({
        name: _args.name,
        description:  _args.description,
        varietal: _args.varietal,
        price: _args.price,
        vendor: {
          connect: {id: _args.vendor}
        }
      })
      return {success: true}
    } catch {
      throw new Error("Problem creating product!s");      
    }
  },
};

