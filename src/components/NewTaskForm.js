import React , { useState }  from "react";

function NewTaskForm({ categories, onNewTask }) {
  // console.log(categories);
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  let categoryOptions = categories.map((c, index) => (
    <>
      {index === 0 ? (
        <option key="" value="">
          Blank
        </option>
      ) : (
        ""
      )}

      <option key={c} name={c}>
        {c}
      </option>
    </>
  ));

  let handleSubmit = (event) => {
    event.preventDefault();
    onNewTask(taskDescription, taskCategory);
    setTaskDescription("");
    setTaskCategory(categories[0]);
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          onChange={(e) => setTaskDescription(e.target.value)}
          onBlur={(e) => setTaskDescription(e.target.value)}
          type="text"
          name="text"
        />
      </label>
      <label>
        Category
        <select
          required
          onChange={(e) => setTaskCategory(e.target.value)}
          name="category"
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}


export default NewTaskForm;