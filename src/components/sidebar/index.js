import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="menu-sidebar">
      <h2> Menu: </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hooks/">Hooks</Link>
        </li>
        <li>
          <Link to="/async/">Async</Link>
        </li>
      </ul>
    </div>
  );
}
