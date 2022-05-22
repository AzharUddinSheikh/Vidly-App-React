import React from 'react';
import './App.css';
import Movies from './components/movies';
import NavBar from './components/common/navbar';
import { Route, Redirect, Switch } from "react-router-dom";
import Rental from './components/rental';
import Customer from './components/customer';
import NotFound from './components/common/notfound';



function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
      <Switch>
          <Route path="/movies" component={Movies}/>
          <Route path="/rental" component={Rental}/>
          <Route path="/customer" component={Customer}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect to="/movies" from="/" exact/>
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
