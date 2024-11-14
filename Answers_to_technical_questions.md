# Answers to Technical Questions

## How long did you spend on the coding test?
I spent approximately 4-5 on the coding test. 

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
 In the latest versions of React , Concurrent Rendering and Automatic Batching have brought significant improvements. These are particularly useful for optimizing app performance, especially in larger applications like the Task Management project.

One specific feature introduced in React 18 is Concurrent Rendering with useTransition, which allows for more responsive user interfaces by enabling React to interrupt rendering to keep the app responsive during heavy updates.

### Example:
```javascript
import React, { useState, useTransition } from 'react';

const TaskDashboard = ({ tasks }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isPending, startTransition] = useTransition();

  // Handle task filtering with `startTransition` to avoid blocking UI
  const handleFilterChange = () => {
    startTransition(() => {
      // Perform expensive state updates that can be interrupted
      const filteredTasks = tasks.filter(task => {
        return (
          (priorityFilter === 'All' || task.priority === priorityFilter) &&
          (statusFilter === 'All' || task.status === statusFilter) &&
          task.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredTasks(filteredTasks);
    });
  };

  return (
    <div>
      {/* UI Elements */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks"
      />
      <select onChange={(e) => setPriorityFilter(e.target.value)}>
        <option value="All">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {isPending ? <p>Loading tasks...</p> : <TaskList tasks={filteredTasks} />}
    </div>
  );
};

export default TaskDashboard;


// Accessing city using optional chaining
const city = user.profile?.address?.city;
console.log(city); // Output: Prayagraj

// Safely accessing a non-existent property
const phone = user.profile?.contact?.phone;
console.log(phone); // Output: undefined


In my projects, this feature is particularly helpful for accessing data from APIs where fields may be missing. It reduces the need for extensive null checks and simplifies code readability.





## How would you track down a performance issue in production? Have you ever had to do this?
To identify a performance issue in production, I would use a structured approach:

1. **Monitor Application Metrics**: I would begin by monitoring essential performance metrics such as response time, error rate, CPU, and memory usage.

2. **Review Logs for Errors**: By examining application logs, I can detect error patterns or frequent warnings that may indicate underlying issues. 

3. **Database Analysis**: Often, database bottlenecks cause performance issues. I would use profiling tools or database-specific tools to analyze query execution times, optimize indexes, and reduce unnecessary queries or joins.

4. **Profile Application Code**: Using profiling tools like **Chrome DevTools** for frontend or **Node.js Profiling** for backend, I would identify specific functions or code sections that consume excessive time or memory. For JavaScript applications, tools like **LightHouse** help in identifying client-side performance bottlenecks.

5. **Load Testing in Staging**: Simulating production load in a staging environment with tools like **Apache JMeter** or **Gatling** can help replicate the issue and reveal how the application behaves under high traffic conditions.

### Past Experience
Yes, I have tracked down performance issues in production before, specifically during my work on a project. The problem stemmed from unoptimized database queries under heavy load, which caused delays in response times. By monitoring performance metrics and optimizing database queries, I was able to significantly reduce response times.

## If you had more time, what additional features or improvements would you consider adding to the Task Management Application?
If I had additional time, I would enhance the Task Management application with the following features:

1. **User Authentication and Roles**: Implement user authentication to allow for multiple user accounts. Adding role-based access would enable collaborative task management and controlled access to different functionalities.

2. **Real-Time Notifications**: Introduce real-time notifications for upcoming deadlines, overdue tasks, and priority tasks to improve user engagement and task adherence.

3. **Data Persistence Across Devices**: Integrate a cloud-based backend to synchronize task data across devices. This would allow users to seamlessly access their tasks from multiple devices.

4. **Detailed Analytics Dashboard**: Add an analytics section to provide users with productivity insights, such as completion rates, time spent on tasks, and trends in task priorities. This would support users in tracking their progress over time.

5. **Drag-and-Drop Functionality**: Enable drag-and-drop sorting of tasks within different categories for a more interactive user experience. This would allow users to rearrange tasks quickly based on changing priorities.

Each of these features would enhance usability, accessibility, and the overall experience of the Task Management application.



