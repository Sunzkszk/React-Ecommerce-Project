import React,{Component} from 'react';
import { Card } from 'antd';
import LoginWindow from '../login/LoginWindow';
import '../../assets/css/loginstep.scss';

export default class LoginStep extends Component{
   render(){
      return (
         <div className="loginstep">
            <LoginWindow handleSubmit={this.props.handleSubmit} />
            <Card title="YOUR ORDER" style={{ width: 300 }}>
               <p>ORDER VALUE:$110</p>
               <p>DELIVERY:$10</p>
               <p>TOTAL:$100</p>
            </Card>
         </div>        
      )
   }
}