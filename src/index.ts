
import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { createContext } from './context'
import { resolvers } from "@generated/type-graphql";

const app = async () => {
  const schema = await tq.buildSchema({ resolvers })

  const context = createContext()

  new ApolloServer({ schema, context }).listen({ port: 4000 }, () =>
    console.log('🚀 Server ready at: http://localhost:4000'),
  )
}

app()