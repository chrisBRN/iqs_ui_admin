import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationBar() {

  let loggedIn: boolean = true;

  return (
    <nav>
      <ul className="navigation">
        <li>
          <Link to={getHomeEndPoint(loggedIn, "/dashboard")} className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li>
          <Link to="/candidate" className="nav-link">Candidate Login</Link>
        </li>
      </ul>
    </nav>
  )
}


function getHomeEndPoint(loggedIn: boolean, endpoint: string): string {
  return (
    loggedIn ? endpoint : "/login"
  );
}