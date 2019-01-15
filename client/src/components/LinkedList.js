import React, { Component } from "react";
import { Form, DropdownV2, Button, Tile } from "carbon-components-react";
import Header from "./Header";
import "./patterns.scss";

let checkFlag = true;

class LinkedList extends Component {
  constructor(props) {
    super(props);
    const data = {
      "United States": {
        TX: ["Austin", "Dallas", "Other"],
        CA: ["San Francisco", "Los Angeles", "Other"],
        Other: ["Other"]
      },
      Mexico: {
        Aguascalientes: ["Aguascalientes", "Calvillo", "Other"],
        "Baja California": ["Tijuana", "Mexicali", "Other"],
        Other: ["Other"]
      }
    };
    this.state = {
      data,
      dataToSave: {},
      countryList: Object.keys(data),
      stateList: [],
      cityList: []
    };
  }

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
    this.setState({
      country: selectedItem,
      countryInvalid: false,
      state: "",
      city: "",
      stateList: Object.keys(this.state.data[selectedItem])
    });
  };

  saveDataDropdown2 = ({ selectedItem }) => {
    this.setState({
      state: selectedItem,
      stateInvalid: false,
      city: "",
      cityList: this.state.data[this.state.country][selectedItem]
    });
  };

  saveDataDropdown3 = ({ selectedItem }) => {
    this.setState({
      city: selectedItem,
      cityInvalid: false
    });
  };

  checkForm = () => {
    checkFlag = true;
    if (!this.state.country) {
      this.setState({ countryInvalid: true });
      checkFlag = false;
    }
    if (!this.state.state) {
      this.setState({ stateInvalid: true });
      checkFlag = false;
    }
    if (!this.state.city) {
      this.setState({ cityInvalid: true });
      checkFlag = false;
    }
    return checkFlag;
  };

  saveForm = event => {
    event.preventDefault();
    if (this.checkForm()) {
      let dataToSave = {
        country: this.state.country,
        state: this.state.state,
        city: this.state.city
      };
      this.setState({ dataToSave });
    }
  };

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Linked List"
          subtitle="This pattern will link multiple list or combo controls together so when a selection on one list is made it may change the information displayed in the other linked list."
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <Tile>
              <Form>
                <p className="bx--label left-align">Country</p>
                <DropdownV2
                  id="country"
                  label="Select a country.."
                  ariaLabel="Select a country.."
                  items={this.state.countryList}
                  selectedItem={this.state.country}
                  onChange={this.saveDataDropdown1}
                />
                {this.state.countryInvalid && (
                  <p className="dropdown-invalid">Please select a country..</p>
                )}
                <br />
                <br />
                <p className="bx--label left-align">State</p>
                <DropdownV2
                  id="state"
                  label="Select a state.."
                  ariaLabel="Select a state.."
                  items={this.state.stateList}
                  selectedItem={this.state.state}
                  onChange={this.saveDataDropdown2}
                />
                {this.state.stateInvalid && (
                  <p className="dropdown-invalid">Please select a state..</p>
                )}
                <br />
                <br />
                <p className="bx--label left-align">City</p>
                <DropdownV2
                  id="city"
                  label="Select a city.."
                  ariaLabel="Select a city.."
                  items={this.state.cityList}
                  selectedItem={this.state.city}
                  onChange={this.saveDataDropdown3}
                />
                {this.state.cityInvalid && (
                  <p className="dropdown-invalid">Please select a city..</p>
                )}
                <br />
                <br />
                <div className="left-align">
                  <Button onClick={this.saveForm}>Submit</Button>
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
                  <p key={item}>
                    &nbsp;&nbsp;
                    <strong>
                      {item.charAt(0).toUpperCase() + item.slice(1)}:
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
export default LinkedList;
