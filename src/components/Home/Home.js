import React from 'react';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    const title = 'Home page';

    return (
        <div className="home-page-container">
            <Navigation />
            Hello {title}
        </div>
    );
};

export default Home;
