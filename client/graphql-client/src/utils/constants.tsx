import { gql } from "graphql-request";


// export const getAllCustomersQuery = gql`
//     query($filename: String) { 
//         getData(filename: $filename){
//             __typename
//             ... on Customer {
//                 email
//                 forename
//                 surname
//                 contactNumber
//                 postcode
//             }
//             ... on Product{
//                 vin
//                 colour
//                 make
//                 model
//                 price
//             }
//         }
//     }
// `;

export const getAllCustomersQuery = gql`
    query($filename: String = "customer") { 
        getData(filename: $filename){
            __typename
            ... on Customer {
                email
                forename
                surname
                contactNumber
                postcode
            }
        }
    }
`;

// export const getAllCustomersQuery = gql`
//     query { 
//         getAllCustomers(){
//             email
//             forename
//             surname
//             contactNumber
//             postcode
//         }
//     }
// `;

