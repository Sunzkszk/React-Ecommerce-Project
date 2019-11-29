import React,{Component} from 'react';
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom';
import '../../assets/css/logo.scss';

const data = ['men', 'ladies', 'kids'];

export default class Logo extends Component{
   constructor(props) {
      super(props);
      this.state = {
        activeItem: 'home'
      };
      this.handleItemClick = this.handleItemClick.bind(this);
   }
   handleItemClick=({name})=>{
      this.setState({ activeItem: name });
      //console.log(this.state.activeItem);
   }
   handleLogoClick=()=>{
      window.location.href = '/';
   }
   render(){
      //console.log('logo this.props',this.props);
      const { activeItem } = this.state;

      const { handleItemClick } = this;
      let listMenu = data.map(function(item,index){
         return (
            <Menu.Item as='span' key={index} active={activeItem === item}
            onClick={handleItemClick}>
               <NavLink to={'/' + item} activeClassName="active">{item.toUpperCase()}</NavLink>
            </Menu.Item>
         )
      })
      return (
         <div className="mainlogo">
            <div className="logo" onClick={this.handleLogoClick}>
               <img src={require('../../assets/images/logo.png')} alt="" />
               <h1>A pursuit of exquisite e-commerce platform.</h1>
            </div>
            <div className="tabbar">
               <Menu mode="horizontal">
                  {listMenu}
               </Menu>
            </div>
         </div>
      )
   }
}