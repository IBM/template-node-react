import { FormData } from "../../models/form/FromData";
export abstract class SearchFormMockApi {
  abstract  async  getFormDetails(): Promise<FormData[]> ;
}

