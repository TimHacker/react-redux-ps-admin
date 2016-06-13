import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>About Pluralsight Administration site</h1>
        <p>Why did we use React, Redux, React Router, ES6 and a variety of other helpful libraries</p>
        <Link to="home" className="btn btn-primary btn-lg">Back to homepage</Link>
      </div>
    );
  }
}

export default AboutPage;
