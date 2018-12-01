import { ViewerResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
import { InvoiceParent } from "./Invoice";
import { ProductParent } from "./Product";
import { Context } from "./types/Context";
import { getUserId } from "../utils";
import { CartParent } from "./Cart";

export interface ViewerParent {
  me: UserParent;
  cart: CartParent;
  purchases: InvoiceParent[];
  sales: InvoiceParent[];
  products: ProductParent[];
}

export const Viewer: ViewerResolvers.Type<TypeMap> = {
  me: async (parent, args, context: Context): Promise<UserParent> => {
    const id = getUserId(context)
    if(id){
      const me = await context.db.user({id})
      return me as any
    }
  },
  cart: async (parent, args, context: Context): Promise<CartParent> => {
    const id = getUserId(context)
    // ok ok 
    const me = await context.db.user({id}).cart()
    return me as any
  },
  purchases: parent => parent.purchases || [],
  sales: parent => parent.sales || [],
  products: parent => parent.products || []
};
