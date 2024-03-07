import React from 'react';
import './Notice.css'
const Notice = ({ onClose }) => {
  return (
    <div className="notice-dialog">
      <div className="notice-content">
        <h2>Notice: Posting Guidelines
</h2>
<h4>Dear Users,
</h4>
        <p>
        Welcome to our professional social networking platform. We encourage meaningful discussions and content sharing related to technology, company culture, news, thoughts, and ideas.

Please refrain from posting job promotions in the feed section. Instead, we have a dedicated section for job postings where you can share career opportunities and job listings.

Let's keep our community focused on valuable discussions and connections.

Thank you for your cooperation!

-[Skilnet]
        </p>
        <button onClick={onClose}>Agree</button>
      </div>
    </div>
  );
};

export default Notice;
