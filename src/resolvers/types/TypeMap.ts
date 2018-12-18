import { ITypeMap } from "../../generated/resolvers";
import { QueryParent } from "../Query";
import { MutationParent } from "../Mutation";
import { AuthPayloadParent } from "../AuthPayload";
import { ViewerParent } from "../Viewer";
import { MutationResultParent } from "../MutationResult";
import { UserParent } from "../User";
import { CartParent } from "../Cart";
import { InvoiceParent } from "../Invoice";
import { ProductParent } from "../Product";
import { PaymentRecordParent } from "../PaymentRecord";

import { Context } from "./context";

export interface TypeMap extends ITypeMap {
  Context: Context;
  QueryParent: QueryParent;
  MutationParent: MutationParent;
  AuthPayloadParent: AuthPayloadParent;
  ViewerParent: ViewerParent;
  MutationResultParent: MutationResultParent;
  UserParent: UserParent;
  CartParent: CartParent;
  InvoiceParent: InvoiceParent;
  ProductParent: ProductParent;
  PaymentRecordParent: PaymentRecordParent;
}
