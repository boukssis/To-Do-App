import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit? props.edit.value : '');


  const inputRef= useRef(null)

  useEffect(()=>{
      inputRef.current.focus()
  })
  const handleChange = (e)=>{
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text:input
    })
    setInput('')
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>

        {props.edit ? (
            <>
              <input
              type="text"
              value={input}
              name="text"
              className="todo-input edit"
              placeholder="Update your item"
              ref={inputRef}
              onChange={handleChange}
            />
            <button className="todo-button edit">Update</button>
            </> ) :(    <> <input
            type="text"
            value={input}
            name="text"
            className="todo-input"
            placeholder="Add a todo"
            ref={inputRef}
            onChange={handleChange}
          />
          <button className="todo-button">Add todo</button>
          </>
          )}
    
    </form>
  );
};

export default TodoForm;
