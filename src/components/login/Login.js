import React,{Component} from 'react';
import { Divider } from 'antd';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Logo from '../body/Logo';
import LoginWindow from '../login/LoginWindow';
import SuccessWindow from '../login/successWindow';
import '../../assets/css/login.scss';

export default class Login extends Component{
   render(){
      return (
         <div className="login">
            <Header history={this.props.history} />
            <Logo history={this.props.history} />
            <Divider>IGO.COM/LOGIN</Divider>
            {this.props.isLogin === true ? <SuccessWindow /> : <LoginWindow handleSubmit={this.props.handleSubmit} />}
            <Footer />
         </div>
      )
   }
}

