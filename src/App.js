import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import JobHistory from './components/JobHistory';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/" >Home</Link>
            <Link to="/jobhistory" >Job History</Link>
            <Link to="/projects" >Projects</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/jobhistory" component={JobHistory} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
