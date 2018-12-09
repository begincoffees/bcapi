import { QueryResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { getUserId } from "../utils";
import { ProductParent } from "./Product";
import { CartParent } from "./Cart";

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
  viewer: () => ({
    me: null,
    cart: null,
    purchases: null,
    sales: null,
    products: null
  } as any),
  cart: async (parent, args, context: any, info): Promise<CartParent> => {
    try {
      const id = getUserId(context)
      const cart = await context.db.query.carts({where: {user: {id}}})
      return cart[0]
    }catch {
      console.debug('Trouble getting cart')
      return {
        itemCount: 0,
        totalPrice: '0',
        items: []
      } as any
    }
  },
  feed: async (parent, args, context: any, info): Promise<ProductParent[]> => {
    try {
      const products = await context.db.query.products({first: 50})
      return products as ProductParent[]
    }catch(err) {
      console.debug('trouble getting feed')
      return []
    }
  },
};
