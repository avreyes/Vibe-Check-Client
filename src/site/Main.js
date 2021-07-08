import React from 'react';
// import Sitebar from './Sitebar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => {
    return(
        <React.Fragment>
            <Router>
                {/* <Sitebar /> */}
                <Home />
            </Router>
        </React.Fragment>
    )
}
export default Main;