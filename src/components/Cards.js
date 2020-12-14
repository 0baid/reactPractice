import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Destination</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='./images/img-1.jpg'
                        text='Watch the sunset from the mountains'
                        label='Adventure'
                        path='/Services'
                        />
                        <CardItem 
                        src='./images/img-2.jpg'
                        text='Relax on the beaches of ibiza or where ever this is'
                        label='Adventure'
                        path='/Services'
                        />
                        <CardItem 
                        src='./images/img-4.jpg'
                        text='I dont even know whats going on in this one'
                        label='Adventure'
                        path='/Services'
                        />
                        <CardItem 
                        src='./images/img-home.jpg'
                        text='Here is a big rock in the ocean'
                        label='Adventure'
                        path='/Services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
