

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import SimpleFluencyForm from './components/SimpleFluencyForm';
import { createTag } from '@/redux/actions/tag';

import './CreateTag.scss';

class CreateTag extends Component {
  static displayName = 'CreateTag';

  render() {
    const breadcrumb = [
      { text: '标签管理', link: '' },
      { text: '添加标签', link: '#/tag/create' },
    ];
    return (
      <div className="create-tag-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
        <SimpleFluencyForm onSubmit={this.props.createTag} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createTag: (tag) => {
    dispatch(createTag(tag));
  }
});

const mapStateToProps = (state) => ({
  tagList: state.tag.tagList
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTag);