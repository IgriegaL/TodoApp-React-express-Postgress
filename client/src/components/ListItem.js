import React from "react";
import ProgressBar from "./ProgressBar";

function ListItem({ task }) {
  return (
    <div className="list-item">
      <div className="info-container">
        <p className="task-title">{task.title}</p>
      </div>
      <ProgressBar />
      <div className="button-container">
        <button className="edit">EDIT</button>
        <button className="delete">DELETE</button>
      </div>
    </div>
  );
}

export default ListItem;
