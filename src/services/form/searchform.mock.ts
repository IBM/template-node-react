import {SearchFormMockApi} from './searchform.mock.api';
import { FormData } from "../../models/form/FromData";
import {ObjectFactory} from 'typescript-ioc';


export const SearchFormMockFactory: ObjectFactory = () => {
  console.log('SearchForm factory');
  return new SearchFormMock();
};

export class SearchFormMock implements SearchFormMockApi  {
  async getFormDetails():Promise<FormData[]> {
    return [
      {
        name: "Lin",
        address: "123 Main Street",
        city: "Austin",
        state: "TX",
        zipcode: "12345",
        country: "USA"
      },
      {
        name: "Mak",
        address: "45 2nd Street",
        city: "Austin",
        state: "TX",
        zipcode: "78766",
        country: "USA"
      },
      {
        name: "Joe",
        address: "40 Down Street",
        city: "San Francisco",
        state: "CA",
        zipcode: "90706",
        country: "USA"
      }
    ];
  }
 
  
}