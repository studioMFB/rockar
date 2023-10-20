

import { getAllCustomersQuery } from "@/utils/constants";
import { request } from "graphql-request";

// // import Pages from './pages';
import { ApolloClient } from "@apollo/client/core/ApolloClient";
import { NormalizedCacheObject } from "@apollo/client/cache/inmemory/types";
import { InMemoryCache } from "@apollo/client/cache/inmemory/inMemoryCache";

// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL,
  cache: new InMemoryCache(),
});


// import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
// import { request } from "graphql-request"; //allows us to perform a request on our server
// import { getAllCustomersQuery } from "../utils/constants"; 

// const Home: NextPage = ({result,}: InferGetStaticPropsType<typeof getStaticProps>) => {
//   return (
//     <div>
//       {result.map((item: any) => { //render the 'result' array to the UI 
//         return <p key={item.id}>{item.name}</p>;
//       })}
//     </div>
//   );
// };

// //fetch data from the server
// export const getStaticProps: GetStaticProps = async () => {
//   //the first argument is the URL of our GraphQL server
//   const res = await request("http://localhost:4000/graphql", getAllCustomersQuery)as any;
//   const result = res.getAllPeople;
//   return {
//     props: {
//       result,
//     }, // will be passed to the page component as props
//   };
// };

// export default Home;


export async function getStaticProps() {
  const url = process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL!;

  const res = await request(url, getAllCustomersQuery)as any;
  const result = JSON.stringify(res.getAllPeople) || null;

  return {
    props: {
      result,
    },
  };
}

export default function Home({result}:any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      WELCOME

      <ul>
          {result.map(({ email, forename, surname }:any) => (
            <li key={surname}>
              {forename}
              <br />
              {surname}
              <br />
              {email}
            </li>
          ))}
        </ul>
    </main>
  )
}
