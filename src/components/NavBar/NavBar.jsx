import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="primary-nav">
      <NavLink to="pokemon">Pokemon</NavLink>
      <NavLink to="notes">Notes</NavLink>
      <NavLink to="weather">Weather</NavLink>
      <NavLink to="crypto">Cryptocurrency Details</NavLink>
      <NavLink to="pwdgen">Password Generator</NavLink>
      <NavLink to="todo">ToDo</NavLink>
      <NavLink to="quiz">Quiz</NavLink>
      <NavLink to="screenshot">ScreenShot</NavLink>
    </nav>
  );
};

export default NavBar;
