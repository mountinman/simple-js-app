import React from 'react';
import Navigation from '../Navigation/Navigation';

import './style.scss';

const Home = () => {
    return (
        <>
            <Navigation />
            <div className="home-container" role="main">
                <article>
                    <h1>Hello Nature</h1>
                    <img src="./src/img/mountian.jpg" alt="nature" />
                    <p>
                        Some random text
                    </p>
                </article>
            </div>
        </>
    );
};

export default Home;
