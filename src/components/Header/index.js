import React from 'react';
import Navigation from '../Navigation';

function Header() {
  return (
    <header className="navbar navbar-expand-sm text-light">
      <h1 className="navbar-brand">Chris Southwick</h1>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
