

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import UserLogin from './components/UserLogin';
import { userLogin } from '../../redux/actions/user';

import './Login.scss';

class Login extends Component {

  render() {
    const { userLogin } = this.props;
    return (
      <div className="login-page">
        <UserLogin handleLogin={userLogin} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  userLogin,
};

// const mapDispatchToProps = (dispatch) => ({
//   handleLogin: (act) => {
//     dispatch(userLogin(act));
//   },
// });

export default connect(() => ({}), mapDispatchToProps)(Login);