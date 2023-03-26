import React, { useState } from 'react';
import City from './City';

export default function State ({name, cities, index }) {
    const [clicked, setClicked] = useState(false);
    function handleClick(){
        setClicked(!clicked)
    }

    return (
        <li>
            <h3 id={'state'+(index +1)} onClick={handleClick}>{name}</h3>
            {clicked ? (
                <ul>
                {cities.map((item,i)=>(
                    <City 
                    name={item.name} 
                    towns={item.towns} 
                    index={i} />
                ))}
                </ul>     
            ):null}
        </li>
   
  )
}
