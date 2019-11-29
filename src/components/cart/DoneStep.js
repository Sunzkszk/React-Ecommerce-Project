import React,{Component} from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
export default class DoneStep extends Component{
   componentDidMount(){
      setTimeout(()=>{
         window.location.href = '/';
      },4000);
   }
   render(){
      return (  
         <div style={{width:'100%'}}>
            <Card title="THANK YOU FOR SHOPPING WITH US">
               <p>This page will jump to home page in 2 seconds,or click <Link to="/">HERE</Link> to jump.</p>
            </Card>
         </div>
      )
   }
}