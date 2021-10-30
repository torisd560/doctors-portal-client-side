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
import Footer from './Components/Footer/Footer';
import AddService from './Components/Add Service/AddService';
import Booking from './Components/Booking/Booking';
import './App.css';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/TourService/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
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
      </AuthProvider>
    </div>
  );
}

export default App;
