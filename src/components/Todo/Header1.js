
import React from 'react'

// // import  './Header1.css';
// import { AiOutlinePlusCircle } from 'react-icons/ai';
import Task1 from './Task1';
import { useState } from 'react';

const Header1 = () => {
  const [input, setInput]= useState("");
  const [todo, setTodo]= useState([]);

  return (
    <div className='header'>
    <h1> Todolist </h1>
    </div>,
    <Task1 
    input={input}
    setInput={setInput}
    todo={todo}
    setTodo={setTodo}
    />
    
  )
}

export default Header1
