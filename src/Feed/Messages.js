import React from 'react';
import './Messages.css';
import searchicon from './Assets/search-interface-symbol.png'
import user from './Assets/user.png';
import user1 from './PRofile pics/Improve-profile-for-MBA-India-USA.jpg'
import user2 from './PRofile pics/9swhe6dp_400x400.jpeg'
import user4 from './PRofile pics/lia.jpg'
import user3 from './PRofile pics/man3.jpg'
import user5 from './PRofile pics/user3.jpg'
import user6 from './PRofile pics/women-profile-pictures-2400-x-1600-n2or9xbo3q54wblo.jpg';
// import user7 from './PRofile pics';
import user8 from './PRofile pics/aa9ef022cdae83df1d96baa6fbbeb380.jpg'
import user9 from './PRofile pics/49915743.jpeg'

export const Messages = () => {
  return (
    <div className=''>
    <div className='Messages-container'>
        <div className='messages-header'>
        <h4>Messages</h4>
       
        </div>
        <div className='Search-message'>
            <img className='search-icon' src={searchicon}></img>
            <input type='text' className='search-bar2' placeholder='Search Messages'/>

        </div>
        <div className='messages'>
            <div className='message'>
                <img src={user1} className='user-profile'></img>
                <div className='message-content'>
                <h6 className='text' >John Doe</h6>
                <p style={{display:""}}>Hello i want to tell you something</p> </div>
                </div>
                <div className='message'>
                <img src={user2} className='user-profile'></img>
                <div className='message-content'>
                <h6 className='text' >Mital Patel</h6>
                <p style={{display:""}}><strong>hey there i want to add you in group</strong></p> </div>
                </div>
                <div className='message'>
                <img src={user3} className='user-profile'></img>
                <div className='message-content'>
                <h6 className='text' >Wick Lord</h6>
                <p style={{display:""}}>join in my community</p> </div>
                </div>
                <div className='message'>
                <img src={user4} className='user-profile'></img>
                <div className='message-content'>
                <h6 className='text' >Emmie elly</h6>
                <p style={{display:""}}>when will you join </p> </div>
                </div>
                <div className='message'>
                <img src={user5} className='user-profile'></img>
                <div className='message-content'>
                <h6 className='text' >Randip hooda</h6>
                <p style={{display:""}}><strong>some documents 
                    that you have to sign</strong></p> </div>
                </div>
                <div className='message'>
                <img src={user6} className='user-profile'></img>
                <div className='message-content'>
                <h6 className='text' >Alle willy</h6>
                <p style={{display:""}}>i mailed you on saturday</p> </div>
                </div>
                <div className='message'>
                <img src={user8} className='user-profile'></img>
                <div className='message-content'>
                <h6 className='text' >Eva johnson</h6>
                <p style={{display:""}}><strong>there are some work pending</strong></p> </div>
                </div>
                <div className='message'>
                <img src={user9} className='user-profile'></img>
                <div className='message-content'>
                <h6 className='text' >Vivek Dubbal</h6>
                <p style={{display:""}}>Hello i want to tell you something</p> </div>
                </div>

        </div>
        
        </div>
        <div className='Requests-container'>
            <div className='requests-header'>
                <h4>Requests</h4>

            </div>
            <div className='requests-'>
                <div className='request'>
                    <img src={user3} className='user-profile'></img>
                    <div className='request-info'>
                        <h6 className='text'>Arjun Rathod </h6>
                        <p>4 Mutual connections</p>
                    </div>
                   
                </div>
                <div className='Request-button'>
                <button className='req-button1'>Accept</button>
                    <button className='req-button2'>Decline</button>
                    </div>
                    <div className='request'>
                    <img src={user4} className='user-profile'></img>
                    <div className='request-info'>
                        <h6 className='text'>Ema watson </h6>
                        <p>4 Mutual connections</p>
                    </div>
                   
                </div>
                <div className='Request-button'>
                <button className='req-button1'>Accept</button>
                    <button className='req-button2'>Decline</button>
                    </div>
                
            </div>
        </div>
        
    </div>
  )
}
export default Messages;