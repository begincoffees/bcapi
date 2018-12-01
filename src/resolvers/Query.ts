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
      console.log(id)
      const { 
        cart: { itemCount, totalPrice, items }
      } = await context.db.query.cart({where: {user: {id}}})
      
      return {
        itemCount: itemCount || 0,
        totalPrice: totalPrice || "0",
        items: items || []
      } as CartParent
    }catch {
      throw new Error('Trouble getting cart')
    }
  },
  feed: async (parent, args, context, info): Promise<ProductParent[]> => {
    try {
      const products = await (context as any).db.query.products({first: 50})
      return products as ProductParent[]
    }catch(err) {
      throw new Error('trouble getting feed')
    }
  },
};
