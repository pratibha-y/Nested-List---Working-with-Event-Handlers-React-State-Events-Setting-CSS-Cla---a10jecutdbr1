import React from 'react'
import { useState } from 'react';
import Town from './Town';

export default function City ({name,towns,index}) {
    const [clicked, setClicked] = useState(false);
    function handleClick(){
        setClicked(!clicked)
    }
    return (
        <li>
            <h4 id={'city'+(index+1)} onClick={handleClick}>{name}</h4>
            {clicked ? (
                <ul>
                {towns.map((item,i)=>(
                    <Town 
                    name={item.name} 
                    index={i} />
                ))}
                </ul>     
            ):null}
        </li>
    )
}
