import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import NavBar from '../components/UI/NavBar';
// import AboutView from '../components/AboutView/AboutView';
import ContactView from '../components/ContactView/ContactView';
import HomeView from '../components/HomeView/HomeView';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>

                    {/* <Route path="/about" component={ AboutView }/> */}
                    <Route path="/contact" component={ ContactView }/>
                    <Route path="/" component={HomeView} />

                    <Redirect to="/" />

                </Switch>

            </div>
        </Router>
    )
}

export default AppRouter;
