import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation-container">
            <ul className="main-navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
