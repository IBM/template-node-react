import { SearchListData } from "../../models/list/SearchListData";
export abstract class SearchListMockApi {
  abstract  async  getSearchListData(): Promise<SearchListData[]> ;
}
