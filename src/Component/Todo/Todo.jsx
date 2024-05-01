import React, { useState } from "react";

const Todo = () => {
  const [inputValue , setInputValue] = useState()
  console.log(inputValue)
  const handelSubmit =()=>{
     
  }
  return (
    <div className="d-flex justify-content-center h-100 align-items-center mt-5">
      <div className="w-50 border border-danger h-100">
        <div className="text-center">
          <h4>Todo list</h4>
        </div>
        <div className="d-flex justify-content-center gap-2">
          <input type="text" className="form-control w-50" onChange={(e)=>setInputValue(e.target.value)} />
          <button className="btn btn-primary" onClick={handelSubmit}>+</button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Todo;
