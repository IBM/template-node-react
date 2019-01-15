import React, { Component } from "react";
import { DataTable, Button } from "carbon-components-react";
import Header from "./Header";
import "./patterns.scss";

const {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow
} = DataTable;

class ListToList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsListA: [
        {
          id: "aa",
          name: "Load Balancer 1",
          port: 25
        },
        {
          id: "ab",
          name: "Load Balancer 2",
          port: 80
        },
        {
          id: "ac",
          name: "Load Balancer 3",
          port: 443
        }
      ],
      rowsListB: [
        {
          id: "ba",
          name: "Load Balancer 4",
          port: 3000
        },
        {
          id: "bb",
          name: "Load Balancer 5",
          port: 4000
        },
        {
          id: "bc",
          name: "Load Balancer 6",
          port: 5000
        }
      ],
      headers: [
        {
          key: "name",
          header: "Name"
        },
        {
          key: "port",
          header: "Port"
        }
      ]
    };
  }

  selectedRowsListA = [];
  selectedRowsListB = [];

  moveFromListAToB = event => {
    let rowsListA = this.state.rowsListA.slice();
    let rowsListB = this.state.rowsListB.slice();
    this.selectedRowsListA.forEach(elem => {
      rowsListA = rowsListA.filter(item => {
        if (item.id !== elem.id) {
          return true;
        } else {
          rowsListB.push(item);
          return false;
        }
      });
    });
    this.setState({ rowsListA, rowsListB });
  };

  moveFromListBToA = event => {
    let rowsListA = this.state.rowsListA.slice();
    let rowsListB = this.state.rowsListB.slice();
    this.selectedRowsListB.forEach(elem => {
      rowsListB = rowsListB.filter(item => {
        if (item.id !== elem.id) {
          return true;
        } else {
          rowsListA.push(item);
          return false;
        }
      });
    });
    this.setState({ rowsListA, rowsListB });
  };

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header
          title="List To List"
          subtitle="This pattern is based on a Simple list pattern but will display two lists and allow the moving of data from one list to another and back again."
        />
        <div className="bx--row">
          <div className="bx--col-xs-12 bx--col-lg-5">
            <DataTable
              rows={this.state.rowsListA}
              headers={this.state.headers}
              render={({
                rows,
                headers,
                getHeaderProps,
                getRowProps,
                getSelectionProps,
                selectedRows
              }) => {
                this.selectedRowsListA = selectedRows;
                return (
                  <TableContainer title="List A">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableSelectAll {...getSelectionProps()} />
                          {headers.map(header => (
                            <TableHeader {...getHeaderProps({ header })}>
                              {header.header}
                            </TableHeader>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map(row => (
                          <TableRow {...getRowProps({ row })}>
                            <TableSelectRow {...getSelectionProps({ row })} />
                            {row.cells.map(cell => (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                );
              }}
            />
          </div>
          <div className="bx--col-xs-12 bx--col-lg-2 list-to-list-moving-btn-container">
            <div>
              <Button
                className="list-to-list-moving-btn"
                onClick={this.moveFromListAToB}
              >
                &gt;&gt;
              </Button>
              <br />
              <Button
                className="list-to-list-moving-btn"
                onClick={this.moveFromListBToA}
              >
                &lt;&lt;
              </Button>
            </div>
          </div>
          <div className="bx--col-xs-12 bx--col-lg-5">
            <DataTable
              rows={this.state.rowsListB}
              headers={this.state.headers}
              render={({
                rows,
                headers,
                getHeaderProps,
                getRowProps,
                getSelectionProps,
                selectedRows
              }) => {
                this.selectedRowsListB = selectedRows;
                return (
                  <TableContainer title="List B">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableSelectAll {...getSelectionProps()} />
                          {headers.map(header => (
                            <TableHeader {...getHeaderProps({ header })}>
                              {header.header}
                            </TableHeader>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map(row => (
                          <TableRow {...getRowProps({ row })}>
                            <TableSelectRow {...getSelectionProps({ row })} />
                            {row.cells.map(cell => (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ListToList;
