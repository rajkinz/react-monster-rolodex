import React from 'react';
import './Cards.styles.css';

export const Card = props => {
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/PC4.png?set=set${props.monster.id}`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
};