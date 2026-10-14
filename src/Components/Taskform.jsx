import React, { useState } from 'react'

export default function Taskform({addTask}) {

    const[task, setTask] = useState("");
    const[priority, setPriority] = useState("High");
    const[category, setCategory] = useState("General"); 

    const handlesubmit = (e) => {
        e.preventDefault();
        addTask({text:task, priority, category, completed: false})

        //reset state
        setTask(" ");
        setPriority("High")
        setCategory('General')
    }

  return (
    <form className='task-form' onSubmit={handlesubmit}>
        <div id="inp">
            <input type='text' placeholder='Enter a task sync with you' onChange={(event) =>setTask(event.target.value)} value={task}/>
            <span><button type='submit'>Add Task To Sync</button></span>
            <p>{task} {priority} {category}</p>
        </div>

        <div id="btns">
            <select onChange={(event) =>setPriority(event.target.value)} value={priority}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <select onChange={(event) =>setCategory(event.target.value)} value={category}>
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
        </div>
    </form>
  )
}
