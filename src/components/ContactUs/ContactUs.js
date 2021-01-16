import React from 'react';
import Navigation from '../Navigation/Navigation';

import './style.scss';

const ContactUs = () => {
    const title = 'Contact page';

    return (
        <div className="contact-us-page-container">
            <Navigation />
            Hello {title}
        </div>
    );
};

export default ContactUs;
