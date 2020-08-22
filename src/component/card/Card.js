import React, { Component } from 'react';

const Card = (props) => {
    <div className="user">
        <div className="userName">{props.userName}</div>
        <div className="userDescription">{props.userDescription}</div>
    </div>
}

export default Card;