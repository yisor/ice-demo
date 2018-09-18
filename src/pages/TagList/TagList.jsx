

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import TabTable from './components/TabTable';
import { fetchTagList, deleteTag, editTag } from '@/redux/actions/tag';

import './TagList.scss';

class TagList extends Component {
  static displayName = 'TagList';

  componentDidMount() {
    this.props.fetchTagList();
  }

  render() {
    const { tagList, deleteTag, editTag } = this.props;
    const breadcrumb = [
      { text: '标签管理', link: '' },
      { text: '标签列表', link: '#/tag/list' },
    ];
    return (
      <div className="tag-list-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
        <TabTable
          dataSource={tagList}
          deleteItem={deleteTag}
          editItem={editTag} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTagList: () => {
    dispatch(fetchTagList());
  },
  deleteTag: (tag) => {
    dispatch(deleteTag(tag));
  },
  editTag: (tag) => {
    dispatch(editTag(tag));
  },
});

const mapStateToProps = (state) => ({
  tagList: state.tag.tagList,
});

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
