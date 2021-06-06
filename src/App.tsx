import React from 'react';
import scss from './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Switch } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Courses';

const App: React.FC = () => {
    return (
        <div className={scss.app}>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/courses">
                <Courses />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>

            </Switch>
            <Footer />
        </ div>
    )
}

export default App;