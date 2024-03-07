import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Learningmain.css';
import img1 from './Assets/heroimg.png';
import img2 from './Assets/img2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import DisplayCourses from './DisplayCourses';
// import CoursesData from


const Learningmain = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [img1, img2];

  return (
    <div>
    <div className="carousel-container">
      
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>

    </div>
    <div className='Companies'>
      <h2 className='heading-title'>
        Trusted By 1000+ Companies All Over India 
      </h2>   
      <p style={{fontFamily:'timesnewroman',fontSize:"20px"}}><strong>Building bridge between Learning and Jobs</strong></p>
       </div>
       <div className='learn-search'>
        <input type='text' placeholder='What Do You Want To Learn..' className='Learning-searchabar' onFocus={''} >

        </input>
        <button type='submit' className='learning-search-button' onClick={''}><FontAwesomeIcon className='icon' icon={faSearch}   style={{color:'white'}}/></button>

       </div>
       <div className='Courses'>
        <h3  className='Courses-title'>Discover, Learn, Succeed: Dive into Our Amazing Courses</h3>
            
            <DisplayCourses/>
        

       </div>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={className} style={{color:'black', backgroundcolor:'black' }} onClick={onClick}><i className="fa fa-arrow-right"></i></div>;
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}><i className="fa fa-arrow-left"></i></div>;
};

export default Learningmain;
