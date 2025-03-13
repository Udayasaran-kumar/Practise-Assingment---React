import React, { useState } from 'react'
import { addtodo, complete, deletetodo } from '../redux/actions';
import { useDispatch, useSelector } from "react-redux";
const Todo = () => {
const [inputText,setInputText]=useState("");
const todos=useSelector((state)=>state);
const dispatch=useDispatch();
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addtodo(inputText));
    setInputText("");
};
console.log(todos);
  return (
    <>
    <div>
     <form onSubmit={handleSubmit}>
        <input  onChange={(e)=>setInputText(e.target.value)}
        type="text" 
        placeholder="enter your todo"
        />
        <input type="submit" value="Add Todo" />        
     </form>
     </div>
     <div>
               
                <button onClick={() => dispatch(setFilter("PENDING"))}>Pending</button>
            </div>
     <ul>
        {todos.map((todo)=>(
            <li key={todo.id} >
                <span>{todo.text}</span>
                
                <span>{todo.iscomplete? "Completed":"Yet to complete"}</span>
                <button onClick={()=>dispatch(complete(todo.id))}>Mark as Complete</button>
                <button onClick={()=>dispatch(deletetodo(todo.id))}>DELETE</button>
            </li>
        ))}
     </ul>
     </>
  )
}

export default Todo;
