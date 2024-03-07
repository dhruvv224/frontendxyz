// Navbar1.js

import React from 'react';
import './Navbar1.css'

const Navbar1 = ({ domains, selectedDomain, onSelectDomain }) => {
  return (
    <div className='navbar1'>
      {domains.map((domain) => (
        <div id='domains'
          key={domain}
          className={domain === selectedDomain ? 'selected-domain' : 'domain'}
          onClick={() => onSelectDomain(domain)}
        >
          {domain}
        </div>
      ))}
    </div>
  );
};

export default Navbar1;
