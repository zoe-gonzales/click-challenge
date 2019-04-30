import React from 'react';
import './style.css';

export default function Image(props){
    return <img 
        src={props.source} 
        alt={props.name} 
        onClick={props.handler}/>;
}