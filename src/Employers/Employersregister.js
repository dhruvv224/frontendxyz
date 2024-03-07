import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
// Import useNavigate instead of useHistory
import './Employersregister.css'

export const Employersregister = () => {
    const [showpassword, setshowpassword] = useState(false);
    const [employersdetails, setemployersdetails] = useState({
        companyname: '',
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        industry: '',
        location: ''
    });

    const navigate = useNavigate();
     //  useNavigate

     

    const handlesubmit = async (e) => {
        

        e.preventDefault();
        if(employersdetails.password !==employersdetails.confirmpassword)
        {
            alert("password and confirm password not matched")
        }
        else{

        
        try {
            const response = await axios.post('http://localhost:7000/api/employers', employersdetails);
            alert("Registration successful");
            navigate('/Employerspage'); // Use navigate to redirect
        } catch (error) {
            console.error("Error:", error);
            alert("Registration failed");
        }
    }
    };

    const handlechange = (e) => {
        const { name, value } = e.target;
        setemployersdetails({ ...employersdetails, [name]: value });
    };

    return (
        <div>
            <div className='Employersfrom'>
                <form className='' onSubmit={handlesubmit}>
                    Employer Name:
                    <input type='text' placeholder='Enter Your Name' value={employersdetails.name} onChange={handlechange} name='name' /><br />
                    Company Name:
                    <input type='text' placeholder='Enter Your Company' value={employersdetails.companyname} onChange={handlechange} name='companyname' /><br />
                    Password:
                    <input type='password' placeholder='Set Password' value={employersdetails.password} onChange={handlechange} name='password' /><br />
                    Confirm Password:
                    <input type='password' placeholder='Re-Enter your password ' value={employersdetails.confirmpassword} onChange={handlechange} name='confirmpassword' /><br />
                    Email:
                    <input type='email' placeholder='Enter Your email' value={employersdetails.email} onChange={handlechange} name='email' /><br />
                    Industry:
                    <input type='text' placeholder='enter your industry' value={employersdetails.industry} onChange={handlechange} name='industry' /><br />
                    Location:
                    <input type='text' placeholder='enter location' value={employersdetails.location} onChange={handlechange} name='location' /><br />
                    <button className='employersubmit' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Employersregister;
