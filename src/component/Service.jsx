import React, {useState, useRef, useEffect} from 'react';



const Service = ({countR,increaseR,decreaseR}) =>{
  
  
    return(
        <div>
        <button onClick={increaseR}>+</button>
        {countR}
        <button onClick={decreaseR}>-</button>
       </div>
    )
}

export default Service;