import axios from 'axios';
import React, { useState, useEffect } from 'react';


const CardItem=()=> {
    const [count, setCount]=useState([]);

useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
.then((a)=>{
setCount(a.data);
console.log(a);
})
.catch((err)=>
console.log(err)
)}, [])
    return (
        <div className='cards'>
            {
            count.map(val=> <li key={val.id} >
            <li className = 'cards__item'>
                    <figure className='cards__item__pic-wrap' data-category={val.title}>
                        <img className='cards__item__img' src={val.url} alt='Travel'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>
                        {val.thumbnailUrl}     
                        </h5>
                    </div>
            </li>
            </li>)
        }
        </div>
    )
}

export default CardItem
