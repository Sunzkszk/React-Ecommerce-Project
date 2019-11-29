import React,{Component} from 'react';
import {Icon,Popover} from 'antd';
import { Link } from 'react-router-dom';
import Scroll from '../Scroll/scroll';
import '../../assets/css/footer.scss';
export default class Footer extends Component{
   handleClick(){
      Scroll(20,300);
   }
   render(){
      const contact = [
         {
            "form":"wechat",
            "way":<div><img style={{width:100,height:100}} src={require('../../assets/images/wechat.jpg')} alt='' /></div>
         },
         {
            "form":"weibo-circle",
            "way":<div><img style={{width:100,height:100}} src={require('../../assets/images/weibo.png')} alt='' /></div>
         },
         {
            "form":"github",
            "way":<div><img style={{width:100,height:100}} src={require('../../assets/images/github.png')} alt='' /></div>
         }, 
      ]
      let content = contact.map(function(item,index){
         return(
            <Popover content={item.way} key={index}>
               <Icon type={item.form} style={{fontSize:20}} />
            </Popover>
         )
      })
      
      return (
         <div className="footer">
            <div className="top">
            <div className="shop">
               <div className="title">
                  <h2>SHOP</h2>
               </div>
               <div className="body">
                  <Link to='/ladies'><p onClick={this.handleClick}>Ladies</p></Link>
                  <Link to='/men'><p onClick={this.handleClick}>Men</p></Link>
                  <Link to='/kids'><p onClick={this.handleClick}>Kids</p></Link>
                  <Link to='/'><p onClick={this.handleClick}>Home</p></Link>
               </div>
            </div>
            <div className="info">
               <div className="title">
                  <h2>CARPORATE INFO</h2>
               </div>
               <div className="body">
                  <p>Career at iGo</p>
                  <p>About iGo</p>
                  <p>Press</p>
                  <p>Investor relations</p>
                  <p>Corporate governance</p>
               </div>
            </div>
            <div className="help">
               <div className="title">
                  <h2>HELP</h2>
               </div>
               <div className="body">
                  <p>Customer service</p>
                  <p>My iGo</p>
                  <p>Store locator</p>
                  <p>Legal & Privacy</p>
                  <p>Contact</p>
               </div>
            </div>
            <div className="sign">
               <div className="title">
                  <h2>Sign up for newletter</h2>
               </div>
               <div className="body">
                  <p>Sign up now and get 15% off one item.</p>
               </div>
            </div>
            </div>
            <div className="bottom">
               <div className="icon">
                  {content}
               </div>
               <p>COPYRIGHT © TSEJX 2017.</p>
               <p>ALL RIGHTS RESERVED.</p>
            </div>
         </div>
      )
   }
}