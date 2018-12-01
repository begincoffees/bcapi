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
  vendor: (parent, args) => parent.vendor,
  carts: (parent, args) => parent.carts
};
