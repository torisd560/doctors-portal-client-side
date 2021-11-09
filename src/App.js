import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home/Home'
import Apointments from '../src/Pages/Apointments/Apoinments/Apointments'
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from '../src/Context/AuthProvider/AuthProvider'
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from '../src/Pages/Dashboard/Dashboard'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/apointment'>
              <Apointments></Apointments>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
