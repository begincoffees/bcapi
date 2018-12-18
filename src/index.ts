import { GraphQLServer } from 'graphql-yoga'
import { makeExecutableSchema } from '../node_modules/graphql-tools';
import { Prisma } from './generated/prisma-client/'
import { typeDefs} from './generated/prisma-client/prisma-schema';
import { resolvers } from './resolvers';

const schema = makeExecutableSchema({typeDefs})

const withDB = (req) => ({
  ...req,
  headers: {
    ...req.headers,
    Authorization: `Bearer ${process.env.PRISMA_TOKEN}`
  },
  db: new Prisma({
    schema,
    resolvers,
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET || 'bigboi',
  } as any)
})


const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => withDB(req)
} as any)

const options = {
  port: process.env.PORT,
  endpoint: '/bcgraph'
}

server.start(options).then(() => {
  console.log(`Server is up ${process.env.PORT}`)
});
