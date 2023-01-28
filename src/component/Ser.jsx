import React, {useState, useRef, useEffect} from 'react';



const ser = () =>{
    const nameRef = useRef(null)
  

   const onclick = (e)=>{
    console.log(nameRef.current.value)
    nameRef.current.value = ""
   }

   const onchange = (e)=>{
   setName(e.target.value)
   }
    return(

        <>
        <div>{name}</div>
        
            <input placeholder='enter values' onChange={onchange}  ref={nameRef}/>
            <button onClick={onclick}>click to change</button>
        </>
    )
}

export default ser;