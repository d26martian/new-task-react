import React, { Component } from "react";

import FormTasks from "./FormTasks";
import Task from "./Task";
//import ControlBtn from "./ControlBtn";

import styled from "styled-components";

const Wraper = styled.div`
  .count {
    display: flex;
    justify-content: center;
    margin: 3rem 0;
  }
  .blockBtn {
    margin: 2rem 0;
  }
  .blockBtn button {
    height: 40px;
    border: 2px solid #eee;
  }
  button:focus,
  button:active {
    border: 0;
    outline: none;
  }
  button {
    width: 100px;
    border: 0;
    background: #9085bd;
    text-transform: uppercase;
    color: #fff;
  }
`;

class TasksList extends Component {
  state = {
    tasks: [],
    taskShow: "all"
  };

  addTask = task => {
    this.setState({
      tasks: [task, ...this.state.tasks]
    });
  };

  toggleComplete = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete
          };
        } else {
          return task;
        }
      })
    });
  };

  handleDeleteTask = id => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  };
  updateTaskToShow = s => {
    this.setState({
      taskShow: s
    });
  };

  render() {
    let tasks = [];

    if (this.state.taskShow === "all") {
      tasks = this.state.tasks;
    } else if (this.state.taskShow === "active") {
      tasks = this.state.tasks.filter(task => !task.complete);
    } else if (this.state.taskShow === "complete") {
      tasks = this.state.tasks.filter(task => task.complete);
    }
    return (
      <Wraper>
        <div className="count">
          <div>Count tasks: {this.state.tasks.length}</div>
          <div>
            Active tasks:
            {this.state.tasks.filter(task => !task.complete).length}
          </div>
        </div>
        <FormTasks onClick={this.addTask} />

        <div className="blockBtn">
          <button onClick={() => this.updateTaskToShow("all")}>All</button>
          <button onClick={() => this.updateTaskToShow("active")}>
            Active
          </button>
          <button onClick={() => this.updateTaskToShow("complete")}>
            Complete
          </button>
        </div>
        <div className="wrapTask">
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              toggleComplete={() => this.toggleComplete(task.id)}
              onDelete={() => this.handleDeleteTask(task.id)}
            />
          ))}
        </div>
      </Wraper>
    );
  }
}
export default TasksList;
