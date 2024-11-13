import React from "react"
import PriorityFilter from "./Components/PriorityFilter"
import SearchBar from "./Components/Searchbar"
import StatusFilter from "./Components/StatusFilter"
import TaskForm from "./Components/TaskForm"
export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Task Management</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Controls Section */}
        <div className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-between mb-6">
          {/* Search Bar */}
          <div className="w-full md:w-1/3">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>

          {/* Filters and Add Button */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Filter Button (Mobile) */}
            <button
              className="md:hidden px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            >
              Filters
            </button>

            {/* Filter Options */}
            <div className={`${isFilterMenuOpen ? 'block' : 'hidden'} md:block md:flex md:space-x-4`}>
              <PriorityFilter priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} />
              <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
            </div>

            {/* Add Task Button */}
            <button
              onClick={() => setShowForm(true)}
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 shadow-sm"
            >
              + Add Task
            </button>
          </div>
        </div>

        
        {/* Task Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
              <TaskForm
                addTask={addTask}
                updateTask={updateTask}
                editingTask={editingTask}
                closeForm={() => setShowForm(false)}
              />
            </div>
          </div>
        )}

        

      </main>


    </div>  
  )
}