import {MockFormApi} from './displayform.mock.api';
import { FormDetails } from "../../models/form/FormDetails";
import {ObjectFactory} from 'typescript-ioc';


export const displayFormMockFactory: ObjectFactory = () => {
  console.log('ProductMock factory');
  return new FormMock();
};

export class FormMock implements MockFormApi  {
  async getFormDetails():Promise<FormDetails[]> {
    return [
        { label: "Name", txtvalue: "John Doe", type: "textinput" ,dwvalue:[]},
        { label: "Address", txtvalue: "123 Main Street", type: "textinput",dwvalue:[] },
        { label: "City", txtvalue: "Anytown", type: "textinput",dwvalue:[] },
        { label: "State", dwvalue: ["TX"], type: "dropdown",txtvalue:"" },
        { label: "ZipCode", txtvalue: "12345", type: "textinput",dwvalue:[] },
        { label: "Country", dwvalue: ["United States"], type: "dropdown",txtvalue:""  }
    ];
  }
 
  
}
