import React, { useState } from 'react';
import './Home.css'; // Import your CSS file
import demo from './demo.jpg'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchTerm);
    // You can add further logic like API calls or other actions based on the search term
  };

  return (
    <>
    <div className='container'>
    <h1>this is home page</h1>
    <div className='image'>
      <img src={demo}></img>

    </div>
    </div>
    </>
  );
};

export default Home;
