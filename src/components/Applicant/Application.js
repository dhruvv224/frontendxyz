import React, { useState } from 'react';
import axios from 'axios';
import './Application.css';
import { useNavigate } from 'react-router-dom';

const Application = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
   
    coverLetter: '',
    references: '',
  });
const navigate =useNavigate()
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7010/api/application', formData);
      console.log('Form submitted:', response.data);
      alert('Your data has been successfully sent');
      navigate('/Feeds')
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Application Form</legend>
          {/* Form fields */}
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className=
              "form-control"
              id="phone"
              name="phone"
              placeholder="Format: 123-456-7890"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          {/* Position Applying For */}
          <div className="form-group">
            <label htmlFor="position">Position Applying For</label>
            <input
              type="text"
              className="form-control"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
          {/* Resume/CV */}
          <div className="form-group">
            <label htmlFor="resume">Resume/CV</label>
            <input
              type="file"
              className="form-control-file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
          </div>
          {/* Cover Letter */}
          <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter</label>
            <textarea
              className="form-control"
              id="coverLetter"
              name="coverLetter"
              rows="4"
              value={formData.coverLetter}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {/* References */}
          <div className="form-group">
            <label htmlFor="references">References</label>
            <textarea
              className="form-control"
              id="references"
              name="references"
              rows="4"
              value={formData.references}
              onChange={handleChange}
            ></textarea>
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Application;
