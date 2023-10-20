import http from "http";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schemas/index";
import 'dotenv/config';// Needed to access ENV variables.


async function startApolloServer(schema: any, resolvers: any) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers: resolvers,
        // Tell Express to attach GraphQL functionality to the server.
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    }) as any;

    // Start the GraphQL server.
    await server.start();

    server.applyMiddleware({ app });

    const port = process.env.PORT;

    await new Promise<void>((resolve) =>
        httpServer.listen({ port: port }, resolve)
    );
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
}

// Run the server.
startApolloServer(typeDefs, resolvers);