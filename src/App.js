import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Sizes from './components/sizes/Sizes';
import Switches from './components/switches/Switches';
import Modifications from './components/mods/Modifications';

import NotFound from './components/notfound/NotFound';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar /> 
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sizes" component={Sizes} />
        <Route path="/switches" component={Switches} />
        <Route path="/mods" component={Modifications} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
