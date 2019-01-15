import React, { Component } from "react";
import { Search, DataTable } from "carbon-components-react";
import Header from "./Header";
import "./patterns.scss";

const {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow
} = DataTable;

class SearchList extends Component {
  constructor(props) {
    super(props);
    const rowsList = [
      {
        id: "1",
        name: "Load Balancer 1",
        port: "25",
        status: "Disabled"
      },
      {
        id: "2",
        name: "Load Balancer 2",
        port: "80",
        status: "Starting"
      },
      {
        id: "3",
        name: "Load Balancer 3",
        port: "443",
        status: "Active"
      }
    ];
    this.state = {
      searchKeyword: "",
      initialRowsList: rowsList,
      rowsList: rowsList,
      headers: [
        {
          key: "name",
          header: "Name"
        },
        {
          key: "port",
          header: "Port"
        },
        {
          key: "status",
          header: "Status"
        }
      ]
    };
  }

  onSearch = event => {
    this.setState({ searchKeyword: event.target.value }, () => {
      const subset = this.state.initialRowsList.filter(datarow =>
        Object.keys(datarow).reduce((accumulator, field) => {
          return (
            accumulator ||
            datarow[field]
              .toLocaleLowerCase()
              .includes(this.state.searchKeyword.toLocaleLowerCase())
          );
        }, false)
      );
      this.setState({ rowsList: subset });
    });
  };

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Search List"
          subtitle="This pattern uses a Validating Form pattern linked to a Table List pattern for display of the items that have been searched for."
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <Search
              value={this.state.searchKeyword}
              labelText="Search"
              closeButtonLabelText=""
              placeHolderText="Search"
              onChange={this.onSearch}
              id="search-1"
              light={true}
            />
          </div>
        </div>
        <br />
        <br />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            {this.state.rowsList.length !== 0 && (
              <DataTable
                rows={this.state.rowsList}
                headers={this.state.headers}
                render={({
                  rows,
                  headers,
                  getHeaderProps,
                  getRowProps,
                  getSelectionProps
                }) => {
                  return (
                    <TableContainer title="">
                      <Table>
                        <TableHead>
                          <TableRow>
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
                              {row.cells.map(cell => (
                                <TableCell key={cell.id}>
                                  {cell.value}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  );
                }}
              />
            )}
            {this.state.rowsList.length === 0 && (
              <p className="center-align">No matching result</p>
            )}
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
export default SearchList;
