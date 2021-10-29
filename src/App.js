import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import MyOrders from './Components/MyOrders/MyOrders'
import ManageOrder from './Components/ManageOrders/ManageOrder'
import NotFound from './Components/NotFound/NotFound'

import './App.css';
import Footer from './Components/Footer/Footer';
import AddService from './Components/Add Service/AddService';

function App() {
  return (
    <div className='App'>
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
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/manageOrders'>
            <ManageOrder></ManageOrder>
          </Route>
          <Route path='/myOrders'>
            <MyOrders></MyOrders>
          </Route>
          <Route path='/addService'>
           <AddService></AddService>
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
