import React from 'react';
import { NavLink } from 'react-router-dom';

const Toolbar = () => {
  return (
    <div className='Toolbar'>
      <header className='header'>
        <div>
          <h1>Static Page</h1>
        </div>
        <nav>
          <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/pages/about'}>About</NavLink></li>
            <li><NavLink to={'/pages/contacts'}>Contacts</NavLink></li>
            <li><NavLink to={'/pages/divisions'}>Divisions</NavLink></li>
            <li><NavLink to={'/pages/partners'}>Partners</NavLink></li>
            <li><NavLink to={'/pages/settings'}>Settings</NavLink></li>
            <li><NavLink to={'/pages/admin'}>Admin</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Toolbar;