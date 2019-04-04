import React, { Component } from "react";
import "./App.css";
import TasksList from "./components/TasksList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TasksList />
      </div>
    );
  }
}

export default App;
