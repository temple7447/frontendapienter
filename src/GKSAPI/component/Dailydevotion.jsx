import React from 'react'
import axios from 'axios'

function Dailydevotion() {



    const firstOnchange = (e)=>{
     const val=    e.target.value
        console.log(val)
    }

    const secondOnchange = (e)=>{
        const val=    e.target.value
        console.log(val)
    }

    const thirdOnchange = (e)=>{
        const val=    e.target.value
        console.log(val)
    }
  return (
    <div>
    <div>
    <label >title</label>
    <input type='text' onChange={firstOnchange} placeholder='enter ' />
    </div>
    <div>
    <label >title</label>
    <input type='text' onChange={secondOnchange} placeholder='enter ' />
    </div>
    <div>
    <label >title</label>
    <input type='text' onChange={thirdOnchange} placeholder='enter ' />
    </div>
    <button type='submit'>click to Post</button>

    </div>
  )
}

export default Dailydevotion;
