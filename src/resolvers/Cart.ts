import { CartResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ProductParent } from "./Product";
import { getUserId } from "../utils";
import { Context } from "./types/context";

export interface CartParent {
  user: string;
  itemCount?: number;
  totalPrice?: string;
  items: ProductParent[];
}

export const Cart: CartResolvers.Type<TypeMap> = {
  id: (parent, args, context: Context, info) => {
    const id = getUserId(context)
    console.log(id)
    return id
  },
  itemCount: parent => parent.itemCount,
  totalPrice: parent => parent.totalPrice,
  items: (parent, args) => parent.items
};
