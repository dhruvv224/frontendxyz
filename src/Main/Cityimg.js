import React from 'react'
import './Cityimg.css'
import bangloreimg from './Assets/Cities photos/banglore.png'
import ahemdabadimg from './Assets/Cities photos/ahemdabad.png'
import delhiimg from './Assets/Cities photos/delhi.png'
import puneimg from './Assets/Cities photos/punenew.png'

export const Cityimg = () => {
  return (
    <div className='Main'>
        
            <h1 className='headingforimg'>Find The Best Jobs In Your <span>City</span></h1>
        
    <div className='img-container'>
        <div className='banglore'>
        <img src={bangloreimg}>
         
        </img>
        <h4>Banglore</h4>
        </div>
        <div className='delhi'>
        <img src={delhiimg}>
         
        </img>
        <h4>Delhi</h4>
        </div>
        <div className='Ahemdabad'>
        <img src={ahemdabadimg}>
         
        </img>
        <h4>Ahemdabad</h4>
        </div>
        <div className='Pune'>
        <img src={puneimg}>
         
        </img>
        <h4>Pune</h4>
        </div>
    </div>
    </div>
  )
}
export default Cityimg;
