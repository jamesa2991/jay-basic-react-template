import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="menu-sidebar">
      <span> Table of Contents: </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hooks/">Hooks</Link>
        </li>
      </ul>
    </div>
  );
}
