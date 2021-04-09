import React from 'react';
import './App.css';
import {useSelector} from 'react-redux'
import Login from './components/Login/Login';
import Home from './container/Home';
import {selectUser} from './features/userSlice'
function App() {
  const user = useSelector(selectUser)
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
