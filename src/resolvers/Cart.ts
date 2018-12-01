import { CartResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ProductParent } from "./Product";
import { UserParent } from "./User";

export interface CartParent {
  id: string;
  itemCount?: number;
  totalPrice?: string;
  items: ProductParent[];
  user: UserParent;
}

export const Cart: CartResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  itemCount: parent => parent.itemCount,
  totalPrice: parent => parent.totalPrice,
  items: (parent, args) => parent.items,
  user: (parent, args) => parent.user
};
