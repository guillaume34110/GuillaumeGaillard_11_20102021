import { BrowserRouter as Router, Switch, Route ,HashRouter} from 'react-router-dom'///hashRouter for gh-pages replace router
import Home from './dependances/pages/Home';
import React, { Component } from 'react';
import Apropos from './dependances/pages/APropos';
import Fichelogement from './dependances/pages/FicheLogement';
import Pagenotfound from './dependances/pages/PageNotFound';

class App extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
        data:null 
    }
    
} 
setData = (newData) =>{ //methode pour charger les donées de la nouvelle page
          this.setState({data : newData})
        }
  render() {
     return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path="/" component={() => (<Home setData={this.setData } />)}/>
              <Route exact path="/apropos" component={Apropos}/>
              <Route exact path="/fiche-logement/:id" component={() => (<Fichelogement  data={this.state.data }/>)}/>
              <Route Path="/" component={Pagenotfound}/>
            </Switch>
        </Router>
    </div>
  );
}}

export default App;
