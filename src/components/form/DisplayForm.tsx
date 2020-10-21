import React, { Component } from "react";
import { Container } from 'typescript-ioc';
import DisplayForm from "../../ui-patterns/form/DisplayForm";
import { MockFormApi } from '../../services';
class FormViewComponent extends Component<any, any> {
  formApi: MockFormApi;
  constructor(props: any) {
    super(props);
    this.formApi = this.formService();
  }
  formService(): MockFormApi {
    return Container.get(MockFormApi);
  }

  render() {
    return (
      <div className="pattern-container">
        <DisplayForm data={this.formApi} />
      </div>
    );
  }
}
export default FormViewComponent;