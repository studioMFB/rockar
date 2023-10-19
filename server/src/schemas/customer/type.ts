import { gql } from "apollo-server-express";


export const CustomerType = gql`

  type Customer implements ICustomer {
    # id: ID!
    email: EmailAddress
    forename: String!
    surname: String!
    contactNumber: PhoneNumber
    postcode: PostalCode
  }

  type Query {
    getAllCustomers: [Customer] 
    getCustomer(arg:any!): Customer 
   }

`;

// module.exports = typeDefs;


// export const CustomerType = `
//   type Customer {
//     # id: ID!
//     email: EmailAddress
//     forename: String!
//     surname: String!
//     contactNumber: PhoneNumber
//     postcode: PostalCode
//   }

//   type Query {
//     getAllCustomers: [Customer] 
//     getCustomer(id: ID!): Customer 
//    }
// `;
