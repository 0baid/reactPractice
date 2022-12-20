import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import Carddata from './Carddata';
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Destination</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    {
           Carddata.map ((val )=> {
              return (
                <CardItem
                imgsrc={val.imgsrc}
                text = {val.text}
                label = {val.label}
                path= {val.path}/ >
              );
            })
           }
                  </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
