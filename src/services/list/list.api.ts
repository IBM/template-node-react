
import { TableData } from "../../models/list/TableData";
import { LinkedListData } from "../../models/list/LinkedListData";
import { ListToListData } from "../../models/list/ListToListData";
import { SearchListData } from "../../models/list/SearchListData";
export abstract class ListApi {
  abstract  async  getTableData(): Promise<TableData[]> ;
  abstract  async  getLinkedListData(): Promise<LinkedListData[]> ;
  abstract  async  getList2ListData(): Promise<ListToListData[]> ;
  abstract  async  getSearchListData(): Promise<SearchListData[]> ;
}

