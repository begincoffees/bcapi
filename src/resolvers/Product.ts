import { ProductResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
import { CartParent } from "./Cart";
import { Context } from "./types/Context";

export interface ProductParent {
  id: string;
  name?: string;
  price?: string;
  description?: string;
  varietal?: string;
  vendor?: UserParent;
  carts: CartParent[];
}

export const Product: ProductResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  name: parent => parent.name,
  price: parent => parent.price,
  description: parent => parent.description,
  varietal: parent => parent.varietal,
  vendor: async (parent, args, context: Context, info): Promise<UserParent> => {
    try {
      const user = await context.db.query
        .users({where: {
          products_some: {id: parent.id}
        }})
        .then(res => res)

      return user as any
    }catch(err) {
      console.debug('trouble getting products vendor')
    }
  },
  carts: (parent, args) => parent.carts
};
