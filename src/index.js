import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './upload'
import Notfound from './notflound'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">tiktok</Link>
        </li>
        <li>
          <Link to="/upload">Upload videos</Link>
        </li>
       
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/upload/" component={App2} />
        
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
