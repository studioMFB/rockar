import { gql } from 'apollo-server-express';
import { CustomerType, CustomerQuery } from './customer/customer.index';
import { ProductType, ProductQuery } from './product/product.index';
import { DatasetType, DatasetQuery } from './dataset/dataset.index';


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