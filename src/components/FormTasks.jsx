import React, { Component } from "react";
import styled from "styled-components";

const Wraper = styled.div`
  .form {
    margin: 0 auto;
  }
  .input {
    width: 80%;
    padding: 0.5rem;
  }
  .btn {
    padding: 0.6rem;
    border: 0;
    background: #2897a2;
    color: #fff;
    text-transform: uppercase;
  }
  .textView {
    display: flex;
    justify-content: flex-end;
  }
`;

class FormTasks extends Component {
  state = {
    textInputTask: ""
  };

  inputTaskRef = React.createRef();

  handleChenge = () => {
    this.setState({
      textInputTask: this.inputTaskRef.current.value
    });
  };

  handleClickBtn = e => {
    e.preventDefault();
    this.props.onClick({
      id: Date.now(),
      text: this.state.textInputTask,
      complete: false
    });

    this.setState({
      textInputTask: ""
    });
  };

  render() {
    const { textInputTask } = this.state;
    return (
      <Wraper>
        <form className="form">
          <div>
            <input
              className="input"
              ref={this.inputTaskRef}
              onChange={this.handleChenge}
              value={textInputTask}
              type="text"
            />
            <button className="btn" onClick={this.handleClickBtn}>
              Add task
            </button>
          </div>
        </form>
      </Wraper>
    );
  }
}

export default FormTasks;
