import React, { Component } from 'react';
import ContentEditor from './components/ContentEditor';

export default class CreateProject extends Component {
  static displayName = 'CreateProject';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="create-project-page">
        <ContentEditor />
      </div>
    );
  }
}
