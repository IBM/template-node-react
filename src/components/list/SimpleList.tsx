import React, { Component } from "react";
import SimpleList from '../../ui-patterns/list/SimpleList';

class SimpleListView extends Component<any ,any> {
  data: any;
  
  constructor(props: any) {
    super(props);
    this.data = ["row1", "row2", "row3"];
  }

  render() {
  return (
    <div className="pattern-container">
      <SimpleList  data={this.data}/>
    </div>
  );
  }
}
export default SimpleListView;