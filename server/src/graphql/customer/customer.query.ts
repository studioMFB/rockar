// import {customers} from "./data";

import csv from "csvtojson";
import { ICustomer } from "./customer.interface";


export const CustomerQuery = {
  getAllCustomers: async () => {
    try {
      const dirPath: string | undefined = process.env.CSV_DIR_PATH;
      const filename: string = "customer";

      console.log("process.env.CSV_DIR_PATH ", dirPath);
      console.log("filename ", filename);

      if (dirPath !== undefined && filename !== undefined) {

        // Parse CSV to return data as Json
        const filePath = `${dirPath}/${filename}.csv`;
        console.log("filePath ", filePath);

        const jsonData = await csv().fromFile(filePath);
        console.log("jsonData ", jsonData);

        return jsonData.map(c => {
          return {
            email: c.email,
            forename: c.forename,
            surname: c.surname,
            contactNumber: c.contactNumber,
            postcode: c.postcode
          }
        });
      }
      else {
        throw new Error("Could not fetch the data!");
      }
    }
    catch (error) {
      throw new Error("Something went wrong")
    }
  }

  // getCustomer: (root:any, args:ICustomer) => { 
  //   return customers.find((customer) => customer.forename.toLowerCase() == args.forename.toLowerCase());
  // },
};
