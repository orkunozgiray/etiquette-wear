import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/etiquette-wear' component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;