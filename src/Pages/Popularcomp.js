import React, { useState } from 'react'
import './Popularcomp.css'

export const Popularcomp = () => {
    const[Popcomp,setPopComp]=useState([

        {
            id: 1,
            name: 'google',
            location: 'California',
            description: 'google is one of the biggest it Popcomp from all over the world',
            salary :'45 lpa to 60 lpa'
        },
        {
            id:2,
            name: 'microsoft',
            location: 'California',
            description: 'microsoft is one of the biggest it Popcomp from all over the world',
            salary :'55 lpa to 60 lpa'
        },
        {
            id:3,
            name: 'Accenture',
            location: 'California',
            description: 'google is one of the biggest it Popcomp from all over the world',
            salary :'45 lpa to 60 lpa'
        },
        {
            id: 4,
            name: 'Meta',
            location: 'California',
            description: 'google is one of the biggest it Popcomp from all over the world',
            salary :'45 lpa to 60 lpa'
        },
        {
            id: 4,
            name: 'Meta',
            location: 'California',
            description: 'google is one of the biggest it Popcomp from all over the world',
            salary :'45 lpa to 60 lpa'
        },
        {
            id: 4,
            name: 'Meta',
            location: 'California',
            description: 'google is one of the biggest it Popcomp from all over the world',
            salary :'45 lpa to 60 lpa'
        },
    ])
    return (
        <div>
          <h1>Explore Popcomp</h1>
          <div className="company-list">
            {Popcomp.map(company => (
              <div key={company.id} className="company-card">
                <h2>{company.name}</h2>
                <h3>Salary:{company.salary}</h3>
                <p>{company.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      );
    };
export default Popularcomp;
