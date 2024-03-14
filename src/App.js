import React from 'react'
import './App.css'
import NewTaskForm from './Components/NewTaskForm'
import TaskList from './Components/TaskList'

function App() {
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  )
}

export default App