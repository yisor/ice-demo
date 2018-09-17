import React, { Component } from 'react';
import UserTable from './components/UserTable';

export default class InvestorList extends Component {
  static displayName = 'InvestorList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="investor-list-page">
        <UserTable />
      </div>
    );
  }
}
