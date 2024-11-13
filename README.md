# Task Management Application

## Overview
The **Task Management Application** is a tool to help users effectively manage their tasks by categorizing them as upcoming, overdue, or completed. Users can add, edit, delete, and filter tasks based on priority and status. The application also offers search functionality, ensuring users can quickly locate specific tasks. Data persistence is implemented to retain tasks even after page refreshes. Built with Vite, this project delivers a responsive and efficient user experience.

## Features
- **Dashboard View**: Displays upcoming, overdue, and completed tasks.
- **Add, Edit, Delete Tasks**: Easily manage task information.
- **Filter & Search**: Filter tasks by priority or status and use the search function to locate tasks.
- **Data Persistence**: Task data is stored locally to ensure tasks are not lost on page refresh.

## Project Structure
The application is structured as follows:
- **Components**: Each functional aspect, such as filters, task lists, and search, is encapsulated in separate React components.
- **State Management**: Uses React's state management to handle task data locally.

## Assumptions
- Tasks will have fields such as title, description, due date, priority, and status (upcoming, overdue, completed).
- Local storage will be used for data persistence to keep tasks between sessions without requiring a backend.
- Overdue tasks are determined based on the current date.
- Tasks can only be marked as completed manually; they won’t automatically shift from upcoming to completed.

## Technologies
- **Frontend**: React, TailwindCSS (for styling)
- **Tooling**: Vite (for faster build times and modern frontend tooling)

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/task-management.git
   cd task-management
2. **Install dependencies:**:
   ```bash
   npm install
3. **Run the application:**:
   ```bash
   npm run dev
4. **Build for production**:
   ```bash
   npm run build


##Future Enhancements
- Implement a backend to sync tasks across devices.
- Add user authentication to allow multiple users to manage their tasks.
- Introduce notifications or reminders for upcoming and overdue tasks.

