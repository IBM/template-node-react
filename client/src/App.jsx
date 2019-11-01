import React, { Component } from "react";
import UIShell from "./pattern-components/UIShell";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UIShell />
      </div>
    );
  }
}

export default App;
