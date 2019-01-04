import React, { Component } from "react";
import {
  TextInput, Form, DropdownV2, Button, Tile
} from 'carbon-components-react';

class DisplayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToSave: {}
    };
  }

  saveData = event => {
    const target = event.target;
    let fieldName = target.name;
    let fieldValue = target.value;
    if (!fieldValue) {
      this.setState({ [fieldName]: fieldValue, [fieldName + 'Invalid']: true });
    } else {
      this.setState({ [fieldName]: fieldValue, [fieldName + 'Invalid']: false });
    }
  }

  saveDataDropdown1 = ({ selectedItem }) => {
    this.setState({ state: selectedItem, stateInvalid: false });
  }

  saveDataDropdown2 = ({ selectedItem }) => {
    this.setState({ country: selectedItem, stateInvalid: false });
  }

  saveForm = event => {
    event.preventDefault();
    let dataToSave = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      country: this.state.country
    };
    this.setState({ dataToSave });
  }

  render() {
    return (
      <div>
        <br />
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-xs-12">
              <strong>Description:</strong> Displays a model object as a form in a read only display.
            </div>
          </div>
          <br /><br />
          <div className="bx--row">
            <div className="bx--offset-xs-3 bx--col-xs-6">
              <Tile>
                <Form>
                  <TextInput
                    id="name"
                    name="name"
                    value={this.state.name || ''}
                    onChange={this.saveData}
                    labelText="Name"
                    maxLength="100"
                  />
                  <br /><br />
                  <TextInput
                    id="address"
                    name="address"
                    value={this.state.address || ''}
                    onChange={this.saveData}
                    labelText="Address"
                    maxLength="100"
                  />
                  <br /><br />
                  <TextInput
                    id="city"
                    name="city"
                    value={this.state.city || ''}
                    onChange={this.saveData}
                    labelText="City"
                    maxLength="100"
                  />
                  <br /><br />
                  <p className="bx--label left-align">State</p>
                  <DropdownV2
                    id="state"
                    label="Select a state.."
                    ariaLabel="Select a state.."
                    items={["TX", "Other"]}
                    selectedItem={this.state.state}
                    onChange={this.saveDataDropdown1}
                  />
                  <br /><br />
                  <TextInput
                    id="zipCode"
                    name="zipCode"
                    value={this.state.zipCode || ''}
                    onChange={this.saveData}
                    labelText="Zip Code"
                    maxLength="10"
                  />
                  <br /><br />
                  <p className="bx--label left-align">Country</p>
                  <DropdownV2
                    id="country"
                    label="Select a country.."
                    ariaLabel="Select a country.."
                    items={["United States", "Other"]}
                    selectedItem={this.state.country}
                    onChange={this.saveDataDropdown2}
                  />
                  <br /><br />
                  <Button onClick={this.saveForm}>OK</Button>
                </Form>
              </Tile>
            </div>
          </div>
          <br /><br />
          <div className="bx--row">
            <div className="bx--offset-xs-3 bx--col-xs-6">
              {Object.keys(this.state.dataToSave).map((item, index) => <p>{item}: {this.state.dataToSave[item]}</p>)}
            </div>
          </div>
          <br /><br />
        </div>
      </div>
    );
  }
}
export default DisplayForm;
