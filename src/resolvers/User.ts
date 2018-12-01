import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { CartParent } from "./Cart";
import { InvoiceParent } from "./Invoice";
import { ProductParent } from "./Product";

export interface UserParent {
  id: string;
  role?: string;
  permissions: string[];
  email?: string;
  firstName?: string;
  lastName?: string;
  bizName?: string;
  password?: string;
  cart?: CartParent;
  purchases: InvoiceParent[];
  products: ProductParent[];
  sales: InvoiceParent[];
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  role: parent => parent.role,
  permissions: parent => parent.permissions,
  email: parent => parent.email,
  firstName: parent => parent.firstName,
  lastName: parent => parent.lastName,
  bizName: parent => parent.bizName,
  password: parent => parent.password,
  cart: parent => parent.cart,
  purchases: (parent, args) => parent.purchases,
  products: (parent, args) => parent.products,
  sales: (parent, args) => parent.sales
};
