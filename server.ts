import { ApolloServer,   } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer, gql } from 'apollo-server-core'
import express from 'express'
import http from 'http'

import { typeDefs } from './schema'
import { resolvers } from './resolvers'

async function startApolloServer(typeDefs: any, resolvers: any) {
  const app = express()
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  

  await server.start()

  server.applyMiddleware({ app })

  await new Promise((res, rej) => {
    httpServer.listen({port: 3000}, res)
  })

  console.log(`http server up 🚀 on localhost:3000/${server.graphqlPath}` )
}

startApolloServer(typeDefs, resolvers)