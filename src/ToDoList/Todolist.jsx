import React from 'react'
import { useState } from 'react'
import {nanoid} from 'nanoid'
import TodoItems from './TodoItems'
export default function Todolist() {
  //hooks
 
  const [task, settask] = useState("")
  const [todo, setToDo] = useState([])

  const handleChange = (el) =>{
    //  console.log(el)
     settask(el.target.value)

     }
     const handleClick =()=>{
       
       const obj ={title:task,id:nanoid()}
       setToDo([obj,...todo])


     }
     const handleDlt=(id)=>{

       
     }
  return (
    <div>
      <h1>To Do List</h1>
      <input onChange={handleChange} placeholder='EnterToDoItem' type="text" />
      <button className='btnsubmit' onClick={handleClick} >Submit</button>
        {todo.map((item)=>{
         return <TodoItems key={item.id} {...item} />
        })}

    </div>
  )
}
