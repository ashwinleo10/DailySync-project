
import React from 'react';

export default function Tasklist({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed
    };

    updateTask(updatedTask, index);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={task.completed ? 'completed' : ''}
        >
          <div className="task-content">
            <span className={task.completed ? 'task-text done' : 'task-text'}>
              {task.completed && (
                <span className="completed-check">✓ </span>
              )}
              {task.text}

              <small>
                {task.priority}, {task.category}
              </small>
            </span>
          </div>

          <div className="task-actions">
            <button
              className="complete-btn"
              onClick={() => toggleComplete(index)}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
