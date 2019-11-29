import React,{Component} from 'react';
import { Divider } from 'antd';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Logo from '../body/Logo';
import RegisterWindow from '../register/RegisterWindow';
import '../../assets/css/register.scss';

export default class Register extends Component{
   render(){
      return (
         <div className="register">
            <Header history={this.props.history} />
            <Logo history={this.props.history} />
            <Divider>IGO.COM/REGISTER</Divider>
            <RegisterWindow history={this.props.history} />
            <Footer />
         </div>
      )
   }
}