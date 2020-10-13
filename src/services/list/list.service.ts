import { ListApi } from './list.api';
import { TableData } from "../../models/list/TableData";
import { ListToListData } from "../../models/list/ListToListData";
import { LinkedListData } from "../../models/list/LinkedListData";
import { SearchListData } from "../../models/list/SearchListData";
export class ListService implements ListApi {
 
 async getLinkedListData(): Promise<LinkedListData[]> {
   throw new Error("Method not implemented.");
 }
 async getTableData(): Promise<TableData[]> {
      throw new Error("Method not implemented.");
  } 
  async getList2ListData(): Promise<ListToListData[]> {
    throw new Error("Method not implemented.");
} 
async getSearchListData(): Promise<SearchListData[]> {
  throw new Error("Method not implemented.");
}
}
