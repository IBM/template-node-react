import { TableData } from "../../models/list/TableData";
export abstract class TableListMockApi {
  abstract  async  getTableData(): Promise<TableData[]> ;
}

