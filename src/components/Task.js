import React from "react";
function Task({ category, text, handleDeleteTask }) {
  let deleteClick = () => {
    handleDeleteTask(text);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteClick} className="delete">
        X
      </button>
    </div>
  );
}



export default Task;