import React from 'react';
import './App.css';
import Home from './pages/Home';
import Home from './pages/Rooms';
import Home from './pages/SingleRoom';
import Home from './pages/Error';
import Navbar from './components/Navbar';

import {Route, Switch} from react-router-dom;

 
function App() {
  return (
    <div>
    <Navbar/>  
    <Switch>  
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms/" component={Rooms}/>  
      <Route exact path="/rooms/:slug" component={SingleRoom}/>  
      <Route component={Error}/>    
    </Switch>
    </div>
  );
}

export default App;
