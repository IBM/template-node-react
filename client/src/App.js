import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import RawUIShell from "./components/RawUIShell";
import { Button } from "carbon-components-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>IBM cloud garage catalyst react ui</p>
          <br />
          <Button> Carbon Button: Catalyst REACT UI </Button>

          <RawUIShell />
        </header>
      </div>
    );
  }
}

export default App;
