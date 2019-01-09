import React, { Component } from "react";
import {
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
import DisplayForm from "./DisplayForm";

class MasterDetail extends Component {
  constructor(props) {
    super(props);
    const data = [
      [
        { label: "Name", value: "Lin", type: "textinput" },
        { label: "Address", value: "123 Main Street", type: "textinput" },
        { label: "State", value: ["TX"], type: "dropdown" },
        { label: "Zip", value: "12345", type: "textinput" },
        { label: "Country", value: ["United States"], type: "dropdown" }
      ],
      [
        { label: "Name", value: "Mak", type: "textinput" },
        { label: "Address", value: "45 2nd Street", type: "textinput" },
        { label: "State", value: ["TX"], type: "dropdown" },
        { label: "Zip", value: "78766", type: "textinput" },
        { label: "Country", value: ["United States"], type: "dropdown" }
      ],
      [
        { label: "Name", value: "Joe", type: "textinput" },
        { label: "Address", value: "40 Down Street", type: "textinput" },
        { label: "State", value: ["CA"], type: "dropdown" },
        { label: "Zip", value: "90706", type: "textinput" },
        { label: "Country", value: ["United States"], type: "dropdown" }
      ]
    ];
    this.state = {
      selectedRow: 0,
      showDescription: props.showDescription || false,
      data
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
    const data = this.state.data;
    const columns = data[selectedRow].map(item => item.label);
    const showDescription = this.state.showDescription;

    return (
      <div className="bx--grid pattern-container">
        {showDescription && (
          <div className="bx--row pattern-description">
            <div className="bx--offset-xs-1 bx--col-xs-10">
              <strong>Description:</strong> This pattern will use a simple list
              of table list and link to a display form.
            </div>
          </div>
        )}
        <div className="bx--row">
          <div className="bx--offset-xs-2 bx--col-xs-8">
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
                  const values = row.map(item => item.value);
                  return this.renderRow(values, i);
                })}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
        <DisplayForm data={data[selectedRow]} />
      </div>
    );
  }
}
export default MasterDetail;
