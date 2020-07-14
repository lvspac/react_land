import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/Products';
import ProductItem from './pages/ProductItem';
import ChartPage from './pages/Chart';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/products" component={ProductsPage} exact />
          <Route path="/product/:name" component={ProductItem} exact />
          <Route path="/chart" component={ChartPage} exact />
          <Route component={NotFoundPage} />

        </Switch>

      </div>

    </Router>
  );
}

export default App;

// npx create-react-app appname
// npm install --save react-router-dom
