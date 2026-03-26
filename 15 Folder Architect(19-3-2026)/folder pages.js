Assignment-15

pages.js

import React, { useState } from "react";
import useTasks from "../hooks/useTasks";
import TaskItem from "../components/TaskItem";

function Tasks() {
  const [input, setInput] = useState("");
  const { tasks, addTask, deleteTask } = useTasks();

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Tasks Page 📝</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ listStyle: "none" }}>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Tasks;