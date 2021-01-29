import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import Sale from './pages/sale';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/etiquette-wear' component={Home} exact />
        <Route path='/blog' component={Blog} exact />
        <Route path='/sale' component={Sale} exact />
      </Switch>
    </Router>
  );
}

export default App;
