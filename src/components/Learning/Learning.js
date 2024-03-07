import React, { useState } from 'react';
import './Learning.css';
import { Link } from 'react-router-dom';

const Learning = ({ searchQuery }) => {
  const [learningResources] = useState([
    {
      id: 1,
      title: 'React Tutorial',
      provider: 'CodeAcademy',
      description: 'Learn React from scratch with interactive tutorials...',
    },
    {
      id: 2,
      title: 'JavaScript Basics',
      provider: 'FreeCodeCamp',
      description: 'Cover the fundamentals of JavaScript programming language...',
    },
    // Add more learning resources here...
  ]);

  const [filteredLearning, setFilteredLearning] = useState(learningResources);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const filtered = learningResources.filter((learn) =>
      learn.title.toLowerCase().includes(value)
    );
    setFilteredLearning(filtered);
    console.log(value)
  };

  return (
    <>
      <div className='searchcontainer'>
        <input
          type='text'
          className='searchbar'
          placeholder='Search....'
          onChange={handleSearch}
        />
      </div>
      <div className='learning-resources'>
        <h1>Learning Resources</h1>
        <div className='learning-cards'>
          {filteredLearning.map((resource) => (
            <div key={resource.id} className='learning-card'>
              <h2>{resource.title}</h2>
              <h3>Provider: {resource.provider}</h3>
              <p>{resource.description}</p>
              <div className='button-container'>
                <Link to='/Explore'>
                  <button className='explore-button'>Explore</button>
                </Link>
                <button className='save-button'>Save</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Learning;
