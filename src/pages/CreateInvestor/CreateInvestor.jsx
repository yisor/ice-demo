import React, { Component } from 'react';
import SettingsForm from './components/SettingsForm';

export default class CreateInvestor extends Component {
  static displayName = 'CreateInvestor';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="investor-create-page">
        <SettingsForm />
      </div>
    );
  }
}
