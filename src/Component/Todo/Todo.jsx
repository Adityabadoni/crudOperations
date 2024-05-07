import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [inputValue , setInputValue] = useState('')
  const [todo , setTodo] = useState([])
  console.log(inputValue)
  const handelSubmit =()=>{
    if(inputValue==""){
      alert("addTask")
    }
    else{
      const data = [...todo , inputValue]
    setTodo(data)
    console.log(todo)
    setInputValue('')
    }
     
  }
  return (
    <div className="d-flex justify-content-center h-100 align-items-center mt-5">
      <div className="w-50 border  h-100">
        <div className="text-center">
          <h4>Todo list</h4>
        </div>
        <div className="d-flex justify-content-center gap-2">
          <input type="text" value={inputValue} className="form-control w-50" onChange={(e)=>setInputValue(e.target.value)} />
          <button className="btn btn-primary" onClick={handelSubmit}>+</button>
        </div>{" "}
<div className="w-100  text-center p-5">
<TodoList data={todo}/>
</div>
      </div>
    </div>
  );
};

export default Todo;
