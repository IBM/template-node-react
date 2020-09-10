import { FormDetails } from "../../models/form/FormDetails";
import { FormData } from "../../models/form/FromData";
import { FormWizard1 } from "../../models/form/FormWizard1";
import { FormWizard2 } from "../../models/form/FormWizard2";
export abstract class FormApi {
  abstract  async  getFormDetails(): Promise<FormDetails[]> ;
  abstract  async  doPostFormValues(details:FormData):Promise<FormData[]> ;
  abstract  async  doUpdateFormValues(details:FormData):Promise<FormData[]> ;
  abstract  async  doPostFormWizard1(details:FormWizard1):Promise<FormWizard1[]> ;
  abstract  async  doPostFormWizard2(details:FormWizard1):Promise<FormWizard2[]> ;
  abstract  async  doSearch(details:FormData):Promise<FormData[]> ;
}

