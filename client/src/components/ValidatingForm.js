import React, { Component } from "react";
import {
  TextInput,
  Form,
  DropdownV2,
  Button,
  Tile
} from "carbon-components-react";
import Header from "./Header";
import "./patterns.scss";

let checkFlag = true;

class ValidatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToSave: {},
      showDescription: props.showDescription || false
    };
    if (this.props.data) {
      let dataToLoad = this.convertData(this.props.data);
      this.state = {
        ...this.state,
        name: dataToLoad.Name,
        address: dataToLoad.Address,
        city: dataToLoad.City,
        state: dataToLoad.State[0],
        zipCode: dataToLoad.ZipCode,
        country: dataToLoad.Country[0]
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      let dataToLoad = this.convertData(nextProps.data);
      if (dataToLoad.Name === "Enter data below") {
        dataToLoad.Name = "";
      }
      this.setState({
        name: dataToLoad.Name,
        address: dataToLoad.Address,
        city: dataToLoad.City,
        state: dataToLoad.State[0],
        zipCode: dataToLoad.ZipCode,
        country: dataToLoad.Country[0]
      });
    }
  }

  convertData = inputData => {
    let output = {};
    inputData.forEach(dataRow => {
      output[dataRow.label] = dataRow.value;
    });
    return output;
  };

  saveData = event => {
    const target = event.target;
    let fieldName = target.name;
    let fieldValue = target.value;
    if (!fieldValue) {
      this.setState({ [fieldName]: fieldValue, [fieldName + "Invalid"]: true });
    } else {
      this.setState({
        [fieldName]: fieldValue,
        [fieldName + "Invalid"]: false
      });
    }
  };

  saveDataDropdown1 = ({ selectedItem }) => {
    this.setState({ state: selectedItem, stateInvalid: false });
  };

  saveDataDropdown2 = ({ selectedItem }) => {
    this.setState({ country: selectedItem, countryInvalid: false });
  };

  checkForm = () => {
    checkFlag = true;
    if (!this.state.name) {
      this.setState({ nameInvalid: true });
      checkFlag = false;
    }
    if (!this.state.address) {
      this.setState({ addressInvalid: true });
      checkFlag = false;
    }
    if (!this.state.city) {
      this.setState({ cityInvalid: true });
      checkFlag = false;
    }
    if (!this.state.state) {
      this.setState({ stateInvalid: true });
      checkFlag = false;
    }
    if (
      !this.state.zipCode ||
      (this.state.country === "United States" &&
        !/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.zipCode))
    ) {
      this.setState({ zipCodeInvalid: true });
      checkFlag = false;
    }
    if (!this.state.country) {
      this.setState({ countryInvalid: true });
      checkFlag = false;
    }
    return checkFlag;
  };

  saveForm = event => {
    event.preventDefault();
    if (this.checkForm()) {
      let dataToSave = {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        country: this.state.country
      };
      if (typeof this.props.updateRow === "function") {
        this.props.updateRow(dataToSave);
      } else {
        this.setState({ dataToSave });
      }
      if (this.props.adding) {
        this.props.toggleAdding();
      }
    }
  };

  render() {
    const showDescription = this.state.showDescription;
    return (
      <div className="bx--grid pattern-container">
        {showDescription && (
          <Header
            title="Validating Form"
            subtitle="Presents a model object as a data input form and interacts with a validation service for validation."
          />
        )}
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <Tile>
              <Form>
                <TextInput
                  id="name"
                  name="name"
                  value={this.state.name || ""}
                  onChange={this.saveData}
                  labelText="Name"
                  maxLength="100"
                  invalid={this.state.nameInvalid}
                  invalidText="Please enter a name.."
                />
                <br />
                <br />
                <TextInput
                  id="address"
                  name="address"
                  value={this.state.address || ""}
                  onChange={this.saveData}
                  labelText="Address"
                  maxLength="200"
                  invalid={this.state.addressInvalid}
                  invalidText="Please enter an address.."
                />
                <br />
                <br />
                <TextInput
                  id="city"
                  name="city"
                  value={this.state.city || ""}
                  onChange={this.saveData}
                  labelText="City"
                  maxLength="100"
                  invalid={this.state.cityInvalid}
                  invalidText="Please enter a city.."
                />
                <br />
                <br />
                <p className="bx--label left-align">State</p>
                <DropdownV2
                  id="state"
                  label="Select a state.."
                  ariaLabel="Select a state.."
                  items={[
                    "AL",
                    "AK",
                    "AS",
                    "AZ",
                    "AR",
                    "CA",
                    "CO",
                    "CT",
                    "DE",
                    "DC",
                    "FM",
                    "FL",
                    "GA",
                    "GU",
                    "HI",
                    "ID",
                    "IL",
                    "IN",
                    "IA",
                    "KS",
                    "KY",
                    "LA",
                    "ME",
                    "MH",
                    "MD",
                    "MA",
                    "MI",
                    "MN",
                    "MS",
                    "MO",
                    "MT",
                    "NE",
                    "NV",
                    "NH",
                    "NJ",
                    "NM",
                    "NY",
                    "NC",
                    "ND",
                    "MP",
                    "OH",
                    "OK",
                    "OR",
                    "PW",
                    "PA",
                    "PR",
                    "RI",
                    "SC",
                    "SD",
                    "TN",
                    "TX",
                    "UT",
                    "VT",
                    "VI",
                    "VA",
                    "WA",
                    "WV",
                    "WI",
                    "WY",
                    "Other"
                  ]}
                  selectedItem={this.state.state}
                  onChange={this.saveDataDropdown1}
                />
                {this.state.stateInvalid && (
                  <p className="dropdown-invalid">Please select a state..</p>
                )}
                <br />
                <br />
                <TextInput
                  id="zipCode"
                  name="zipCode"
                  value={this.state.zipCode || ""}
                  onChange={this.saveData}
                  labelText="Zip Code"
                  maxLength="20"
                  invalid={this.state.zipCodeInvalid}
                  invalidText="Please enter a valid zip code.."
                />
                <br />
                <br />
                <p className="bx--label left-align">Country</p>
                <DropdownV2
                  id="country"
                  label="Select a country.."
                  ariaLabel="Select a country.."
                  items={["United States", "Other"]}
                  selectedItem={this.state.country}
                  onChange={this.saveDataDropdown2}
                />
                {this.state.countryInvalid && (
                  <p className="dropdown-invalid">Please select a country..</p>
                )}
                <br />
                <br />
                <div className="left-align">
                  {showDescription && (
                    <Button onClick={this.saveForm}>Submit</Button>
                  )}
                  {!showDescription && (
                    <Button onClick={this.saveForm}>
                      {this.props.adding ? "Add" : "Update"}
                    </Button>
                  )}
                </div>
              </Form>
            </Tile>
          </div>
        </div>
        <br />
        <br />
        {Object.keys(this.state.dataToSave).length > 0 && (
          <div className="bx--row">
            <div className="bx--col-xs-12 left-align">
              <Tile>
                {Object.keys(this.state.dataToSave).map(item => (
                  <p>
                    &nbsp;&nbsp;
                    <strong>
                      {item.charAt(0).toUpperCase() +
                        item.slice(1).replace(/([A-Z])/g, " $1")}
                      :
                    </strong>{" "}
                    {this.state.dataToSave[item]}
                  </p>
                ))}
              </Tile>
              <br />
              <br />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default ValidatingForm;
