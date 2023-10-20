import { ICustomer } from "./customer.interface";


// const customers:  { email: string; forename: string; surname: string; contactNumber: number; postcode: string; }[] = [
const customers: ICustomer[] = [
  { email: "ama@gmail.com", forename: "Ama", surname: "A", contactNumber: 1, postcode: "HU5" },
  { email: "bob@gmail.com", forename: "Bob", surname: "B", contactNumber: 0, postcode: "HU6" }
];

export default customers;