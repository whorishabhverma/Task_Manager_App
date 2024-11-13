import React from 'react';

const Task = ({ task, deleteTask, setEditingTask }) => (
  <div className="bg-white shadow-md rounded-md p-4 mb-4">
    <h3 className="text-lg font-medium">{task.title}</h3>
    <p className="text-gray-700">{task.description}</p>
    <p className="text-gray-600">Due Date: {task.dueDate}</p>
    <p className="text-gray-600">Priority: <span className={`font-medium ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>{task.priority}</span></p>
    <div className="mt-4 flex justify-end">
      <button
        onClick={() => setEditingTask(task)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
      >
        Edit
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </div>
);

export default Task;