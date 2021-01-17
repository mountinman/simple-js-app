import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/ContactUs';

import './normalize.css';
import './style.scss';

const App = () => {
    return (
        <div className="main-container">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contact-us" component={ContactUs} />
            </Switch>
        </div>
    );
};

export default App;
