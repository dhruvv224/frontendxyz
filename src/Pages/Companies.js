import React, { useEffect, useState } from 'react';
import './Companies.css'
import companiesimg from './companies.jpg'
import Companies1 from './Companies.json'
import { array } from 'yup';
import axios from 'axios'

const Companies = () => {
  const [companies,setCompanies]=useState([]);
  useEffect(()=>{
    fetchCompanies();
  })
 const fetchCompanies =async() =>{
  try {
    const response= await axios.get('http://localhost:1111/api/company');
    // console.log(response.data)
    setCompanies(response.data)
    
    
  } catch (error) {
    console.log("error while fetching data ",error)
    
  }

 }

  return (
    <div className='companies-contanier'>
      <h1>Explore Companies</h1>
      <div className='company-list'>
        {companies.map((company)=>(
          <div key={company.id} className='company-card'>
            <h2>{company.Companyname}</h2>
            <h3>industry:{company.industry}</h3>
            <p>{company.description}</p>
            {/* <div className='ratings'>
              {Array.from({length:5},(_, index)=>(
                <span key={index} style={{color:"gold"}} className={index<company.rating ? 'filled':'empty'}>&#9733;</span>
              ))}
              </div> */}
              
              <button className='Explore'>Explore</button>
              <button className='Save'>save</button>
           
          </div>
        ))} 
       </div>

    </div>
      
  );
};

export default Companies;
