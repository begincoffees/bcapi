import { TypeMap } from "./types/TypeMap";
import { ProductParent } from "./Product";
import { PaymentRecordParent } from "./PaymentRecord";
import { UserParent } from "./User";
import { InvoiceResolvers } from "../generated/resolvers";

export interface InvoiceParent {
  id: string;
  items: ProductParent[];
  amount?: string;
  email: string;
  record?: string;
  stripeRecord: PaymentRecordParent;
  created?: number;
  stripePaymentId?: string;
  stripeCustomerId?: string;
  customer?: UserParent;
  vendors: UserParent[];
}

export const Invoice: InvoiceResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  items: (parent, args) => parent.items,
  amount: parent => parent.amount,
  email: parent => parent.email,
  record: parent => parent.record,
  stripeRecord: (parent, args) => parent.stripeRecord,
  created: parent => parent.created,
  stripePaymentId: parent => parent.stripePaymentId,
  stripeCustomerId: parent => parent.stripeCustomerId,
  customer: (parent, args) => parent.customer,
  vendors: (parent, args) => parent.vendors
};
