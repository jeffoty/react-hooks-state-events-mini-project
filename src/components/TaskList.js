import React from "react";
import Task from "./Task"


function TaskList(props) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {props.tasks.map((task) => (
        <Task
          key={task.text}
          handleDeleteTask={props.onDeleteTask}
          category={task.category}
          text={task.text}
        />
      ))}
    </div>
  );
}

export default TaskList;