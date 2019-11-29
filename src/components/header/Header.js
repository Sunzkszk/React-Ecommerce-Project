import React,{Component} from 'react';
import {Icon,Input,Button,Popover} from 'antd';
import '../../assets/css/header.scss';
export default class Header extends Component{
   constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
   }
   handleClick(cate){
      //console.log('cate',cate);
      this.props.history.push('/'+cate);
   }
   render(){
      const label = [
         {
            "content":<div><Button type="primary">Sign in</Button></div>,
            "icon":"idcard",
            "cate":"login",
         },
         {
            "content":<div><Button type="primary">My favorite</Button></div>,
            "icon":"heart",
            "cate":"heart",
         },
         {
            "content":<div><Button type="primary">Message</Button></div>,
            "icon":"message",
            "cate":"message",
         },
         {
            "content":<div><Button type="primary">Shopping Cart</Button></div>,
            "icon":"shopping",
            "cate":"cart",
         },
      ]
      const _this = this;
      let result = label.map(function(item,index){
         const __this = _this;
         return(
            <Popover content={item.content} key={index} trigger="hover">
               <Button shape="circle" onClick={()=>{__this.handleClick(item.cate)}}>
                  <Icon type={item.icon} />
               </Button>
            </Popover>
         )
      })
      
      const { Search } = Input;
      return (
         <div className="header">
            <div className="select"> 
               {result}
            </div>
            <div className="search">
               <Search placeholder="Search products" 
                  onSearch={value => console.log(value)} 
                  enterButton   
               />
            </div>
         </div>
      )
   }
}