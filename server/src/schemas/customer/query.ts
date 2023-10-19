import {customers} from "./data";


export const CustomerQuery = {
    getAllCustomers: () => customers,

    getCustomer: (_: any, arg: String) => { 
      const customer = customers.find((customer) => customer.surname == arg);

      if(customer){
        return customer;
      }
      else{
        return console.log("No costumer with this username was found!");
      }
    },
};
