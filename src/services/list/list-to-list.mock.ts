
import {ObjectFactory} from 'typescript-ioc';
import {ListToListMockApi} from './list-to-list.mock.api';
import { ListToListData } from "../../models/list/ListToListData";



export const ListToListMockFactory: ObjectFactory = () => {
  console.log('ListToList factory');
  return new List2ListMock();
};

export class List2ListMock implements ListToListMockApi  {
 async getList2Data(): Promise<ListToListData[]> {
    return [
        {
          id: "aa",
          name: "Load Balancer 1",
          port: 25
        },
        {
          id: "ab",
          name: "Load Balancer 2",
          port: 80
        },
        {
          id: "ac",
          name: "Load Balancer 3",
          port: 443
        },
        
      ]
  }
 
  
}