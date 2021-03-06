import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="header">
    <div className="container">
      <Link to="/" className="header-logo"></Link>
      <Link to="/new" className="header-new-ballot">New ballot</Link>
      <Link to="/settings" className="header-settings">Settings</Link>
    </div>
  </header>
);
