// // import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
// // import { request } from "graphql-request"; //allows us to perform a request on our server
// // import { getAllCustomersQuery } from "./../utils/constants"; 
// // // import Link from "next/link";


// // const Home: NextPage = ({
// //   result, //extract the 'result' prop 
// // }: InferGetStaticPropsType<typeof getStaticProps>) => {
// //   return (
// //     <div >
// //       {result.map((item: any) => { //render the 'result' array to the UI 
// //         return <p key={item.id}>{item.name}</p>;
// //       })}
// //     {/* <Link href="/addpage">Product </Link> */}
// //     </div>
// //   );
// // };
// // //fetch data from the server
// // export const getStaticProps: GetStaticProps = async () => {
// //   //the first argument is the URL of our GraphQL server

// // //   const port = process.env.NEXT_PUBLIC_SERVER_PORT;
// // //   console.log("PORT ", port);

// // //   if(port === undefined){
// // //     throw new Error("Port is undefined");
// // //     return {
// // //         props: {
          
// // //         },
// // //       };
// // //   }
// // // const res = await request(`http://localhost:${port}/graphql`, getAllCustomersQuery) as any;
// // const res = await request(`http://localhost:4000/graphql`, getAllCustomersQuery) as any;
// // const result = JSON.stringify(res.getAllPeople);

// //   return {
// //     props: {
// //       result,
// //     }, // will be passed to the page component as props
// //   };
// // };
// // export default Home;


// import Head from 'next/head';
// import styles from './../styles/Home.module.scss';
// import injectStyles from './../styles/styles';
// import ReactDOM from 'react-dom/client';
// import { ApolloClient, NormalizedCacheObject, ApolloProvider, gql } from '@apollo/client';

// // import Pages from './pages';
// // import { cache } from './cache';

// export const typeDefs = gql`
//   extend type Query {
//     isLoggedIn: Boolean!
//     cartItems: [ID!]!
//   }
// `;

// // Set up our apollo-client to point at the server we created
// // this can be local or a remote endpoint
// const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
//   cache,
//   uri: 'http://localhost:4000/graphql',
//   headers: {
//     authorization: localStorage.getItem('token') || '',
//     'client-name': 'Space Explorer [web]',
//     'client-version': '1.0.0',
//   },
//   typeDefs,
//   resolvers: {},
// });

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>
//         <h1 className={styles.title}>Welcome</h1>
//       </main>
//     </div>
//   );
// }

