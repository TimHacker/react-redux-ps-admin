import React from 'react';
import {IndexLink, Link} from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="about" activeClassName="active">About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
