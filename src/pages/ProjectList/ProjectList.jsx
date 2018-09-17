import React, { Component } from 'react';
import TabFilterTable from './components/TabFilterTable';

export default class ProjectList extends Component {
  static displayName = 'ProjectList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="project-list-page">
        <TabFilterTable />
      </div>
    );
  }
}
