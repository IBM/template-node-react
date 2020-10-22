import { ListToListData } from "../../models/list/ListToListData";
export abstract class ListToListMockApi {
  abstract  async  getList2Data(): Promise<ListToListData[]> ;
}
