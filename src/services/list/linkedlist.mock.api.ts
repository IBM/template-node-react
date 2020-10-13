import { LinkedListData } from "../../models/list/LinkedListData";
export abstract class LinkedListMockApi {
  abstract  async  getLinkedListData(): Promise<LinkedListData[]> ;
}

