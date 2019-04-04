import React from "react";
import styled from "styled-components";
const Wraper = styled.div`
  .textTask {
    border: 1px solid;
    width: 60%;
    margin: 0px auto;
    padding: 1rem 0px;
  }
`;

export default props => (
  <Wraper>
    <h3
      className="textTask"
      style={{ textDecoration: props.task.complete ? "line-through" : "" }}
      onClick={props.toggleComplete}
    >
      {props.task.text}
    </h3>
    <button onClick={props.onDelete}>X</button>
  </Wraper>
);
