import { FormApi, } from './forms.api';
import { FormDetails } from "../../models/form/FormDetails";
import { FormData } from "../../models/form/FromData";
import { FormWizard1 } from '../../models/form/FormWizard1';
import { FormWizard2 } from '../../models/form/FormWizard2';
export class FormService implements FormApi {
 
  async getFormDetails(): Promise<FormDetails[]> {

    // return fetch('/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(this.mapProductQuery(query))
    // }).then(response => response.json())
    return [];
  }

  async doPostFormValues(details: FormData): Promise<FormData[]> {
    console.log("Save the Form Values" + details);

    return [];

  }
  async doUpdateFormValues(details: FormData): Promise<FormData[]> {

    console.log("Update the Form Values" + details);
    return [];

  }
  async doPostFormWizard1(details: FormWizard1): Promise<FormWizard1[]> {
    console.log("Save the FormWizard1 Values" + details);

    return [];
   
  }
  async  doPostFormWizard2(details: FormWizard1): Promise<FormWizard2[]> {
    console.log("Save the FormWizard1 Values" + details);

    return [];
  }
  async  doSearch(details: FormData): Promise<FormData[]> {
    console.log("Search the form details" + details);

    return [];
  }
}
