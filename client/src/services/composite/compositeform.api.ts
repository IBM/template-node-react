import { MasterDetails } from "../../models/composite/MasterDetails";

export abstract class CompositeFormApi {
  abstract  async  getMasterDetails(): Promise<MasterDetails[][]> 
}

