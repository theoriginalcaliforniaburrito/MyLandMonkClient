import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import CreateProperty from './CreateProperty/CreateProperty';
import UpdateTenant from './Tenants/UpdateTenant/UpdateTenant';
import NotFound from '../components/ErrorPages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createProperty" component={CreateProperty} />
          <Route path="/updateTenant" component={UpdateTenant} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
