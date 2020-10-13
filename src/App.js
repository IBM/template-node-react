import React, { Component } from "react";
import UIShell from "./ui-patterns/ui-shell/UIShell";
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
