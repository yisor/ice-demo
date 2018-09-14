

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import TabTable from './components/TabTable';
import { fetchUserList } from '@/redux/actions/user';

import './UserList.scss';

class UserList extends Component {
  static displayName = 'UserList';

  componentDidMount() {
    this.props.fetchUserList();
  }

  render() {
    const { userList } = this.props;
    const breadcrumb = [
      { text: '用户管理', link: '' },
      { text: '用户列表', link: '#/user/list' },
    ];
    return (
      <div className="user-list-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
        <TabTable dataSource={userList} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUserList: () => {
    dispatch(fetchUserList());
  },
});

const mapStateToProps = (state) => ({
  userList: state.user.userList,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);