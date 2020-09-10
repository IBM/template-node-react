import React, { Component } from "react";
import {Container} from 'typescript-ioc';
import MasterDetail from '../../ui-patterns/composite/MasterDetail';
import {MasterDetailMockApi} from '../../services';
class MasterDetailView extends Component<any ,any> {
  masterdetailsApi: MasterDetailMockApi;
  constructor(props: any) {
    super(props);
    this.masterdetailsApi =  this.formService();
  }
 formService(): MasterDetailMockApi {
    return Container.get(MasterDetailMockApi);
  }  

  render() {
  return (
    <div className="pattern-container">
      <MasterDetail  data={this.masterdetailsApi} />
    </div>
  );
  }
}
export default MasterDetailView;