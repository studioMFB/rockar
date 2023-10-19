import {customers} from "./data";


export const CustomerQuery = {
    getAllCustomers: () => customers,

    getCustomer: (_: any, args: any) => { 
      return customers.find((customer) => customer.surname === args.surname);
    },
};
