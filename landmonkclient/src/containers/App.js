import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import NotFound from '../components/ErrorPages/NotFound/NotFound';
import PropertyDetails from './Property/PropertyDetails/PropertyDetails';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/propertyDetails/:id" component={PropertyDetails} /> 
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
