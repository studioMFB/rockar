import http from "http";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schemas/index";
import 'dotenv/config';// Needed to access ENV variables.


// const DEFAULT_URL = `${document.location.protocol}//${document.location.host}`;


async function startApolloServer(schema: any, resolvers: any) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        // Tell Express to attach GraphQL functionality to the server.
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    }) as any;

    // Start the GraphQL server.
    await server.start();

    server.applyMiddleware({ app });

    await new Promise<void>((resolve) =>
        httpServer.listen({ port: 4000 }, resolve)
    );
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    // console.log(`Server ready at ${DEFAULT_URL}:4000${server.graphqlPath}`);
}

// Run the server.
startApolloServer(typeDefs, resolvers);


// const server = new ApolloServer({ typeDefs, resolvers });
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// export default server.createHandler({ path: '/api/graphql' });