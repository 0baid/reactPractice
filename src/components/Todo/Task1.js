
import React, { useState } from 'react'
import {TiDelete} from 'react-icons/ti';
import {BiEditAlt} from 'react-icons/bi';
// import Deletetask from './Delletetask';
// // import Deletetask from './Delletetask';

import './Todolist.css';
const Task1 = () => {
  const [input, setInput]=useState("");
  const[todo, setTodo]=useState([]);
  const [edit, setEdit]=useState([]);
  const [toggile, setToggle] = useState(true);
 
  const eventitem =(event )=>{ 
    setInput(event.target.value);
  }
  const itemstore=(e)=>{
    e.preventDefault();
    setTodo((oldarr)=> {
    return [...oldarr, input]
     })
     setInput("")
  }

const deleteItem =(index)=>{
  const newitem=[...todo]
  newitem.splice(index,1);
  setTodo(newitem);
}

    const Edititem=(id)=>{
      const edits = todo.find(task => task.id===id)
        setEdit(edits);
       setInput(edit);
       setToggle(false);
       
      }
    
  return (
    <>
      <form>
        <input type="text" placeholder= " enter a task" className='task-input'  value={input}
        onChange={eventitem}/>
        { toggile ? <button onClick={itemstore}> Add  </button>
        : <i><button className='edit' 
         onClick={ itemstore}
          >EDIT </button></i>
                }
                        
      </form> 
      <div>
      {
          todo.map((val,index)=>{
            return  <li   className='crosstext' key ={index}>{val} 
            <BiEditAlt className='edit' 
            key={index}
            id={index}
            onClick={()=> Edititem(val.id)}
             /><TiDelete className=' cross'
            
            onClick={()=> deleteItem (index)}
            /> 
            </li> ;
          })
        }
      </div>
    </>
  )
}
export default Task1



