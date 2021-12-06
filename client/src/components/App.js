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
import { LinkContainer } from "react-router-bootstrap";
import "../App.css";

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Test
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;