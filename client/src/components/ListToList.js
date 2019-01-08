import React, { Component } from "react";
import { DataTable, Button } from "carbon-components-react";
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
          id: 'aa',
          name: 'Load Balancer 1',
          port: 25,
          status: 'Disabled',
        },
        {
          id: 'ab',
          name: 'Load Balancer 2',
          port: 80,
          status: 'Starting',
        },
        {
          id: 'ac',
          name: 'Load Balancer 3',
          port: 443,
          status: 'Active',
        },
      ],
      rowsListB: [
        {
          id: 'ba',
          name: 'Load Balancer 4',
          port: 3000,
          status: 'Active',
        },
        {
          id: 'bb',
          name: 'Load Balancer 5',
          port: 4000,
          status: 'Starting',
        },
        {
          id: 'bc',
          name: 'Load Balancer 6',
          port: 5000,
          status: 'Active',
        },
      ],
      headers: [
        {
          key: 'name',
          header: 'Name',
        },
        {
          key: 'port',
          header: 'Port',
        },
        {
          key: 'status',
          header: 'Status',
        },
      ]
    };
  }

  selectedRowsListA = [];
  selectedRowsListB = [];

  moveFromListAToB = event => {
    let rowsListA = this.state.rowsListA;
    let rowsListB = this.state.rowsListB;
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
    this.setState({ rowsListA, rowsListB }, () => {
      this.setState({ keyListA: Math.random(), keyListB: Math.random() });
    });
  }

  moveFromListBToA = event => {
    let rowsListA = this.state.rowsListA;
    let rowsListB = this.state.rowsListB;
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
    this.setState({ rowsListA, rowsListB }, () => {
      this.setState({ keyListA: Math.random(), keyListB: Math.random() });
    });
  }

  render() {
    return (
      <div>
        <br />
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-xs-12">
              <strong>Description:</strong> This pattern is based on a Simple list pattern but will display two lists and allow the moving of data from one list to another and back again.
            </div>
          </div>
          <br /><br />
          <div className="bx--row">
            <div className="bx--offset-xs-1 bx--col-xs-4">
              <DataTable
                key={this.state.keyListA}
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
            <div className="bx--col-xs-2">
              <br /><br />
              <br /><br />
              <Button onClick={this.moveFromListAToB}>&gt;&gt;</Button>
              <br /><br />
              <br />
              <Button onClick={this.moveFromListBToA}>&lt;&lt;</Button>
            </div>
            <div className="bx--col-xs-4">
              <DataTable
                key={this.state.keyListB}
                rows={this.state.rowsListB}
                headers={this.state.headers}
                render={({
                  rows,
                  headers,
                  getHeaderProps,
                  getRowProps,
                  getSelectionProps,
                  selectedRows,
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
          <br /><br />
        </div>
      </div>
    );
  }
}
export default ListToList;
