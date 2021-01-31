import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import Sale from './pages/sale';
import Women from './pages/women';
import Men from './pages/men';
import Account from './pages/account';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import ContactUs from './pages/contactus';
import News from './pages/news';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/etiquette-wear' component={Home} exact />
        <Route path='/news' component={News} exact />
        <Route path='/blog' component={Blog} exact />
        <Route path='/sale' component={Sale} exact />
        <Route path='/women' component={Women} exact />
        <Route path='/men' component={Men} exact />
        <Route path='/account' component={Account} exact />
        <Route path='/signin' component={SignIn} exact />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/contactus' component={ContactUs} exact />
      </Switch>
    </Router>
  );
}

export default App;
