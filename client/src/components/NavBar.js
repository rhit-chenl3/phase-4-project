import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
        <NavLink to='/'>Login </NavLink>
        <NavLink to='/signup'>Signup </NavLink>
        
    </div>
  );
}

export default NavBar;