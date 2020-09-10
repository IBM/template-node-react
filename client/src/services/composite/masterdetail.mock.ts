import {MasterDetailMockApi} from './masterdetails.mock.api';
import { MasterDetails } from "../../models/composite/MasterDetails";
import {ObjectFactory} from 'typescript-ioc';


export const MasterDetailsMockFactory: ObjectFactory = () => {
  console.log('MasterDetailsMock factory');
  return new MasterDetailsMock();
};

export class MasterDetailsMock implements MasterDetailMockApi  {
  async getMasterDetails():Promise<MasterDetails[][]> {
   
    return [
        [
          { label: "Name", value: "Lin", type: "textinput" },
          { label: "Address", value: "123 Main Street", type: "textinput"},
          { label: "City", value: "Austin", type: "textinput"},
          { label: "State", value: "TX", type: "dropdown" },
          { label: "ZipCode", value: "12345", type: "textinput" },
          { label: "Country", value: "United States", type: "dropdown"}
        ],
        [
          { label: "Name", value: "Mak", type: "textinput"},
          { label: "Address", value: "45 2nd Street", type: "textinput"},
          { label: "City", value: "Austin", type: "textinput" },
          { label: "State", value: "TX", type: "dropdown"},
          { label: "ZipCode", value: "78766", type: "textinput" },
          { label: "Country", value: "United States", type: "dropdown"}
        ],
        [
          { label: "Name", value: "Joe", type: "textinput" },
          { label: "Address", value: "40 Down Street", type: "textinput" },
          { label: "City", value: "San Francisco", type: "textinput" },
          { label: "State", value: "CA", type: "dropdown"},
          { label: "ZipCode", value: "90706", type: "textinput"},
          { label: "Country", value: "United States", type: "dropdown"}
        ]
      ];
  }
 
  
}
