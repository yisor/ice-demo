import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import TabTable from './components/TabTable';
import { fetchPostList, deletePost, editPost } from '@/redux/actions/post';

import './PostList.scss';

class PostList extends Component {
  static displayName = 'PostList';

  componentDidMount() {
    this.props.fetchPostList();
  }

  render() {
    const breadcrumb = [
      { text: '文章管理', link: '' },
      { text: '文章列表', link: '#/post/list' },
    ];
    return (
      <div className="post-list-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
        <TabTable dataSource={this.props.postList} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostList: () => {
    dispatch(fetchPostList());
  },
  deletePost: (post) => {
    dispatch(deletePost(post));
  },
  editPost: (post) => {
    dispatch(editPost(post));
  },
});

const mapStateToProps = (state) => ({
  postList: state.post.postList,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
