import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import Home from './components/Home';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
