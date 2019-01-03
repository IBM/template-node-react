import React, { Component } from "react";
import {
  TextInput, Form, DropdownV2, Button
} from 'carbon-components-react';

class DisplayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  saveDataDropdown = ({selectedItem}) => {
    this.setState({ state: selectedItem, stateInvalid: false });
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
        </div>
        <br /><br />
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--offset-xs-3 bx--col-xs-6">
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
                <TextInput
                  id="zipCode"
                  name="zipCode"
                  value={this.state.zipCode || ''}
                  onChange={this.saveData}
                  labelText="Zip Code"
                  maxLength="10"
                />
                <br /><br />
                <DropdownV2
                  id="state"
                  label="Select a state.."
                  ariaLabel="Select a state.."
                  items={["TX", "Other"]}
                  selectedItem={this.state.state}
                  onChange={this.saveDataDropdown}
                />
                <br /><br />
                <Button>OK</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayForm;
