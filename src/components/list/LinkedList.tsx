import React, { Component } from "react";
import LinkedList from '../../ui-patterns/list/LinkedList';
import {Container} from 'typescript-ioc';
import {LinkedListMockApi} from '../../services';

class LinkedListView extends Component<any ,any> {
  linkedlistApi: LinkedListMockApi;
  constructor(props: any) {
    super(props);
    this.linkedlistApi =  this.linkedlistService();
  }
  linkedlistService(): LinkedListMockApi {
    return Container.get(LinkedListMockApi);
  } 
  render() {
  return (
    <div className="pattern-container">
      <LinkedList  data={this.linkedlistApi}/>
    </div>
  );
  }
}
export default LinkedListView;