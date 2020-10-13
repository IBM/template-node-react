import React, { Component } from "react";
import { Search } from "carbon-components-react";
import Header from "../ui-shell/Header";
import "../ui-shell/patterns.scss";
import CompositeForm from "../composite/CompositeForm";

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    this.setState({
      data: await this.props.data.getFormDetails(),
      showDescription: this.props.showDescription || true
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      nextProps.data.getFormDetails().then(data => {
        this.setState({ data: nextProps.data });
      });
    }
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
          .includes(this.state.searchKeyword)
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
                <CompositeForm
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
