import React, { useState } from 'react';
import './Emplogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../Context/AuthContext';

export const Emplogin = () => {
    const{setEmpmail,empmail}=useAuth()
    const navigate=useNavigate()
    const [logindeatail,setlogindetails]=useState({
        email:'',
        password:''
    })
   
    const [showpassword,setpassword]=useState(false)
    const submitlogin=()=>{
        console.log(logindeatail)

    }
  

    const handleChange=(e)=>

    {
        const {name,value}= e.target;
        setlogindetails({...logindeatail,[name]:value})
    }
    const emplogin=async(e)=>{
        e.preventDefault();
        try {
           const response=await axios.post("http://localhost:7010/api/employers/login",logindeatail)
            alert('Login Suceessfull')
            navigate('/Employerspage')
            setEmpmail(logindeatail.email)

            
        } catch (error) {
            console.log(error)
            alert("Incorrect Email or passwords")
            console.log(logindeatail)
        }
    }
  return (
    <div>
        <div className='emloyerslogin'>
            <form onSubmit={emplogin}>
            Email:
            <input type='text' name='email' value={logindeatail.email} onChange={handleChange} /><br/>
            Password:
            <input type='password' name='password' value={logindeatail.password} onChange={handleChange}/><br/>
            <button type='submit' >Login</button>
            </form>



        </div>
    </div>
  )
}
export default Emplogin;


