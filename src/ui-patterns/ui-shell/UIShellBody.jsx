import React, { Component } from "react";

import FormViewComponent from "../../components/form/DisplayForm";
import ValidateForm from "../../components/form/ValidateForm";
import UpdatingForm from "../../components/form/UpdateForm";
import ValidateFormWizard1 from "../../components/form/ValidateFormWizard1";
import ValidateFormWizard2 from "../../components/form/ValidateFormWizard2";
import SearchFormView from "../../components/form/SearchForm";

import SimpleListView from "../../components/list/SimpleList";
import TableListView from "../../components/list/TableList";
import ListToListView from "../../components/list/ListToList";
import LinkedListView from "../../components/list/LinkedList";
import  SearchListView from "../../components/list/SearchList";

import  CreateReadUpdateDeleteView from "../../components/composite/CreateReadDeleteUpdate";
import  MasterDetailView from "../../components/composite/MasterDetail";

class UIShellBody extends Component {
  components = {
    "Display Form": FormViewComponent,
    "Validating Form": ValidateForm,
    "Update Form": UpdatingForm,
    "Validating Form Wizard 1": ValidateFormWizard1,
    "Validating Form Wizard 2": ValidateFormWizard2 ,
    "Search Form": SearchFormView ,
    "Simple List":SimpleListView,
    "Table List":TableListView,
    "List to List":ListToListView,
    "Linked List":LinkedListView,
    "Search List":SearchListView,
    "Create, Read, Update, Delete":CreateReadUpdateDeleteView,
    "Master Detail":MasterDetailView
  };
  defaultComponent = "Display Form";

  render() {
    const PatternName = this.components[
      this.props.patternName || this.defaultComponent
    ];
    return (
     
        <PatternName showDescription={true} />
   
    );
  }
}
export default UIShellBody;
