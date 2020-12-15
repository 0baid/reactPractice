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
                        text='Watch the sunset from the mountains'
                        label='Adventure'
                        path='/Services'
                        />
                         <CardItem 
                        src='./images/img-home.jpg'
                        text='Watch the sunset from the mountains'
                        label='Adventure'
                        path='/Services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='./images/img-3.jpg'
                        text='Watch the sunset from the mountains'
                        label='Adventure'
                        path='/Services'
                        />
                        <CardItem 
                        src='./images/img-4.jpg'
                        text='Watch the sunset from the mountains'
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
