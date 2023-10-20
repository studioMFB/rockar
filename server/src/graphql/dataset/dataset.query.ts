import csv from "csvtojson";
import { IDataset } from "./dataset.interface";
// import someDatabaseClient from './';


const ERROR_MSG = "Cannot connect to any data source";


export const DatasetQuery = {

    getData: async (root:any, args: IDataset) => {
        const useCsv: string | undefined = process.env.USE_CSV;
        const dirPath: string | undefined = process.env.CSV_DIR_PATH;
        const filename: string = args.filename || "customer";

        console.log("process.env.USE_CSV ", useCsv);
        console.log("process.env.CSV_DIR_PATH ", dirPath);
        console.log("filename ", filename);
        try {
            if (dirPath !== undefined && filename !== undefined) {

                if (useCsv === 'true') {
                    // Parse CSV to return data as Json
                    const filePath = `${dirPath}/${filename}.csv`;
                    console.log("filePath ", filePath);

                    const jsonData = await csv().fromFile(filePath);
                    console.log("jsonData ", jsonData);

                    return jsonData;

                } else if (useCsv === 'false') {
                    // Connect to a database to fetch data
                    // const data = await someDatabaseClient.query(process.env.DB_CONNECTION_STRING);
                    // return data;
                }
                else {
                    throw new Error(ERROR_MSG);
                }
            }

        } catch {
            throw new Error(ERROR_MSG);
        }

    }
};