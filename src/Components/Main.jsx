import React from 'react';
import Home from './Home'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import '../styles/styles.scss'
import { Route } from 'react-router-dom'


const Main = () => {
    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/about">
                <About />
            </Route>

            <Route exact path="/work">
                <Work />
            </Route>

            <Route exact path="/contact">
                <Contact />
            </Route>
        </div>
    );
}

export default Main;