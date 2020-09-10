import React, { Component } from "react";
import SearchList from '../../ui-patterns/list/SearchList';

class SearchListView extends Component<any ,any> {
  data: any;
  
  constructor(props: any) {
    super(props);
    this.data = ["row1", "row2", "row3"];
  }

  render() {
  return (
    <div className="pattern-container">
      <SearchList  data={this.data}/>
    </div>
  );
  }
}
export default SearchListView;