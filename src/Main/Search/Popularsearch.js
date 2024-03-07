import React from 'react';
import './Popular-search.css'

export const Popularsearch = () => {
  const searchterms = [
    'Digital marketing',
    'it companies',
    'Non-it jobs',
    'jobs',
    'Seo',
    'Backend developer',
    'front-end developer',
    'marketing',
    'sales jobs',
  ];

  const handleTermClick = (term) => {
    // Handle the click action for the term, e.g., navigate to a search page, perform a search, etc.
    console.log(`Clicked on: ${term}`);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="pill -label"> Popular search</h2>
        <div className="pill-container">
          {searchterms.map((term, index) => (
            <a href="#">
            <span className="search-term-pill" key={index} onClick={() => handleTermClick(term)}>
              {term}
            </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popularsearch;
