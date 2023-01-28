import React from 'react'
import image from '../assets/WIN_20221228_01_21_43_Pro.jpg'

function Linking() {
  return (
    <div style={{backgroundColor:"black", padding:20,width:300, height:350, color:'white' }}>
    <div><img src={image} style={{backgroundSize:"contain", height:200, width:260}} alt='the image' /> </div>
    <div className='price'>
    <div>$1</div>
    <div>items name</div>
    
    </div>
    <div className='decs'>
      my name is temple eferurhobo and you are welcome to the world of telecommunition and electronic
    
    </div>
    </div>
  )
}

export default Linking
