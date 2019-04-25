import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// const AsyncComponentList = asyncComponent(() => {
//   return import('./Owner/OwnerList/OwnerList');
// });

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            {/* <Route exact path="/" component={TopNavLogo} /> */}

            <Route exact path="/" component={Home} />
            {/* <Route path="/owner-list" component={AsyncComponentList} /> */}
            {/* <Route path="*" component={notFound} /> */}
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
