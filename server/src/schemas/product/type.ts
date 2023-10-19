import { gql } from "apollo-server-express";


export const ProductType = gql`

  type Product implements IProduct {
    vin: String!
    make: String!
    colour: String!
    model: String!
    price: Int!
  }

  type Query {
    getAllProducts: [Product] 
    getProduct(arg: any!): Product 
   }

`;

