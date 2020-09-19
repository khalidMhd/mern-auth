import React, { useEffect, createContext, useReducer, useContext } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, useHistory } from 'react-router-dom'

import adminSigninScreen from './screens/auth/adminSignin';
import signinScreen from './screens/auth/Singin';
import signupScreen from './screens/auth/signup';
import restPassword from './screens/auth/resetPassword';
import newPasswordScreen from './screens/auth/newPassword';
import Home from './screens/home';
import adminDashpoard from './screens/adminDashpoard';


export const UserContext = createContext()
 

function App() {
  return (
      <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/signin' component={signinScreen} />
      <Route path='/signup' component={signupScreen} />
      <Route exact path='/reset' component={restPassword} />
      <Route path='/reset/:token' component={newPasswordScreen} />
      <Route exact path='/adminSignin' component={adminSigninScreen} />
      <Route exact path='/admin' component={adminDashpoard} />
      </BrowserRouter>
  );
}
 
export default App;
