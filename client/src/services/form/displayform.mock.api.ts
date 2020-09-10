import { FormDetails } from "../../models/form/FormDetails";
export abstract class MockFormApi {
  abstract  async  getFormDetails(): Promise<FormDetails[]> ;
}

