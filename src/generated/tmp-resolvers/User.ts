// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { UserResolvers } from "../graphqlgen";

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  cart: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  purchases: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  products: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  sales: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
