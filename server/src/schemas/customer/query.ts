// import {customers} from "./data";
import customers from "./data";
import { ICustomer } from "./interface";


export const CustomerQuery = {
    getAllCustomers: () => customers,

    getCustomer: (root:any, args:ICustomer) => { 
      return customers.find((customer) => customer.forename.toLowerCase() == args.forename.toLowerCase());
    },
};
