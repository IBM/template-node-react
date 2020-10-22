import { CompositeFormApi } from './compositeform.api';
import { MasterDetails } from "../../models/composite/MasterDetails";

export class CompositeFormService implements CompositeFormApi {
  getMasterDetails(): Promise<MasterDetails[][]> {
    throw new Error("Method not implemented.");
  }
  
}
