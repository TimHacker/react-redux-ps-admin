import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
