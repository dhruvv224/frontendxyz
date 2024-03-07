// DisplayCourses.js

import React, { useEffect, useState } from 'react';
import Navbar1 from './Navbar1';
import PythonCourses from './Courses/Python/Python.json';
import frontend from './Courses/Frontend/Frontend.json';
import backend from './Courses/Backend/Backend.json'
import sales from './Courses/Sales/Sales.json';
import digitalmarketing from './Courses/Digitalmarketing/Digitalmarketing.json';
import './DisplayCourses.css';
import ReactPlayer from 'react-player'
import Freecourses from './Freecourses.json'

// import basicpython from './Courses/Python/Images/basicpython.png';
// // import advancepython from './Courses/Python/Images/Advancepython.jpeg';
// import machinelearning from './Courses/Python/Images/machinelearning.png';
// import aipython from './Courses/Python/Images/ai.jpeg';
import webdev from './Courses/Webdevelopment/Webdev.json';

const DisplayCourses = () => {
  const [selectedDomain, setSelectedDomain] = useState('Python');
  const [courses, setCourses] = useState([]);
  const [freecourses, setfreeCourses] = useState([]);

  useEffect(() => {
    const loadFreeCourses = async () => {
      try {
        // Assuming the data structure of Freecourses.json matches the provided JSON format
        const response = await fetch('./Freecourses.json');
        const data = await response.json();
        setfreeCourses(data.courses);
        console.log(data)
      } catch (error) {
        console.error('Error loading free courses:', error);
      }
    };
  
    loadFreeCourses();
  }, []);

  // const pythoncourses = [basicpython, machinelearning, aipython];

  useEffect(() => {
    const loadCourses = async () => {
      try {
        let coursesData;
        switch (selectedDomain) {
          case 'Python':
            coursesData = PythonCourses.courses;
            break;
          case 'Web Development':
            coursesData = webdev.courses;
            break;
            case 'Front-End':
            coursesData=frontend.courses;
            break;
            case 'Back-End':
            coursesData=backend.courses;
            break;
            case 'Digital-Marketing':
              coursesData=digitalmarketing.courses;
            break;
            case 'Sales':
              coursesData=sales.courses;
            break
            
          default:
            coursesData = [];
        }

        console.log('coursesData:', coursesData); // Add this line for debugging

        setCourses(coursesData);
      } catch (error) {
        console.error('Error loading courses:', error);
      }
    };

    loadCourses();
  }, [selectedDomain]);

  return (
    <div>
      <div className='listing-courses-domain'>
        <Navbar1 domains={['Python', 'Web Development', 'Front-End', 'Back-End', 'Digital-Marketing', 'Sales']} selectedDomain={selectedDomain} onSelectDomain={setSelectedDomain} />
        
        {/* Display courses for the selected domain */}
        <h2>{`Courses for ${selectedDomain}`}</h2>
        <div>
          {courses.map((course, index) => (
            <div key={index} className='course-card'>
              <img src={course.image} alt='error'/>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>{`Price is ${course.price}`}</p>
              <button className='btn btn-primary' id='learning-button' style={{ justifyContent: 'center' }}>
                Start Learning
              </button>
            </div>
          ))}
          <h2>
            {/* Some of the free courses in Youtube must Learn */}
            {/* <ReactPlayer url='https://youtu.be/Ph3d_kwcNAY?si=zzZ5B4GkQnVYhMWz' /> */}
{/* 
            <div className='freecourses-card'>
        {freecourses.map((courses,index)=>(
          <div key={index} className='freecourse-card'>
            <h2>{courses.title}</h2>
            <ReactPlayer url={courses.url} controls={true} width="100%" height="auto" />


            </div>

        ))} */}

       {/* </div> */}
          </h2>
      <div className='free-courses'>
        <ReactPlayer url={"https://youtu.be/obhkN9jFb7g?si=_48A0C8QyfE6To0o"}  controls={true}/>
      </div>
          </div>
        </div>
      </div>
    
  );
};

export default DisplayCourses;
