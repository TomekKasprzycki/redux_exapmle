import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import AdminPanel from './Components/AdminPanel/AdminPanel';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/main" component={Main}/>
        <Route exact path="/admin" component={AdminPanel}/>
        <Route exact path="/PageNotFound" component={PageNotFound}/>
        <Redirect from="*" to="/PageNotFound"/>
      </Switch>
    </Router>
  );
}

export default App;
