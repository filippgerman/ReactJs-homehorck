import { useState } from 'react';
import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom"

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import NotFound from './routes/NotFound';

import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import cn from 'classnames';
import style from './style.module.css';

const App = () => {
    const match = useRouteMatch('/');
    return (
        <Switch>
            <Route path = '/404' render={() => (
                <h1>404 Not Found</h1>
            )} />

            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact} />
                    <div className={cn(style.wrap, 
                        {[style.isHomePage]: match.isExact})}>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/home" component={HomePage} />
                            <Route path="/game" component={GamePage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route render = {() => (
                                <Redirect to="/404" />
                            )} />
                        </Switch>
                    </div>
                    <Footer />
                </>
            </Route>

        </Switch>
    )
};


export default App;

