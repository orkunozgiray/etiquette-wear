import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/etiquette-wear' component={Home} exact />
        <Route path='/blog' component={Blog} exact />
      </Switch>
    </Router>
  );
}

export default App;
