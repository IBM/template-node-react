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
import CompositeForm from "./CompositeForm";
import Header from "../ui-shell/Header";
import "../ui-shell/patterns.scss";
class MasterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: 0,
      data: [],
    };
  }
  async componentDidMount() {
    this.setState({
      data: await this.props.data.getMasterDetails()
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      nextProps.data.getMasterDetails().then(data => {
        this.setState({ data: nextProps.data });
      });
    }
  }
  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id} onClick={() => this.onRowClick(id)}>
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
            <StructuredListCell key={col} className="simple-list-row">
              {row[col]}
            </StructuredListCell>
          );
        })}
      </StructuredListRow>
    );
  };

  render() {
    const data = this.state.data;
    const selectedRow = this.state.selectedRow;
    let columns;
    if(data.length!==0)
    {
     columns = data[selectedRow].map(item => item.label);
    }else{
       columns=[];
    }
   
    return (
      
      <div className="bx--grid ">
        <Header
          title="Master Detail"
          subtitle="This pattern will use a simple list of table list and link to a display form."
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  {columns.map(key => {
                    return (
                      <StructuredListCell head key={key}>
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1")}
                      </StructuredListCell>
                    );
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
        <CompositeForm data={data[selectedRow]} />
        
      </div>
    );
  }
}

export default MasterDetail;
