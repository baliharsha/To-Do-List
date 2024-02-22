"use client"
import React, { useState } from 'react';

function page() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmainTask] = useState([])


  const submitHandler = (e)=>{
   e.preventDefault()
    setmainTask([...maintask, { title, desc }]);
   settitle("")
   setdesc("")
   console.log(maintask)
  };

  const deleteHandler = (i) => {
       let copytask = [...maintask]
       copytask.splice(i, 1)
       setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  if(maintask.length>0) { 

    renderTask = maintask.map((t, i) => {
    return (
     <li  key={i} className="flex items-center justify-between mb-8"> 
      <div className="flex justify-between mb-5 w-2/3">
     <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h6 className="text-xl font-semibold">{t.desc}</h6>
    </div>
    <button
    onClick = {() =>{
      deleteHandler(i)
    }}
      className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
    </li>
  );
  });
}
    return(
  
    <>
    <form onSubmit={submitHandler}>
<h1 className= 'bg-black text-white p-5 text-5xl font-bold text-center'>To Do List</h1>

<input type="text"
className="text-2xl border-zinc-800 border-4 m-8  px-4 py-2"
placeholder="Enter task here"
value={title}
onChange={(e)=>{
  settitle(e.target.value)
}}
/>

<input type="text"
className="text-2xl border-zinc-800 border-4 m-8  px-4 py-2"
placeholder="Enter description here"
value={desc}
onChange={(e)=>{
  setdesc(e.target.value)
}}
/>

<button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">Add Task</button>
</form>

<hr/>

<div className="p-8 bg-slate-200">
<ul>
  {renderTask}
  </ul>
</div>




    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default page