import { gql } from 'apollo-server-express';
import { CustomerType, CustomerQuery } from './customer';
import { ProductType, ProductQuery } from './product';


// remember we only use gql in this file. types in other files are just simple strings
export const typeDefs = gql`
     type Query
     ${CustomerType}
     ${ProductType}

`
export const resolvers = {
    Query: {
        ...CustomerQuery,
        ...ProductQuery
    },
}