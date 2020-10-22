import React, { Component } from "react";
import {Container} from 'typescript-ioc';
import SearchForm from '../../ui-patterns/form/SearchForm';
import {SearchFormMockApi} from '../../services';
class SearchFormView extends Component<any ,any> {
  searchformApi: SearchFormMockApi;
  constructor(props: any) {
    super(props);
    this.searchformApi =  this.formService();
  }
 formService(): SearchFormMockApi {
    return Container.get(SearchFormMockApi);
  }  

  render() {
  return (
    <div className="pattern-container">
      <SearchForm  data={this.searchformApi} />
    </div>
  );
  }
}
export default SearchFormView;