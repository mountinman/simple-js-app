import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import ContactUs from './ContactUs';

const App = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact-us" component={ContactUs} />
        </Switch>

    );
};

export default App;
