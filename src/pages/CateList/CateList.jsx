

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import TabTable from './components/TabTable';
import { fetchCateList, deleteCate, editCate } from '@/redux/actions/category';

import './CateList.scss';

class CateList extends Component {
  static displayName = 'CateList';

  componentDidMount() {
    this.props.fetchCateList();
  }


  render() {
    const { cateList, deleteCate, editCate } = this.props;
    const breadcrumb = [
      { text: '分类管理', link: '' },
      { text: '分类列表', link: '#/cate/list' },
    ];
    return (
      <div className="cate-list-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
        <TabTable
          dataSource={cateList}
          deleteItem={deleteCate}
          editItem={editCate}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCateList: () => {
    dispatch(fetchCateList());
  },
  deleteCate: (cate) => {
    dispatch(deleteCate(cate));
  },
  editCate: (cate) => {
    dispatch(editCate(cate));
  },
});

const mapStateToProps = (state) => ({
  cateList: state.category.cateList,
});

export default connect(mapStateToProps, mapDispatchToProps)(CateList);
