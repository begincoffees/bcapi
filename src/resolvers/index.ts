
import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { AuthPayload } from "./AuthPayload";
import { Viewer } from "./Viewer";
import { MutationResult } from "./MutationResult";
import { User } from "./User";
import { Cart } from "./Cart";
import { Invoice } from "./Invoice";
import { Product } from "./Product";
import { IResolvers, ITypeMap } from "../generated/resolvers";

export const resolvers: IResolvers<ITypeMap> = {
  Query,
  Mutation,
  AuthPayload,
  Viewer,
  MutationResult,
  User,
  Cart,
  Invoice,
  Product,
};
