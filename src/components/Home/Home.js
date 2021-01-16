import React from 'react';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    const title = 'Home page';

    return (
        <div>
            <Navigation />
            Hello {title}
        </div>
    );
};

export default Home;
