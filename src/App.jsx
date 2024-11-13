import React from "react"
import PriorityFilter from "./Components/PriorityFilter"
import SearchBar from "./Components/Searchbar"
import StatusFilter from "./Components/StatusFilter"
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Task Management</h1>
        </div>
      </header>
      <SearchBar/>
      <PriorityFilter/>
      <StatusFilter/>
    </div>  
  )
}