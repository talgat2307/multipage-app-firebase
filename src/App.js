import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import Home from './containers/Home/Home';
import About from './containers/Pages/About/About';
import Contacts from './containers/Pages/Contacts/Contacts';
import Divisions from './containers/Pages/Divisions/Divisions';
import Admin from './containers/Admin/Admin';
import Partners from './containers/Pages/Partners/Partners';
import Settings from './containers/Pages/Settings/Settings';

const App = () => (
  <div className="App">
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pages/about' component={About}/>
        <Route path='/pages/contacts' component={Contacts}/>
        <Route path='/pages/divisions' component={Divisions}/>
        <Route path='/pages/partners' component={Partners} />
        <Route path='/pages/settings' component={Settings} />
        <Route path='/pages/admin' component={Admin} />
      </Switch>
    </Layout>
  </div>
);

export default App;
