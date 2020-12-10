import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Login from './Containers/Login';
import Main from './Containers/Main';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import { Provider } from 'react-redux'
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/admin" component={AdminPanel}/>
          <Route exact path="/PageNotFound" component={PageNotFound}/>
          <Redirect from="*" to="/PageNotFound"/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
