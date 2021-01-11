import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';

import Index from './components/pages/index';

import Dates from "./components/pages/Dates";
import Signout from "./components/pages/Signout";

function App() {

  return (   <Suspense fallback="loading">
    <div className="App">
      <Router>
      <Navbar/>

        <Switch>
        <Route exact path='/' component={Index}/>

          <Route path='/dates' component={Dates}/>
          <Route path='/signout' component={Signout}/>

        </Switch>
      </Router>
      
    </div>
    </Suspense>
  );
}

export default App;
