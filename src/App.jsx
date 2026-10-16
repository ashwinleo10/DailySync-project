import React, { useEffect, useState } from 'react'
import Tasklist from './Components/Tasklist'
import Taskform from './Components/Taskform'
import ProgressTracker from './Components/ProgressTracker'
import './App.css';

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks",  JSON.stringify(tasks))
  });
  
  const addTask = (task) => {
    setTasks([...tasks,task]);
  } 

  const updateTask = (updatedTask, index) => {
    const newtasks = [...tasks];
    newtasks[index] = updatedTask;
    setTasks(newtasks)
  } 

  const deleteTask = (index) => {
    setTasks(tasks.filter((_ , i) => i!= index))
  }

  const clearTask = () => {
    setTasks([]);
  }

  return (
    <div>
      <h1>DailySync</h1>
      <h4><i>Plan your day. Sync your goals. Get things done.</i></h4>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks}/>

      {tasks.length >0 && 
      (<button onClick={clearTask} className='clear-btn'>Clear All Sync</button>)}
    </div>
  )
}
