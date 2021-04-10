import React, { useEffect, useState } from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import Login from './components/Login/Login';
import Home from './container/Home';
import {login, logout, selectUser} from './features/userSlice'
import { auth } from './firebase';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Register from './components/Register/Register';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AuthProvider from './components/ProtectedRoute/Auth';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=> {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          profileUrl: userAuth.photoURL,
          displayName: userAuth.displayName
        }))
     
      }else {
        dispatch(logout())
      }
    })
  },[])
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute path="/home" component={Home} />
            <ProtectedRoute path="/" component={Home}  />
          </Switch>
      </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
