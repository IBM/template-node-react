
import {ObjectFactory} from 'typescript-ioc';
import {SearchListMockApi} from './searchlist.mock.api';
import { SearchListData } from "../../models/list/SearchListData";



export const SearchListMockFactory: ObjectFactory = () => {
  console.log('ListToList factory');
  return new SearchListMock();
};

export class SearchListMock implements SearchListMockApi  {
 async getSearchListData(): Promise<SearchListData[]> {
    return [
        {
            id: "1",
            name: "Load Balancer 1",
            port: 25,
            status: "Disabled"
          },
          {
            id: "2",
            name: "Load Balancer 2",
            port: 80,
            status: "Starting"
          },
          {
            id: "3",
            name: "Load Balancer 3",
            port: 443,
            status: "Active"
          }
        
      ]
  }
 
  
}