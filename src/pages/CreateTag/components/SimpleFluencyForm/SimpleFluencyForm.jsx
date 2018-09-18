import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Input, Button, Feedback, Select } from '@icedesign/base';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';
import './SimpleFluencyForm.scss';

const { Row, Col } = Grid;
const Toast = Feedback.toast;

export default class SimpleFluencyForm extends Component {
  static displayName = 'SimpleFluencyForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        name: '',
        type: '',
      },
    };
  }

  formChange = (newValue) => {
    this.setState({
      formValue: newValue,
    });
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    this.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }

      console.log('values:', values);
      Toast.success('添加成功');
    });
  };

  render() {
    return (
      <div className="simple-fluency-form" style={styles.simpleFluencyForm}>
        <IceContainer style={styles.form}>
          <FormBinderWrapper
            ref={(form) => {
              this.form = form;
            }}
            value={this.state.formValue}
            onChange={this.formChange}
          >
            <div style={styles.formContent}>
              <h2 style={styles.formTitle}>添加标签</h2>
              <Row style={styles.formRow}>
                <Col xxs="6" s="4" l="3" style={styles.formLabel}>
                  <span>标签名称：</span>
                </Col>
                <Col xxs="16" s="10" l="6">
                  <FormBinder required message="必填项">
                    <Input name="name" />
                  </FormBinder>
                  <div style={styles.formErrorWrapper}>
                    <FormError name="name" />
                  </div>
                </Col>
              </Row>
              <Row style={styles.formRow}>
                <Col xxs="6" s="4" l="3" style={styles.formLabel}>
                  <span>标签类型：</span>
                </Col>
                <Col xxs="16" s="10" l="6">
                  <FormBinder name="type" required message="必填项">
                    <Select
                      style={{ width: '100%', }}
                      placeholder="请选择标签类型"
                      dataSource={[
                        { label: '系统', value: 0 },
                        { label: '系统自定义', value: 1 },
                        { label: '用户自定义', value: 2 },
                      ]}
                    />
                  </FormBinder>
                  <div style={styles.formErrorWrapper}>
                    <FormError name="type" />
                  </div>
                </Col>
              </Row>
              <Row style={styles.formRow}>
                <Col xxs="6" s="4" l="3" style={styles.formLabel}>
                  <span>标识类型：</span>
                </Col>
                <Col xxs="16" s="10" l="6">
                  <FormBinder name="classType" required message="必填项">
                    <Select
                      style={{ width: '100%', }}
                      placeholder="请选择标识类型"
                      dataSource={[
                        { label: '项目', value: 0 },
                        { label: '投资人', value: 1 },
                        { label: '投资机构', value: 2 },
                      ]}
                    />
                  </FormBinder>
                  <div style={styles.formErrorWrapper}>
                    <FormError name="classType" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col offset="3">
                  <Button
                    onClick={this.handleSubmit}
                    type="primary"
                    size="large"
                  >
                    确认
                  </Button>
                </Col>
              </Row>
            </div>
          </FormBinderWrapper>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
  formLabel: {
    textAlign: 'right',
    lineHeight: '1.7rem',
    paddingRight: '10px',
  },
  formRow: {
    marginBottom: '20px',
  },
  formErrorWrapper: {
    marginTop: '5px',
  },
  simpleFluencyForm: {},
};
