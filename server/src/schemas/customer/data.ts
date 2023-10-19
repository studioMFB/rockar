import { ICustomer } from "./interface";


// export const customers: ICustomer[] = [
//   { id: 0, email: "", forename: "", surname: "A", contactNumber: 1, postcode: "" },
//   { id: 1, email: "", forename: "", surname: new String("B"), contactNumber: 0, postcode: "" }
// ];

const customers:  { id: number; email: string; forename: string; surname: string; contactNumber: number; postcode: string; }[] = [
  { id: 0, email: "", forename: "", surname: "A", contactNumber: 1, postcode: "" },
  { id: 1, email: "", forename: "", surname: "B", contactNumber: 0, postcode: "" }
];

export default customers;