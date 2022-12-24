
import React from 'react'
import Deletetask from './Delletetask';
const Task1 = ({input,setInput,todo,setTodo}) => {
  const eventitem =(event )=>{ 
    setInput(event.target.value);
  }
  const itemstor=(e)=>{
    e.preventDefault();
    setTodo((todoitem)=>{
      return [...todoitem,input];
    });
   setInput("");
  }
  const deleteitem=(a)=>{
    setTodo((todoitem)=>{
      return todoitem.filter((arrele,index)=>{
        return index!==a;
      })})
    }
  return (
    <>
      <form>
        <input type="text" placeholder= " enter a task" className='task-input'  value={input}
        onChange={eventitem}
        />
        <button className='button-add'  onClick={itemstor}> Add</button>
        <ul >
      {
         todo.map((item,index)=>{
          return   <Deletetask
          key={index}
          id={index}
          onSelect={deleteitem}
          text = {item}
          />
        })
        
      }
    
        
        </ul>
      </form> 
      
      </>

  )
}
export default Task1



