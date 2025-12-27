import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ opacity: task.completed ? 0.6 : 1 }}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        {task.text}
      </label>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default React.memo(TaskItem);
