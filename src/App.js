import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Switches from './components/switches/Switches';

import NotFound from './components/notfound/NotFound';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/switches" component={Switches} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
