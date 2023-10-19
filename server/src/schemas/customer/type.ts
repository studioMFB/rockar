import { gql } from "apollo-server-express";
import { EmailAddress, PhoneNumber, PostalCode } from 'graphql-scalars/typings/typeDefs';


export const CustomerType = gql`

  type Customer {
    id: ID!
    # email: EmailAddress
    email: String
    forename: String!
    surname: String!
    # contactNumber: PhoneNumber
    contactNumber: Int
    # postcode: PostalCode
    postcode: String
  }

  type Query {
    getAllCustomers: [Customer] 
    getCustomer(id:ID!): Customer 
   }
`;


// export const CustomerType = `

//   type Customer{
//     # id: ID!
//     email: EmailAddress
//     forename: String!
//     surname: String!
//     contactNumber: PhoneNumber
//     postcode: PostalCode
//   }

//   type Query {
//     getAllCustomers: [Customer] 
//     getCustomer(arg:any!): Customer 
//    }
// `;
