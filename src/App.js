import React, { useEffect } from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import Login from './components/Login/Login';
import Home from './container/Home';
import {login, logout, selectUser} from './features/userSlice'
import { auth } from './firebase';
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
    <div className="app">
      {
        !user ? ( 
          <Login />
        ):(
          <Home />
        )
      }
      
    </div>
  );
}

export default App;
