import React from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course });
  }

  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Courses</h1>
        <h2>Add course</h2>
        <input
          type="text"
          onChange={this.onTitleChange.bind(this)}
          value={this.state.course.title} />
        <input
          type="submit"
          value="save"
          onClick={this.onClickSave.bind(this)} />
      </div>
    );
  }
}

export default CoursesPage;
