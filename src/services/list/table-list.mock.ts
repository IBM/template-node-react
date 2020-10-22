import {TableListMockApi} from './table-list.mock.api';
import { TableData } from "../../models/list/TableData";
import {ObjectFactory} from 'typescript-ioc';


export const TableMockFactory: ObjectFactory = () => {
  console.log('Table factory');
  return new TableListMock();
};

export class TableListMock implements TableListMockApi  {
 async getTableData(): Promise<TableData[]> {
    return [
        {
          Name: "Lin",
          Address: "123 Main Street",
          City: "Austin",
          State: "TX",
          ZipCode: "12345",
          Country: "USA"
        },
        {
          Name: "Mak",
          Address: "45 2nd Street",
          City: "Austin",
          State: "TX",
          ZipCode: "78766",
          Country: "USA"
        },
        {
          Name: "Joe",
          Address: "40 Down Street",
          City: "San Francisco",
          State: "CA",
          ZipCode: "90706",
          Country: "USA"
        }
      ];
  }
 
  
}