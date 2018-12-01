import { InvoiceResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ProductParent } from "./Product";
import { UserParent } from "./User";

export interface InvoiceParent {
  id: string;
  items: ProductParent[];
  amount?: string;
  email: string;
  customer?: UserParent;
  vendors: UserParent[];
}

export const Invoice: InvoiceResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  items: (parent, args) => parent.items,
  amount: parent => parent.amount,
  email: parent => parent.email,
  customer: (parent, args) => parent.customer,
  vendors: (parent, args) => parent.vendors
};
