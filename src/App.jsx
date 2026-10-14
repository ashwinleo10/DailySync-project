import React, { useEffect, useState } from 'react'
import Tasklist from './Components/Tasklist'
import Taskform from './Components/Taskform'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks",  JSON.stringify(tasks))
  });
  
  const addTask = (task) => {
    setTasks([...tasks,task]);
  } 

  const updateTask = () => {

  } 

  const deleteTask = () => {

  }

  return (
    <div>
      <h1>DailySync</h1>
      <h4><i>Plan your day. Sync your goals. Get things done.</i></h4>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgressTracker />
    </div>
  )
}
