import {Switch, Route} from 'react-router-dom'
import React from 'react'
import NavBar from './NavBar'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import HomePage from './HomePage'

function App() {

  return (
    
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/signup"> <SignUpPage/> </Route>
        <Route path="/home"> <HomePage/> </Route>
        <Route path="/"> <LoginPage/> </Route>
      </Switch>
    </div>

  );
}

export default App;