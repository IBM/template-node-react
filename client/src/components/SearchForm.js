import React, { Component } from "react";
import { Search } from "carbon-components-react";
import "./patterns.scss";
import DisplayForm from "./DisplayForm";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    const defaultData = [
      {
        Name: "Mak",
        Address: "123 Main Street",
        City: "Austin",
        State: "TX",
        Country: "USA"
      },
      {
        Name: "Lin",
        Address: "56 3rd Street",
        City: "Austin",
        State: "TX",
        Country: "USA"
      },
      {
        Name: "Joe",
        Address: "12 2nd Street",
        City: "SF",
        State: "CA",
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
      }, false));
    return subset;
  };

  render() {
    const data = this.state.data;
    const filteredData = this.getFilteredData(data);

    return (
      <div className="bx--grid pattern-container">
        <div className="bx--row pattern-description">
          <div className="bx--offset-xs-1 bx--col-xs-10">
            <strong>Description:</strong> This pattern uses a Validating Form
            pattern and is linked to a Display Form pattern for a single item
            display.
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--offset-xs-2 bx--col-xs-8">
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
                  <p>No matching result</p>
                )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default SearchForm;
