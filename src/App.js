import React from 'react';
import {hot} from 'react-hot-loader';
import './App.css';
import Homecopy from './components/Homecopy';
import Profile from './components/Profile';
import Detail from './components/Detail';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => (
  
  <div className="App">
    <Switch>
    <Route path="/" exact component={Home}></Route> 
    <Route path="/profile" exact component={Profile}></Route> 
    <Route path="/detail" exact component={Detail}></Route> 
    </Switch>
    {/* <Home></Home> */}
  </div>
 
)

export default hot(module)(App);