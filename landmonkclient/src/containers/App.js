import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import PropertiesList from '../containers/Properties/PopertiesList/PropertiesList';
// import NotFound from '../components/ErrorPages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="*" component={NotFound} /> */}
          <Route path="/Properties-List" component={PropertiesList} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
