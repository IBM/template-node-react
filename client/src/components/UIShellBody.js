import React, { Component } from "react";
import DisplayForm from "./DisplayForm";
import ValidatingForm from "./ValidatingForm";
import UpdateForm from "./UpdateForm";
import ValidatingFormWizard from "./ValidatingFormWizard";
import SimpleList from "./SimpleList";
import TableList from "./TableList";
import ListToList from "./ListToList";
import LinkedList from "./LinkedList";
import MasterDetail from "./MasterDetail";
import CreateReadUpdateDelete from "./CreateReadUpdateDelete";
import SearchList from "./SearchList";
import SearchForm from "./SearchForm";

class UIShellBody extends Component {
  components = {
    "Display Form": DisplayForm,
    "Validating Form": ValidatingForm,
    "Update Form": UpdateForm,
    "Validating Form Wizard": ValidatingFormWizard,
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
    const PatternName = this.components[this.props.patternName || "Display Form"];
    return (
      <div>
        <PatternName />
      </div>
    );
  }
}
export default UIShellBody;
