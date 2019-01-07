import React, { Component } from "react";
import {
  TextInput, Form, DropdownV2, Tile
} from 'carbon-components-react';

class DisplayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      address: "123 Main Street",
      city: "Anytown",
      state: "TX",
      zipCode: "12345",
      country: "United States"
    };
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
                    labelText="Name"
                  />
                  <br /><br />
                  <TextInput
                    id="address"
                    name="address"
                    value={this.state.address || ''}
                    labelText="Address"
                  />
                  <br /><br />
                  <TextInput
                    id="city"
                    name="city"
                    value={this.state.city || ''}
                    labelText="City"
                  />
                  <br /><br />
                  <p className="bx--label left-align">State</p>
                  <DropdownV2
                    id="state"
                    label="Select a state.."
                    ariaLabel="Select a state.."
                    items={["TX"]}
                    selectedItem={this.state.state}
                  />
                  <br /><br />
                  <TextInput
                    id="zipCode"
                    name="zipCode"
                    value={this.state.zipCode || ''}
                    labelText="Zip Code"
                  />
                  <br /><br />
                  <p className="bx--label left-align">Country</p>
                  <DropdownV2
                    id="country"
                    label="Select a country.."
                    ariaLabel="Select a country.."
                    items={["United States"]}
                    selectedItem={this.state.country}
                  />
                  <br />
                </Form>
              </Tile>
            </div>
          </div>
          <br /><br />
        </div>
      </div>
    );
  }
}
export default DisplayForm;
