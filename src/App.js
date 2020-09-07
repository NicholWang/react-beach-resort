import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './page/Home'
import Rooms from './page/Rooms'
import SingleRoom from './page/SingleRoom'
import Error from './page/Error'
import NavBar from './Components/NavBar'

function App() {
  return (
    <>
     <NavBar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms/" component={Rooms}/>
      <Route path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
