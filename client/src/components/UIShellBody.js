import React, { Component } from "react";
import DisplayForm from "./DisplayForm";
import ValidatingForm from "./ValidatingForm";

class UIShellBody extends Component {
  render() {
    return (
      <div>
        {this.props.patternName === "Display Form" && <DisplayForm />}
        {this.props.patternName === "Validating Form" && <ValidatingForm />}
      </div>
    );
  }
}
export default UIShellBody;
