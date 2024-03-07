import React from 'react'
import './Notice2.css';


export const Notice2 = ({onclose}) => {

  return (
    <div className='notice-dialog2'>
        <div className='notice-content'>
            <h5>Notice:</h5>
            <p>To access this feature, please log in to your account.</p>
            <h5>Why Log In?</h5>
            <ol>Unlock Full Access: Logging in allows you to access all features and functionalities.</ol>
            <ol>Personalization: Customize your experience and preferences.</ol>
            <ol>Stay Connected: Engage with the community, follow topics of interest, and connect with others.</ol>
            <h4>How to Log In:</h4>
            <p>If you already have an account, click [Log In] to access your profile and unlock all features. If you don't have an account yet, click [Register] to create one now.Thank you for being a part of our community!</p>
            <button onClick={onclose}>Close</button>
        </div>

    </div>
  )
}
export default Notice2;

