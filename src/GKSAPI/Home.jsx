import React from 'react'
import Dailydevotion from './component/Dailydevotion';
import '../GKSAPI/styles.css'

const Home = () => {
  return (
    <div>
    <section style={{display:'flex',width:'100vw', height:100, justifyContent:'space-around', alignItems:'center'}}>
      <div>logo</div>
      <div>search </div>
    </section>

    <section style={{display:'flex', width:'100vw', justifyContent:'space-around',alignItems:'center'}}>
      <div className='asidelist'>
        <ul>
          <li>Dailydevotion</li>
          <li>Music</li>
        </ul>
      </div>
      <div className='inputfield'>
        <Dailydevotion />
      </div>
    </section>





    
    </div>
  )
}

export default Home
