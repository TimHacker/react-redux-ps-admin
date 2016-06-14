import React from 'react';
import {Link} from 'react-router';

class CoursesPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Courses</h1>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default CoursesPage;
