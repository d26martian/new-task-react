import React, { Component } from "react";
import FormTasks from "./FormTasks";
import Task from "./Task";
import styled from "styled-components";

const Wraper = styled.div`
  .count {
    display: flex;
    justify-content: center;
    margin: 3rem 0;
  }
  .blockBtn {
    display: table-caption;
    top: -1rem;
    position: relative;
  }
  button {
    width: 100px;
    height: 40px;
    border: 0;
    background: #9085bd;
    margin: 2px 0;
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

  updateTAskToShow = s => {
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
            Active tasks:{" "}
            {this.state.tasks.filter(task => !task.complete).length}
          </div>
        </div>
        <FormTasks onClick={this.addTask} />
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={() => this.toggleComplete(task.id)}
            onDelete={() => this.handleDeleteTask(task.id)}
          />
        ))}
        <div className="blockBtn">
          <button onClick={() => this.updateTAskToShow("all")}>All</button>
          <button onClick={() => this.updateTAskToShow("active")}>
            Active
          </button>
          <button onClick={() => this.updateTAskToShow("complete")}>
            Complete
          </button>
        </div>
      </Wraper>
    );
  }
}
export default TasksList;
