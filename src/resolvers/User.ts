import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { CartParent } from "./Cart";
import { InvoiceParent } from "./Invoice";
import { ProductParent } from "./Product";
import { getUserId } from "../utils";
import { Context } from "./types/Context";

export interface UserParent {
  id: string;
  role?: string;
  permissions: string[];
  email?: string;
  firstName?: string;
  lastName?: string;
  bizName?: string;
  password?: string;
  cart?: CartParent;
  purchases: InvoiceParent[];
  products: ProductParent[];
  sales: InvoiceParent[];
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  role: parent => parent.role,
  permissions: parent => parent.permissions,
  email: parent => parent.email,
  firstName: parent => parent.firstName,
  lastName: parent => parent.lastName,
  bizName: parent => parent.bizName,
  password: parent => parent.password,
  cart: async (parent, args, context: any, info): Promise<CartParent> => {
    try {
      const id = getUserId(context)
      const cart = await context.db.user({id}).cart()
      return cart[0]
    }catch {
      throw new Error('Trouble getting users cart')
    }
  },
  purchases: async (parent, args, context: Context, info): Promise<InvoiceParent[]> => {
    try {
      const id = getUserId(context)
      const purchases = await await context.db.user({id}).purchases()
      return purchases as any
    }catch {
      console.debug('trouble getting user purchases')
      return []
    }
  },
  products: async (parent, args, context: Context, info): Promise<ProductParent[]> => {
    try {
      const id = getUserId(context)
      const products= await context.db.user({id}).products()
      return products as any
    }catch {
      console.debug('trouble getting vendor products')
      return []
    }
  },
  sales: async (parent, args, context: Context, info): Promise<InvoiceParent[]> => {
    try {
      const id = getUserId(context)
      const purchases = await context.db.user({id}).sales()
      return purchases as any
    }catch {
      console.debug('trouble getting vendor sales')
      return []
    }
  },
};
