import React, { useState } from 'react';
import './Empmain.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

export const Empmain = () => {
    const [Jobspostings, setJobpostings] = useState(true);
    const [companypost, setCompanypost] = useState(true);
    const [Promotejob, setPromotejob] = useState(false);
    const [Promotecompany, setPromotecompany] = useState(false);
    const [interview, setInterview] = useState(false);
    const [sortpost, setSortpost] = useState(false);

    return (
        <div className='Employers-container'>
            <div className='headingline'>
                <h1 className='Hero-heading'>
                    "Simplify Your Hiring Journey:   <span>Post Jobs</span>,
                    <br/>Streamline <span>Interviews,</span> and Deliver Swift Decisions!"
                </h1>
                <p className='Paragraph'>
                    "Skillventure: Redefining Hiring Excellence
                    Effortless Hiring, Candidate Insights, Seamless Interview Scheduling, Simplified Candidate Filtering, All in One Platform!"
                </p>
            </div>
            <div className='feature-highlights'>
                <h1>Hire Easily With Skillventure</h1>
                <p className='Paragraph2'>
                    "Hire Easy With Skillventure" encapsulates our commitment to simplifying the hiring process for employers.
                    Our platform offers a user-friendly interface and a suite of powerful tools designed to streamline every step of recruitment.
                    From posting job listings to scheduling interviews and assessing candidates, Skillventure provides an intuitive solution that saves time,
                    reduces administrative burden, and helps employers find the right talent efficiently
                </p>
                <div className='buttons'>
                  <a href='/Employersregister'>
                    <button className='employers-register'>Register</button>
                    </a>
                    <a href='/Emplogin'>
                    <button className='employers-login'>Login</button>
                    </a>
                </div>
            </div>
            <div className='perks'>
                <h1>This is perks</h1>
                <div className='perks-container'>
                    <div className='perk'>
                        <h2>Elite Postings</h2>
                        <div className='features'>
                            {Jobspostings ? <FaCheck className='tick-icon' /> : <FaTimes className='cross-icon' />}
                            <label>Jobs postings per month 5</label>
                        </div>
                        <div className='features'>
                             <FaCheck className='tick-icon' /> 
                            <label>Compamy Postings</label>
                        </div>
                        <div className='features'>
                         <FaTimes className='cross-icon'/>
                            <label>Promote Jobs Postings</label>
                        </div>
                        <div className='features'>
                         <FaTimes className='cross-icon'/>
                            <label>Increase Reach of company postings</label>
                        </div>
                        <div className='features'>
                         <FaTimes className='cross-icon'/>
                            <label>Interview Scheduling</label>
                        </div>
                        <button className='perk-button'>Try Now</button>
                    </div>
                    <div className='perk'>
                        <h2>Exclusive Postings</h2>
                        <div className='features'>
                            {Jobspostings ? <FaCheck className='tick-icon' /> : <FaTimes className='cross-icon' />}
                            <label>Jobs postings per month 15</label>
                        </div>
                        <div className='features'>
                             <FaCheck className='tick-icon' /> 
                            <label>Compamy Postings</label>
                        </div>
                        <div className='features'>
                         <FaTimes className='cross-icon'/>
                            <label>Promote Jobs Postings</label>
                        </div>
                        <div className='features'>
                         <FaTimes className='cross-icon'/>
                            <label>Increase Reach of company postings</label>
                        </div>
                        <div className='features'>
                         <FaCheck className='Tick-icon'/>
                            <label>Interview Scheduling</label>
                        </div>
                        <button className='perk-button'>Try Now</button>

                    </div>
                    <div className='perk'>
                        <h2>Advanced Postings</h2>
                        <div className='features'>
                            {Jobspostings ? <FaCheck className='tick-icon' /> : <FaTimes className='cross-icon' />}
                            <label>Jobs postings per month 5</label>
                        </div>
                        <div className='features'>
                             <FaCheck className='tick-icon' /> 
                            <label>Compamy Postings</label>
                        </div>
                        <div className='features'>
                         <FaCheck className='tick-icon'/>
                            <label>Promote Jobs Postings</label>
                        </div>
                        <div className='features'>
                         <FaCheck className='tick-icon'/>
                            <label>Increase Reach of company postings</label>
                        </div>
                        <div className='features'>
                         <FaCheck className='tick-icon'/>
                            <label>Interview Scheduling</label>
                        </div>
                        <a href='/Employersregister'> 
                        <button className='perk-button'>Try Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
