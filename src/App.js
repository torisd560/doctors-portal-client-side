import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Apoinments from './components/Apoinments/Apoinments';
import ContactUs from './components/Contact/ContactUs';
import Doctors from './components/Doctors/Doctors';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound'
import Header from './components/Shared/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/doctors'>
            <Doctors></Doctors>.
          </Route>
          <Route path='/contact'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='/apoinment'>
            <Apoinments></Apoinments>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
