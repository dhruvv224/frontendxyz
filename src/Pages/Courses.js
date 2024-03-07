// Courses.js

import React from 'react';

function Courses() {
  return (
    <div>
      <h1>Courses</h1>
      <p>Welcome to our Courses page!</p>
      {/* Add your course content here */}
      <div className="course-list">
        {/* Example course cards */}
        <div className="course-card">
          <h2>Course Title 1</h2>
          <p>Description of Course 1</p>
          {/* Other details */}
        </div>
        <div className="course-card">
          <h2>Course Title 2</h2>
          <p>Description of Course 2</p>
          {/* Other details */}
        </div>
        {/* Add more courses as needed */}
      </div>
    </div>
  );
}

export default Courses;
