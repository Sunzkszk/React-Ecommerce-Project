import React,{Component} from 'react';
import { Divider } from 'antd';
import '../../assets/css/category.scss';

export default class Divide extends Component{
   render(){
      const url = this.props.location.pathname;
      const p = url.split('/');
      const pathname = p[1];
      let matchurl = pathname.toUpperCase();
      return (
         <div className="divider">
            <Divider>
               <span>IGO.COM&nbsp;&nbsp;/&nbsp;&nbsp;</span>
               <span style={{color:'red'}}>{matchurl}</span>
            </Divider>
         </div>
      )
   }
}