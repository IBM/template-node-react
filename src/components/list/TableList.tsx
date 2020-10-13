import React, { Component } from "react";
import TableList from '../../ui-patterns/list/TableList';
import {Container} from 'typescript-ioc';
import {TableListMockApi} from '../../services';

class TableListView extends Component<any ,any> {
  tableApi: TableListMockApi;
  
  constructor(props: any) {
    super(props);
    this.tableApi =  this.tableService();
  }
  tableService(): TableListMockApi {
    return Container.get(TableListMockApi);
  }  
  render() {
  return (
    <div className="pattern-container">
      <TableList  data={this.tableApi}/>
    </div>
  );
  }
}
export default TableListView;