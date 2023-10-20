import { gql } from 'apollo-server-express';
import { CustomerType, CustomerQuery } from './customer';
import { ProductType, ProductQuery } from './product';
import { DatasetType, DatasetQuery } from './dataset';


// Only use gql in this file. types in other files are just simple strings
export const typeDefs = gql`
     type Query
     ${DatasetType}
     ${CustomerType}
     ${ProductType}
`;

export const resolvers = {
    DatasetResult: {
        __resolveType(obj:any, contextValue:any, info:any) {
            // Only Customer has a surname field
            if (obj.surname) {
                return 'Customer';
            }
            // Only Product has a vin field
            if (obj.vin) {
                return 'Product';
            }
            return null; // GraphQLError is thrown
        }
    },
    Query: {
        ...DatasetQuery,
        ...CustomerQuery,
        ...ProductQuery,
    }
};