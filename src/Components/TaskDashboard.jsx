import React from 'react';
import { Check, Edit, Trash2, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const TaskDashboard = ({
  tasks,
  searchQuery,
  priorityFilter,
  statusFilter,
  deleteTask,
  setEditingTask,
  updateTask
}) => {
  const today = new Date();

  // Filter tasks by priority, status, and search query
  const filteredTasks = tasks.filter(task => {
    return (
      (priorityFilter === 'All' || task.priority === priorityFilter) &&
      (statusFilter === 'All' || task.status === statusFilter) &&
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Categorize tasks
  const upcomingTasks = filteredTasks.filter(task => new Date(task.dueDate) > today && task.status !== 'Completed');
  const overdueTasks = filteredTasks.filter(task => new Date(task.dueDate) < today && task.status !== 'Completed');
  const completedTasks = filteredTasks.filter(task => task.status === 'Completed');

  const getPriorityColor = (priority) => {
    const colors = {
      High: 'bg-red-100 text-red-800 border-red-200',
      Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      Low: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getStatusColor = (status) => {
    const colors = {
      Pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'In Progress': 'bg-blue-100 text-blue-800 border-blue-200',
      Completed: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const handleToggleComplete = (task) => {
    const updatedTask = {
      ...task,
      status: task.status === 'Completed' ? 'Pending' : 'Completed'
    };
    updateTask(updatedTask);
  };

  // Section header component
  const SectionHeader = ({ icon: Icon, title, count, color }) => (
    <div className="flex items-center space-x-3 mb-6">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{count} tasks</p>
      </div>
    </div>
  );

  const renderTaskCards = (tasks) => (
    tasks.map(task => (
      <div
        key={task.id}
        className={`bg-white rounded-xl shadow-sm overflow-hidden border-2 border-blue-200
          transition-all duration-200 hover:shadow-md hover:border-blue-500`}
      >
        {/* Card Header with Action Buttons */}
        <div className="p-4 border-b border-yellow-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleToggleComplete(task)}
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-300
                  ${task.status === 'Completed'
                    ? 'border-green-500 bg-green-500 hover:bg-green-600 hover:border-green-600'
                    : 'border-gray-300 hover:border-green-500'}`}
              >
                <Check 
                  className={`w-4 h-4 transition-all duration-300 transform
                    ${task.status === 'Completed'
                      ? 'text-white scale-100'
                      : 'text-transparent scale-0'}`}
                />
              </button>
              <h3 className={`font-semibold text-lg ${task.status === 'Completed' ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                {task.title}
              </h3>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setEditingTask(task)}
                className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                title="Edit task"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
                title="Delete task"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Due Date */}
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <Clock className="w-4 h-4 mr-1" />
            <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
          </div>
        </div>
  
        {/* Card Body */}
        <div className="p-4 bg-gray-50">
          <p className={`text-gray-600 mb-4 ${task.status === 'Completed' ? 'text-gray-400' : ''}`}>
            {task.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-full text-sm border ${getPriorityColor(task.priority)}`}>
              {task.priority} Priority
            </span>
            <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(task.status)}`}>
              {task.status}
            </span>
          </div>
        </div>
      </div>
    ))
  );
  

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Upcoming Tasks Section */}
      <div className="mb-8">
        <SectionHeader 
          icon={Clock} 
          title="Upcoming Tasks" 
          count={upcomingTasks.length}
          color="bg-blue-100 text-blue-800"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingTasks.length > 0 ? 
            renderTaskCards(upcomingTasks) : 
            <div className="col-span-full p-8 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500">No upcoming tasks</p>
            </div>
          }
        </div>
      </div>

      {/* Overdue Tasks Section */}
      <div className="mb-8">
        <SectionHeader 
          icon={AlertCircle} 
          title="Overdue Tasks" 
          count={overdueTasks.length}
          color="bg-red-100 text-red-800"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {overdueTasks.length > 0 ? 
            renderTaskCards(overdueTasks) : 
            <div className="col-span-full p-8 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500">No overdue tasks</p>
            </div>
          }
        </div>
      </div>

      {/* Completed Tasks Section */}
      <div className="mb-8">
        <SectionHeader 
          icon={CheckCircle} 
          title="Completed Tasks" 
          count={completedTasks.length}
          color="bg-green-100 text-green-800"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedTasks.length > 0 ? 
            renderTaskCards(completedTasks) : 
            <div className="col-span-full p-8 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500">No completed tasks</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;