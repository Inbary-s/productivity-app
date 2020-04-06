import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="logo" href="/">
        Surată
      </a>
      <ul className="right hide-on-med-and-down">
          <li><a href="#">My Goals</a></li>
          <li><a href="/calendar">My Plan</a></li>
          <li><a href="/pomodor">My Time</a></li>
          <li><a href="#">My Soul</a></li>
          <li><a href="#">My Food</a></li>
          <li><a href="#">Log Out</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
