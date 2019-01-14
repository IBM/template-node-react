import React, { Component } from "react";
import DisplayForm from "./DisplayForm";
import ValidatingForm from "./ValidatingForm";
import UpdateForm from "./UpdateForm";
import ValidatingFormWizard1 from "./ValidatingFormWizard1";
import ValidatingFormWizard2 from "./ValidatingFormWizard2";
import SimpleList from "./SimpleList";
import TableList from "./TableList";
import ListToList from "./ListToList";
import LinkedList from "./LinkedList";
import MasterDetail from "./MasterDetail";
import CreateReadUpdateDelete from "./CreateReadUpdateDelete";
import SearchList from "./SearchList";
import SearchForm from "./SearchForm";
import "./patterns.scss";

class UIShellBody extends Component {
  components = {
    "Display Form": DisplayForm,
    "Validating Form": ValidatingForm,
    "Update Form": UpdateForm,
    "Validating Form Wizard 1": ValidatingFormWizard1,
    "Validating Form Wizard 2": ValidatingFormWizard2,
    "Simple List": SimpleList,
    "Table List": TableList,
    "List to List": ListToList,
    "Linked List": LinkedList,
    "Master Detail": MasterDetail,
    "Create, Read, Update, Delete": CreateReadUpdateDelete,
    "Search List": SearchList,
    "Search Form": SearchForm
  };
  render() {
    const PatternName = this.components[
      this.props.patternName || "Display Form"
    ];
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} />
      </div>
    );
  }
}
export default UIShellBody;
