import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Navigation = () => {
    const [isMobileNavOpen, setMobileNavState] = useState(false);

    const onMobileMenuClick = (e) => {
        if (e.key === 'Enter') {
            setMobileNavState(!isMobileNavOpen);
        }
    };

    return (
        <div className="navigation-container" role="navigation">
            <a className="logo" href="/" role="button">Logo</a>
            <nav tabIndex={0} onKeyPress={(e) => onMobileMenuClick(e)}>
                <div
                    className={`mobile-menu-icon hamburger-menu ${isMobileNavOpen ? 'is-active' : ''}`}
                    onClick={() => setMobileNavState(!isMobileNavOpen)}
                >
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                </div>
                <ul className={`main-navigation ${isMobileNavOpen ? 'is-open' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
