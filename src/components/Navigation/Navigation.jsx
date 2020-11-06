import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/user-list">User List</NavLink>
      </li>
      <li>
        <NavLink to="/add-user">Register</NavLink>
      </li>
      <li>
        <NavLink to="/about-me">About me</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;