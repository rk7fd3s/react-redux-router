import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import App from './containers/App';
import Login from './containers/Login';
import Home from './containers/Home';
import Counter from './containers/Counter';
import SignUp from './containers/SignUp';
import NotFound from './containers/NotFound';

const routes = (
  <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/counter" component={Counter}/>
        <Route component={NotFound} />
      </Switch>
  </div>
)

export default routes
