import React, { Component } from "react";
import { Search } from "carbon-components-react";
import "./patterns.scss";
import Header from "./Header";
import DisplayForm from "./DisplayForm";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    const defaultData = [
      {
        Name: "Lin",
        Address: "123 Main Street",
        City: "Austin",
        State: "TX",
        ZipCode: "12345",
        Country: "USA"
      },
      {
        Name: "Mak",
        Address: "45 2nd Street",
        City: "Austin",
        State: "TX",
        ZipCode: "78766",
        Country: "USA"
      },
      {
        Name: "Joe",
        Address: "40 Down Street",
        City: "San Francisco",
        State: "CA",
        ZipCode: "90706",
        Country: "USA"
      }
    ];
    this.state = {
      searchKeyword: "",
      data: defaultData
    };
  }

  formatDataForDisplayForm = datarow => {
    const displayData = Object.keys(datarow).map(label => {
      return { label, value: datarow[label], type: "textinput" };
    });
    return displayData;
  };

  onSearch = event => {
    this.setState({ searchKeyword: event.target.value });
  };

  getFilteredData = data => {
    const subset = data.filter(datarow =>
      Object.keys(datarow).reduce((accumulator, field) => {
        return (
          accumulator ||
          datarow[field]
            .toLocaleLowerCase()
            .includes(this.state.searchKeyword.toLocaleLowerCase())
        );
      }, false)
    );
    return subset;
  };

  render() {
    const data = this.state.data;
    const filteredData = this.getFilteredData(data);

    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Search Form"
          subtitle="This pattern uses a Validating Form pattern and is linked to a Display Form pattern for a single item display."
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <Search
              value={this.state.searchKeyword}
              labelText="Search"
              closeButtonLabelText=""
              placeHolderText="Search"
              onChange={this.onSearch}
              id="search-1"
              light={true}
            />
          </div>
        </div>
        <br />
        {this.state.searchKeyword !== "" && (
          <div className="bx--row">
            <div className="bx--col-xs-12">
              {filteredData.length > 0 ? (
                <DisplayForm
                  data={this.formatDataForDisplayForm(filteredData[0])}
                />
              ) : (
                <p className="center-align">No matching result</p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default SearchForm;
