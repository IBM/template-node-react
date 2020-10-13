import {LinkedListMockApi} from './linkedlist.mock.api';
import { LinkedListData } from "../../models/list/LinkedListData";
import {ObjectFactory} from 'typescript-ioc';


export const LinkedListMockFactory: ObjectFactory = () => {
  console.log('Table factory');
  return new LinkedListMock();
};

export class LinkedListMock implements LinkedListMockApi  {
 async getLinkedListData(): Promise<LinkedListData[]> {
   return [
     {
    "United States": {
      "TX": ["Austin", "Dallas", "Other"],
      "CA": ["San Francisco", "Los Angeles", "Other"],
      "Other": ["Other"]
    },
    Mexico: {
      "Aguascalientes": ["Aguascalientes", "Calvillo", "Other"],
      "Baja California": ["Tijuana", "Mexicali", "Other"],
      "Other": ["Other"]
    }
  }
   ]
   
  }
 
  
}