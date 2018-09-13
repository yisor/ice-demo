

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import UserLogin from './components/UserLogin';
import { userLogin } from '../../redux/actions/user';

import './Login.scss';

class Login extends Component {

  render() {
    const { handleLogin } = this.props;
    return (
      <div className="login-page">
        <div onClick={handleLogin}>测试</div>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   userLogin,
// };

const mapDispatchToProps = (dispatch) => ({
  handleLogin: () => {
    dispatch(push('/hello'));
  },
});

export default connect(() => ({}), mapDispatchToProps)(Login);