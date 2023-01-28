import React, {useState, useRef, useEffect} from 'react';
import Service from './Service'
import Home from './Home';
import Image from '../assets/WIN_20221228_01_21_43_Pro.jpg'



const Properties = () =>{
  const [count , setCount] = useState(0);
  const [price, setPrice ] = useState(30)



  const increase = ()=>{
    setCount((prev)=>{
        return prev+1
    })
  }

  const reduces = () =>{
    setCount((prev)=>{
        return prev-1
    })
    
  }
    const onclickImage = ()=>{
        setCount((prev)=>{
            return prev+1
        })
    }
  return(
    <div>
        <div>
            <img src={Image} onClick={onclickImage} alt="text if it will work" style={{width:'200px', height:'200px'}}/>
           <div>{count>0 ? <div>${price*count}</div>:<div>${price}</div>}</div>
        </div>

        { count> 0 && <Service countR={count} increaseR={increase} decreaseR={reduces} /> }
        
    </div>
  )
    
}

export default Properties;