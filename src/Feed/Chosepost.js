import React, { useState } from 'react';
import './Choosepost.css'
import Postcreation from './Postcreation';
import Jobpostcreation from './Jobpostings/Jobpostcreation';

export const Chosepost = ({ onClose, onJobPost,setchoosejob,username}) => {
  const [showModal, setShowModal] = useState(true);
  const [postcreation,setpostcreation]=useState(false)
  const [jobpostcreation,setjobpostcreation]=useState(false)

  const handleClose = () => {
    setShowModal(false);
    setpostcreation(false)
    
  };
  


  const handlePost = () => {
    // onPost();
    setpostcreation(true)
  };
  const handleexit=()=>{
    setjobpostcreation(false)
    // setShowModal(false)
    setchoosejob(false)
    setpostcreation(false)
  }

  const handleJobPost = () => {
    // onJobPost();
    setjobpostcreation(true)
    // handleClose();
  };

  return (
    <div>
      {showModal && (
        <div className='modal' style={{ display: showModal ? 'block' : 'none' }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Choose Type Of Post</h5>
                <button type='button' className=' btn-danger' aria-label='Close' onClick={handleClose} style={{width:'50px',height:'30px', border:'none' ,borderRadius:'15px',cursor:'pointer'}}>&times;</button>
              </div>
              <div className='modal-body'>
                <p style={{ fontSize: '20px', color: 'black' }}>What type of post do you want to create?</p>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-primary' style={{width:'100px', borderRadius:'15px'}} onClick={handlePost}>Post</button>
                {postcreation && <Postcreation onClose={handleexit} username={username} />}
                <button type='button' className='btn btn-primary' style={{width:'100px',borderRadius:'15px'}} onClick={handleJobPost}>Job Posting</button>
                {jobpostcreation && <Jobpostcreation onClose={handleexit} username={username}/>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chosepost;
