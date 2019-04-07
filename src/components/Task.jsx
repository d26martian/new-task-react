import React from "react";
import styled from "styled-components";
const Wraper = styled.div`
  display: flex;
  justify-content: center;
  .textTask {
    width: 60%;
    padding: 1rem 0px;
  }
  h3 {
    margin: 0;
    border: 3px solid #eee;
  }
  .btnDelete {
    border: 2px solid #eee;
  }
`;

export default props => (
  <Wraper>
    <h3
      className="textTask"
      style={{
        background: props.task.complete ? "#eee" : "",
        color: props.task.complete ? "#ccc" : ""
      }}
      onClick={props.toggleComplete}
    >
      {props.task.text}
    </h3>
    <button className="btnDelete" onClick={props.onDelete}>
      X
    </button>
  </Wraper>
);
