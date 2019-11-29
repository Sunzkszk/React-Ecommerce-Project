import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import '../../assets/css/loginwindow.scss';

class LoginWindow extends Component{
   onClick=e=>{
      e.preventDefault();
      this.props.form.validateFields((err, values) =>{
         if (!err){
            this.props.handleSubmit(values.username,values.password);
         }
      });
   }
   render(){
      const { getFieldDecorator } = this.props.form;
      return (
            <div className="loginwindow">
               <Form onSubmit={this.onClick} className="login-form">
                  <h4>USERNAME</h4>
                  <Form.Item>
                     {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                     })(
                        <Input
                           prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           placeholder="Username"
                        />,
                     )}
                  </Form.Item>
                  <h4>PASSWORD</h4>
                  <Form.Item>
                     {getFieldDecorator('password', {
                           rules: [{ required: true, message: 'Please input your Password!' }],
                     })(
                        <Input
                           prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           type="password"
                           placeholder="Password"
                        />,
                     )}
                  </Form.Item>
                  <Form.Item>
                     {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                     })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="/register">
                           Forgot password
                        </a>
                        <br />
                        <Button type="primary" htmlType="submit" className="login-form-button">
                           Log in
                        </Button>
                        &nbsp;&nbsp;&nbsp;Or&nbsp;&nbsp;&nbsp;
                        <a href="/register">register now!</a>
                  </Form.Item>
               </Form>
            </div>
      )
   }
}

const cLogin = Form.create({ name: 'loginwindow' })(LoginWindow);

export default cLogin;
