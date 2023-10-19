import { gql } from 'apollo-server-express';
import { CustomerType, CustomerQuery } from './customer';
import { ProductType, ProductQuery } from './product';

import csv from "csvtojson";
// import someDatabaseClient from './';


// Only use gql in this file. types in other files are just simple strings
export const typeDefs = gql`
     type Query
     ${CustomerType}
     ${ProductType}
`;

export const resolvers = {
  Query: {
    ...CustomerQuery,
    ...ProductQuery,

    // getData: async (filename: string = "customer") => {
    //   try {
    //     if (process.env.USE_CSV === 'true') {
    //       // Parse CSV to return data as Json
    //       const filePath = `${process.env.CSV_DIR_PATH}/${filename}.csv`;
    //       const jsonData = await csv().fromFile(filePath);
    //       return jsonData;

    //     } else {
    //       // Connect to a database to fetch data
    //       // const data = await someDatabaseClient.query(process.env.DB_CONNECTION_STRING);
    //       // return data;
    //     }
    //   } catch (e) {
    //     throw new Error(e);
    //   }

    // },
  }
};