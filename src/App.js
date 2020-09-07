import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrimarySearchAppBar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Details from './Components/PostDetails/Details';


function App() {
  
  return (
    <div>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Details/:postId">
            <Details></Details>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
