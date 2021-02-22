import React from 'react';
import './App.css';
import Main from './Main';
import Art from './Art';
import About from "./About";
import Footer from './Footer';
import CakeVR from './projects/CakeVR.js';
import Ultimaker from './projects/Ultimaker.js';
//first step
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
            <div>
                
                <Router>
                    <Route path="/" exact component={Main} />
                    <Route path="/art" component={Art} />
                    <Route path="/about" component={About} />
                    <Route path="/cakevr" component={CakeVR} />
                    <Route path="/ultimaker" component={Ultimaker} />
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
