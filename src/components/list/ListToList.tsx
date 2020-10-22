import React, { Component } from "react";
import ListToList from '../../ui-patterns/list/ListToList';

class ListToListView extends Component<any ,any> {
  data: any;
  
  constructor(props: any) {
    super(props);
    this.data = ["row1", "row2", "row3"];
  }

  render() {
  return (
    <div className="pattern-container">
      <ListToList  data={this.data}/>
    </div>
  );
  }
}
export default ListToListView;