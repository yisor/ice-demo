import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import CustomTable from './components/CustomTable';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';

const MOCK_DATA = [
  {
    name: '前端',
    shortName: 'frontEnd',
    articleNum: '2',
  }
];

export default class TabTable extends Component {
  static displayName = 'TabTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: MOCK_DATA,
    };
    this.columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: 150,
      },
      {
        title: '缩写名',
        dataIndex: 'shortName',
        key: 'shortName',
        width: 150,
      },
      {
        title: '文章数',
        width: 150,
        dataIndex: 'articleNum',
        key: 'articleNum',
      },
      {
        title: '操作',
        key: 'action',
        width: 150,
        render: (value, index, record) => {
          return (
            <span>
              <EditDialog
                index={index}
                record={record}
                getFormValues={this.getFormValues}
              />
              <DeleteBalloon
                handleRemove={() => this.handleRemove(value, index, record)}
              />
            </span>
          );
        },
      },
    ];
  }

  getFormValues = (dataIndex, values) => {
    const { dataSource } = this.state;
    dataSource[dataIndex] = values;
    this.setState({
      dataSource,
    });
  };

  handleRemove = (value, index) => {
    const { dataSource } = this.state;
    dataSource.splice(index, 1);
    this.setState({
      dataSource,
    });
  };

  render() {
    return (
      <div className="tab-table">
        <IceContainer>
          <CustomTable
            dataSource={this.props.dataSource}
            columns={this.columns}
            hasBorder={false}
          />
        </IceContainer>
      </div>
    );
  }
}
