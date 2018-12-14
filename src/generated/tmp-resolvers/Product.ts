// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { ProductResolvers } from "../graphqlgen";

export const Product: ProductResolvers.Type = {
  ...ProductResolvers.defaultResolvers,

  vendor: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  carts: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
