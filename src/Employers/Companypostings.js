import React, { useCallback, useState } from 'react';
// import './Companypostings.css';

export const Companypostings = () => {
    const [Companydetails, setCompanydetails] = useState({
        Companyname: '',
        industry: '', // Corrected typo here
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanydetails({ ...Companydetails, [name]: value });
    };

    const submitCompany = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await fetch('http://localhost:1111/api/company', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Companydetails),
            });
            if (!response.ok) {
                throw new Error('Failed to post Company');
            }
            alert('Company posted successfully');
        } catch (error) {
            console.log('Error while posting company', error);
            alert('There is a problem from the server');
        }
    };

    return (
        <div>
            <form onSubmit={submitCompany} className='Company Details'>
                Company Name:{' '}
                <input
                    type='text'
                    placeholder='Enter Company Name'
                    name='Companyname'
                    value={Companydetails.Companyname}
                    onChange={handleChange} // Added onChange event
                />
                <br />
                Industry:{' '}
                <input
                    type='text'
                    placeholder='Enter Industry'
                    name='industry'
                    value={Companydetails.industry} // Corrected property name
                    onChange={handleChange} // Added onChange event
                />
                <br />
                Description:{' '}
                <textarea
                    placeholder='Enter Description'
                    name='description' // Corrected property name
                    value={Companydetails.description} // Corrected property name
                    onChange={handleChange} // Added onChange event
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Companypostings;
