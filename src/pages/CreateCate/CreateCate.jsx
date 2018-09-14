

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import SimpleFluencyForm from './components/SimpleFluencyForm';
import { createCate } from '@/redux/actions/category';

import './CreateCate.scss';

class CreateCate extends Component {
  static displayName = 'CreateCate';

  render() {
    const breadcrumb = [
      { text: '分类管理', link: '' },
      { text: '添加分类', link: '#/cate/list' },
    ];
    return (
      <div className="create-cate-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
        <SimpleFluencyForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createCate: (cate) => {
    dispatch(createCate(cate));
  },
});

const mapStateToProps = (state) => ({
  cateList: state.category.cateList,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCate);
