import React, { Component } from "react";
import {Container} from 'typescript-ioc';
import CreateReadUpdateDelete from '../../ui-patterns/composite/CreateReadUpdateDelete';
import {MockFormApi} from '../../services';
class CreateReadUpdateDeleteView extends Component<any ,any> {
  formApi: MockFormApi;
  constructor(props: any) {
    super(props);
    this.formApi =  this.formService();
  }
 formService(): MockFormApi {
    return Container.get(MockFormApi);
  }  

  render() {
  return (
    <div className="pattern-container">
      <CreateReadUpdateDelete  data={this.formApi} />
    </div>
  );
  }
}
export default CreateReadUpdateDeleteView;