import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeP from './pages/home';
import BlogP from './pages/blog';
import SaleP from './pages/sale';
import WomenP from './pages/women';
import MenP from './pages/men';
import AccountP from './pages/account';
import SignInP from './pages/signin';
import SignUpP from './pages/signup';
import ContactUsP from './pages/contactus';
import AboutUsP from './pages/aboutus';
import NewsP from './pages/news';
import  ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/etiquette-wear' component={HomeP} exact />
        <Route path='/news' component={NewsP} exact />
        <Route path='/blog' component={BlogP} exact />
        <Route path='/sale' component={SaleP} exact />
        <Route path='/women' component={WomenP} exact />
        <Route path='/men' component={MenP} exact />
        <Route path='/account' component={AccountP} exact />
        <Route path='/signin' component={SignInP} exact />
        <Route path='/signup' component={SignUpP} exact />
        <Route path='/contactus' component={ContactUsP} exact />
        <Route path='/aboutus' component={AboutUsP} exact />
      </Switch>
    </Router>
  );
}

export default App;
