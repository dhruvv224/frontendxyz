import React from 'react'
import './Community2.css';
import techfreaks from './Assets/responsive.png';
import android from './Assets/android.png'
import apple from './Assets/apple.png'
import coding from './Assets/coding.png';
import hacker from './Assets/hacker.png'
import react from './Assets/react.png';
import socialmedia from './Assets/social-media.png'
import engineers from './Assets/worker.png';
import python from './Assets/python.png';
import hr from './Assets/human-resources.png';
import robot from './Assets/robot.png';
import freelancers from './Assets/freelancer.png'
import ai from './Assets/ai.png';
import Emplogin from '../Employers/Emplogin';

import designers from './Assets/graphic-designer.png';
import devops from './Assets/devops.png'
export const Community2 = () => {
  return (
    <div className='community-container'>
        <div className='community-header'>
        <h3>
            Best of SkilNet

        </h3>
        </div>
        <div className='middle'>
        <h3>
             Top Communities
             <p style={{fontSize:'15px', color:'grey'}}>Browse Skilnet's largest Communities</p>
            </h3>
            </div>
        <div className='main-community'>
            <div className='community'>
                <img src={techfreaks} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>Tech Freaks</span>
                <p >30k Members</p>
                </div>
            </div>
            <div className='community'>
                <img src={android} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>Android Devs</span>
                <p >5k Members</p>
                </div>
            </div>
            <div className='community'>
                <img src={apple} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>Apple developers</span>
                <p >30k Members</p>
                </div>
            </div>
            
            <div className='community'>
                <img src={freelancers} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>freelancers hubs</span>
                <p >200</p>
                </div>
            </div>
            
            <div className='community'>
                <img src={hr} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>HR gang</span>
                <p >50k Members</p>
                </div>
            </div>
            
            <div className='community'>
                <img src={robot} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>Robotics facts/hub</span>
                <p >30k Members</p>
                </div>
            </div>
            <div className='community'>
                <img src={socialmedia} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>Digital marketing</span>
                <p >30k Members</p>
                </div>
            </div>
            
            <div className='community'>
                <img src={python} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>Python-community</span>
                <p >50k Members</p>
                </div>
            </div>
            
            <div className='community'>
                <img src={react} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>React Devs</span>
                <p >50k Members</p>
                </div>
            </div>
            
            <div className='community'>
                <img src={hacker} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>Legit hackershub</span>
                <p >3k Members</p>
                </div>
            </div>
            
            <div className='community'>
                <img src={ai} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>Ai engineers</span>
                <p >8k Members</p>
                </div>
            </div>
            
            <div className='community'>
                <img src={engineers} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>engineers</span>
                <p >10k Members</p>
                </div>
            </div>
            
            <div className='community'>
                <img src={coding} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>Developers hub</span>
                <p >30k Members</p>
                </div>
            </div>
            
            <div className='community'>
                <img src={designers} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>Graphic Designers</span>
                <p >10k Members</p>
                </div>
            </div>
            <div className='community'>
                <img src={devops} className='community-icon'>

                </img>
                <div className='community-info'>
                <span style={{color:'black', fontSize:'20px'}}>Devops Community</span>
                <p >15k Members</p>
                </div>
            </div>
            
            

        </div>
    </div>
  )
}
export default Community2;