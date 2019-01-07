import React, { Component } from "react";
import {
  TextInput,
  DropdownV2,
  Tile,
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import "./patterns.scss";

class SimpleList extends Component {
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

        <StructuredListCell className="simple-list-row">
          {row}
        </StructuredListCell>
      </StructuredListRow>
    );
  };
  render() {
    return (
      <div className="simple-list-container">
        <StructuredListWrapper selection border>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head />
              <StructuredListCell head>Simple List Title</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>

          <StructuredListBody>
            {["row1", "row2", "row3"].map((row, i) => {
              return this.renderRow(row, i);
            })}
          </StructuredListBody>
        </StructuredListWrapper>
      </div>
    );
  }
}
export default SimpleList;
