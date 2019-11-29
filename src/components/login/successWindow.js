import React,{Component} from 'react';
import { Card,Icon } from 'antd';

export default class SuccessWindow extends Component{
   render(){
      return (
         <div className="successwindow" style={{marginBottom:40,marginTop:40}}>
            <Card title="You have successfully logged in.">
               <p>Now you can go to the mall to buy your favorite clothes</p>
               <div className="item" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <Icon theme="twoTone" type='heart' />&nbsp;
                  <p style={{margin:0,width:'100%'}}>My Favorite</p>
               </div>
               <div className="item" style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10}}>
                  <Icon theme="twoTone" type='message' />&nbsp;
                  <p style={{margin:0,width:'100%'}}>Message</p>
               </div>
               <div className="item" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <Icon theme="twoTone" type='shopping' />&nbsp;
                  <p style={{margin:0,width:'100%'}}>Shopping Cart</p>
               </div>
            </Card>
         </div>
      )
   }
}
