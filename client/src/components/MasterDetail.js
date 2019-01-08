import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon,
  TextInput,
  Form,
  Tile
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import DisplayForm from "./DisplayForm";
import "./patterns.scss";

class MasterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: 0
    };
  }
  onRowClick = id => {
    this.setState({ selectedRow: id });
  };
  renderRow = (row, id) => {
    return (
      <StructuredListRow onClick={() => this.onRowClick(id)}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            //defaultChecked={this.state.selectedRow === id}
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Icon
              className="bx--structured-list-svg"
              icon={iconCheckmarkSolid}
            />
          </StructuredListCell>
        </div>
        {Object.keys(row).map(col => {
          return (
            <StructuredListCell className="simple-list-row">
              {row[col]}
            </StructuredListCell>
          );
        })}
      </StructuredListRow>
    );
  };
  render() {
    const selectedRow = this.state.selectedRow;
    const data = [
      { name: "Mak", address: "address A", city: "Austin" },
      { name: "Ling", address: "address B", city: "Austin" },
      { name: "Joe", address: "address C", city: "San francisco" }
    ];
    const columns = Object.keys(data[0]);
    return (
      <div className="simple-list-container">
        <StructuredListWrapper selection border>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head />
              {columns.map(key => {
                return <StructuredListCell head>{key}</StructuredListCell>;
              })}
            </StructuredListRow>
          </StructuredListHead>

          <StructuredListBody>
            {data.map((row, i) => {
              return this.renderRow(row, i);
            })}
          </StructuredListBody>
        </StructuredListWrapper>
        <Tile>
          <Form>
            <TextInput
              id="name"
              name="name"
              value={data[selectedRow].name}
              labelText="Name"
            />
            <br />
            <TextInput
              id="address"
              name="address"
              value={data[selectedRow].address}
              labelText="Address"
            />
            <br />
            <TextInput
              id="city"
              name="city"
              value={data[selectedRow].city}
              labelText="City"
            />
          </Form>
        </Tile>
      </div>
    );
  }
}
export default MasterDetail;
