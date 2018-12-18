import { QueryResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { getUserId } from "../utils";
import { ProductParent } from "./Product";
import { CartParent } from "./Cart";
import { Context } from "./types/Context";

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
  viewer: () => ({
    me: null,
    cart: null,
    purchases: null,
    sales: null,
    products: null
  } as any),
  cart: async (parent, args, context: Context, info): Promise<CartParent> => {
    try {
      const id = getUserId(context)
      const cart = await context.db.carts({where: {user: {id}}})[0] || {}
      return cart
    }catch {
      console.debug('Trouble getting cart')
      return {
        itemCount: 0,
        totalPrice: '0',
        items: []
      } as any
    }
  },
  feed: async (parent, args, context: Context, info): Promise<ProductParent[]> => {
    try {
      const products = await context.db.products({first: 50}).then(res => res)
      console.log(context.db.products)
      return products as any

    }catch(err) {
      console.debug('trouble getting feed', err.message)
      return []
    }
  },
};
