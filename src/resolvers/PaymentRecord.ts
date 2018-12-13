import { PaymentRecordResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface PaymentRecordParent {
  amount: number;
  balanceTransaction: string;
  created: number;
  currency: string;
  stripeCustomerId: string;
  stripePaymentId: string;
  status: string;
}

export const PaymentRecord: PaymentRecordResolvers.Type<TypeMap> = {
  amount: parent => parent.amount,
  balanceTransaction: parent => parent.balanceTransaction,
  created: parent => parent.created,
  currency: parent => parent.currency,
  stripeCustomerId: parent => parent.stripeCustomerId,
  stripePaymentId: parent => parent.stripePaymentId,
  status: parent => parent.status
};
