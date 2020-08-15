import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './index.css';
import Home from './Pages/Landing';
import Tools from './Pages/Tools';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/tools/martingale"/>
      <Route path="/" component={Home} exact/>
      <Route path="/tools" component={Tools} exact/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)