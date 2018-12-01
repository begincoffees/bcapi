import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers/index'
import { Prisma } from 'prisma-binding';

const withDB = (req) => ({
  ...req,
  headers: {
    ...req.headers,
    Authorization: `Bearer ${process.env.PRISMA_TOKEN}`
  },

  db: new Prisma({
    typeDefs: './src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET
  } as any)
})

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => withDB(req)
} as any)

const options = {
  port: process.env.PORT || 6006,
  endpoint: '/bcgraph'
}

server.start(options).then(() => {
  console.log(`Server is up`)
});
