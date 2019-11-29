import React,{Component} from 'react';
import {BackTop,Icon} from 'antd';

export default class BackToTop extends Component{
   render(){
      return (
         <div className="backtop">
            <BackTop  visibilityHeight='800'>
               <Icon type="up-circle" theme="filled" style={{fontSize:40,backgroundColor:'white',borderRadius:40}} />
            </BackTop>
         </div>
      )
   }
}