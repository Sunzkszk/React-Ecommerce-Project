import React,{Component} from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
export default class EmptyCart extends Component{
   componentDidMount(){
      setTimeout(()=>{
         window.location.href = '/men';
      },5000);
   }
   render(){
      return (  
         <div className="emptycart" style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <Icon type="shopping-cart" style={{fontSize:200}} />
            <p style={{fontSize:30}}>Your shopping cart is empty, please choose the product first.</p>
            <p>This page will jump to home page in 5 seconds,or click <Link to="/men">HERE</Link> to jump.</p>
         </div>
      )
   }
}