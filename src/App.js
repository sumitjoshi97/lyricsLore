import React, {Component, Fragment} from 'react';
import Navbar from "./components/Layout/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Index from './components/Index/Index'
import Lyrics from './components/Tracks/Lyrics/Lyrics'
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route path='/lyrics/track/:id' component={Lyrics}/>
              <Route path='/' component={Index}/> 
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;