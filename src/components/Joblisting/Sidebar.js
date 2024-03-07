// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Import your sidebar-specific CSS file

const Sidebar = ({onlocationchange}) => {
const [selctedlocations,setselctedlocations]=useState([]);
const[selectdate,setselectdate]=useState([]);
const[selectedexp,setselectedexp]=useState([]);
const[selectedjobmode,setseletedjobmode]=useState([]);
const[selectedjobtype,setselectedtype]=useState([]);


const handleLocationChange = (event) => {
  const location = event.target.value;
  setselctedlocations((prevSelectedLocations) => {
    if (prevSelectedLocations.includes(location)) {
      console.log('Deselected Location:', location);
      return prevSelectedLocations.filter((loc) => loc !== location);
    } else {
      console.log('Selected Location:', location);
      return [...prevSelectedLocations, location];
    }
  });
  onlocationchange(selctedlocations);
};




  return (
    <div className='sidebar-container'>
      <h5>Filters</h5>

      {/* Locations */}
      <div className='distance'>
        <div className='headings'>
          <h4>Locations</h4>
        </div>
        <div className='filter-option'>
        <label className='from-check-label'>
            All
            <input type='checkbox' onChange={handleLocationChange} value='All'  checked={selctedlocations.includes('All')}/>
          </label>
          <br />
          <label className='from-check-label'>
            Ahemdabad
            <input type='checkbox' onChange={handleLocationChange} value='Ahemedabad' />
          </label>
          <br />
          <label>
            Mumbai
            <input type='checkbox' onChange={handleLocationChange} value='Mumbai' />
          </label>
          <br />
          <label>
            Delhi
            <input type='checkbox'onChange={handleLocationChange} value='Delhi' id='distance4' />
          </label>
          <br />
          <label>
            Surat
            <input type='checkbox' id='distance5'onChange={handleLocationChange} value='Surat' />
          </label>
          <br />
        </div>
      </div>

      {/* Date */}
      <div className='Date'>
        <div className='headings'>
          <h4>Date posted</h4>
        </div>
        <div className='filter-option'>
          <label>1 days</label>
          <input type='checkbox' id='date1' /> <br />
          <label>2 days</label>
          <input type='checkbox' id='date2' /> <br />
          <label>3 days</label>
          <input type='checkbox' id='date3' /> <br />
          <label>1 week</label>
          <input type='checkbox' id='date4' /><br />
          <label>Any</label>
          <input type='checkbox' id='date5' /><br />
        </div>
      </div>

      {/* Experience */}
      <div className='Work-exp'>
        <div className='headings'>
          <h4>Experience</h4>
        </div>
        <div className='filter-option'>
          <label>1+ Year</label>
          <input type='checkbox' id='exp1' /> <br />
          <label>2+ Year</label>
          <input type='checkbox' id='exp2' /> <br />
          <label>3+ Year</label>
          <input type='checkbox' id='exp3' /> <br />
          <label>5+ Year</label>
          <input type='checkbox' id='exp4' /><br />
          <label>Any</label>
          <input type='checkbox' id='exp5' /><br />
          <label>Freher</label>
          <input type='checkbox' id='exp6' /><br />
        </div>
      </div>

      {/* Job type */}
      <div className='Job type'>
        <div className='headings'>
          <h4>Job type</h4>
        </div>
        <div className='filter-option'>
          <label>Any</label>
          <input type='checkbox' id='type1' /> <br />
          <label>Full-Time</label>
          <input type='checkbox' id='type2' /> <br />
          <label>Part-Time</label>
          <input type='checkbox' id='type3' /> <br />
          <label>Internships</label>
          <input type='checkbox' id='type4' /><br />
        </div>
      </div>

      {/* Job mode */}
      <div className='Job mode'>
        <div className='headings'>
          <h4>Job mode</h4>
        </div>
        <div className='filter-option'>
          <label>Any</label>
          <input type='checkbox' id='mode1' /> <br />
          <label>Hybrid</label>
          <input type='checkbox' id='mode2' /> <br />
          <label>On-Site</label>
          <input type='checkbox' id='mode3' /> <br />
          <label>Work-From-Home</label>
          <input type='checkbox' id='mode4' /><br />
        </div>
      </div>
    </div>
  );
  }

export default Sidebar;
