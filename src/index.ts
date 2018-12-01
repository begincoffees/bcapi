import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers/index'
import { Prisma } from 'prisma-binding';

const withDB = (req) => ({
  ...req,
  headers: {
    ...req.headers,
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDM2MzMwODUsIm5iZiI6MTU0MzU0NjY4NX0.fjmRfPkQr9kOI-fnWJlLJjN0l5JdvOUlZlXLb3b1md8`
  },

  db: new Prisma({
    typeDefs: './src/generated/prisma.graphql',
    endpoint: `http://begincoffeesprisma.herokuapp.com/bcprisma/test`,
    secret: `576eef8cb1f325292da28c44ff8c48237782409c`
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
