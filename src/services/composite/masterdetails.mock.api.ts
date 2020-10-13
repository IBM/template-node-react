import { MasterDetails } from "../../models/composite/MasterDetails";
export abstract class MasterDetailMockApi {
  abstract  async  getMasterDetails(): Promise<MasterDetails[][]> ;
}

