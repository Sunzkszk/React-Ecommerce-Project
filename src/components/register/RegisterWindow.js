import React,{Component} from 'react';
import {Form,Input,Select,Button} from 'antd';
import '../../assets/css/registerwindow.scss';
const { Option } = Select;

class RegisterWindow extends Component{
   state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          //console.log('Received values of form: ', values);
          this.props.history.push('/login');
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

    render() {
      const { getFieldDecorator } = this.props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>,
      );
      return (
         <div className="registerwindow">
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
               <h4>Email</h4>
               <Form.Item>
                  {getFieldDecorator('email', {
                     rules: [
                        {
                           type: 'email',
                           message: 'The input is not valid E-mail!',
                        },
                        {
                           required: true,
                           message: 'Please input your E-mail!',
                        },
                     ],
                  })(<Input style={{width:250}} />)}
               </Form.Item>
               <h4>Password</h4>
               <Form.Item hasFeedback>
                  {getFieldDecorator('password', {
                     rules: [
                        {
                           required: true,
                           message: 'Please input your password!',
                        },
                        {
                           validator: this.validateToNextPassword,
                        },
                     ],
                  })(<Input.Password style={{width:250}} />)}
               </Form.Item>
               <h4>Confirm Password</h4>
               <Form.Item hasFeedback>
                  {getFieldDecorator('confirm', {
                     rules: [
                        {
                           required: true,
                           message: 'Please confirm your password!',
                        },
                        {
                           validator: this.compareToFirstPassword,
                        },
                     ],
                  })(<Input.Password  style={{width:250}} onBlur={this.handleConfirmBlur} />)}
               </Form.Item>
               <h4>Phone Number</h4>
               <Form.Item>
                  {getFieldDecorator('phone', {
                     rules: [{ required: true, message: 'Please input your phone number!' }],
                  })(<Input addonBefore={prefixSelector}  style={{width:250}} />)}
               </Form.Item>
               <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                     Register
                  </Button>
               </Form.Item>
            </Form>
         </div>
      );
    }
}

const cRegister = Form.create({ name: 'register' })(RegisterWindow);

export default cRegister;
