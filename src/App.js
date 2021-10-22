import { BrowserRouter as Router, Switch, Route ,HashRouter} from 'react-router-dom'///hashRouter for gh-pages replace router
import Home from './dependances/pages/Home';
import React, { Component } from 'react';
import Apropos from './dependances/pages/APropos';
import Fichelogement from './dependances/pages/FicheLogement';
import Pagenotfound from './dependances/pages/PageNotFound';

class App extends Component{
  render() {
     return (
    <div className="App">
      <Router>
            <Switch>
              <Route exactPath="/" component={Home}/>
              <Route Path="/apropos" component={Apropos}/>
              <Route Path="/fiche-logement" component={Fichelogement}/>
              <Route Path="/" component={Pagenotfound}/>
            </Switch>
        </Router>
    </div>
  );
}}

export default App;
