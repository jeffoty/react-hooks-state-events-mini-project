import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";



function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  let handleDeleteTask = (taskText) => {
    // console.log("delete task is called!");
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  let filteredTask = tasks.filter(
    (task) => category === "All" || category === task.category
  );

  let handleNewTask = (taskDescription, taskCategory) => {
    setTasks([{ text: taskDescription, category: taskCategory }, ...tasks]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        onCategoryChange={setCategory}
        currentCategory={category}
        categories={CATEGORIES}
      />
      <NewTaskForm onNewTask={handleNewTask} categories={CATEGORIES} />
      <TaskList tasks={filteredTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;