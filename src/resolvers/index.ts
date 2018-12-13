import { IResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { AuthPayload } from "./AuthPayload";
import { Viewer } from "./Viewer";
import { MutationResult } from "./MutationResult";
import { User } from "./User";
import { Cart } from "./Cart";
import { Invoice } from "./Invoice";
import { Product } from "./Product";
import { PaymentRecord } from "./PaymentRecord";

export const resolvers: IResolvers<TypeMap> = {
  Query,
  Mutation,
  AuthPayload,
  Viewer,
  MutationResult,
  User,
  Cart,
  Invoice,
  Product,
  PaymentRecord
};
