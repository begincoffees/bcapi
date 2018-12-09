import { ProductResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
import { CartParent } from "./Cart";

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
  vendor: async (parent, args, context: any, info): Promise<UserParent> => {
    try {
      const product = await context.db.query.users({where: {products_some: {id: parent.id}}})
      return product[0] || {} as UserParent
    }catch(err) {
      console.debug('trouble getting products vendor')
    }
  },
  carts: (parent, args) => parent.carts
};
