import React from 'react'
import {TiDelete} from 'react-icons/ti';
import  './Header1.css';
const Deletetask = (props) => {
  return (
    <div className='crosstext'>
    <div className=' cross'>
      <TiDelete
      onClick={()=>{
        props.onSelect(props.id)
      }}
      />
       </div>
    <div className='text'>
      {props.text}
   
    </div>
    </div>
  )
}

export default Deletetask
