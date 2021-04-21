import React from 'react';
import './Recent.css';

const Recent = ({date, recentText , number}) => {
    return (
        <div className="recent">
            <p className="recent_icon"> {date} </p>
            <p> {recentText} </p>
            <p> {number} </p>
        </div>
    )
}

export default Recent;
