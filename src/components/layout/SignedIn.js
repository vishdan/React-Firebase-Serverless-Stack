import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <ul className="right">
      <li> <NavLink to="/createProject">New Project</NavLink></li>
      <li> <NavLink to="/">Sign Out</NavLink></li>
      <li> <NavLink to="/createProject" className='btn btn-floating pink lighten-1 '>New Project</NavLink></li>
    </ul>
  );
};
