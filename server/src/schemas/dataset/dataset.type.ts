import { gql } from "apollo-server-express";


export const DatasetType = gql`

union DatasetResult = Customer | Product

  type Dataset{
    filename: String!
  }

  type Query {
    getData(filename: String): [DatasetResult]
   }
`;
