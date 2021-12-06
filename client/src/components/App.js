// import {Switch, Route} from 'react-router-dom'
// import React from 'react'
// import NavBar from './NavBar'
// import LoginPage from './LoginPage'
// import SignUpPage from './SignUpPage'
// import HomePage from './HomePage'
// import LoginForm from './LoginForm'

// function App() {

//   return (
    
//     <div className="App">
//       <NavBar />
//       <Switch>
//         <Route path="/signup"> <SignUpPage/> </Route>
//         <Route path="/home"> <HomePage/> </Route>
//         <Route path="/"> <LoginForm/> </Route>
//       </Switch>
//     </div>

//   );
// }

// export default App;


import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Routes from './NavBar'
import Nav from "react-bootstrap/Nav";
import "../App.css";

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          TEST
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;