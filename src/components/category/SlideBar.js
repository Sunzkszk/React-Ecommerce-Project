import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/css/slidebar.scss';

const dataLadiesMenu = ['shirts','dresses','short','skirts','knitwear','shoes'];

const dataMenMenu = ['t-shirt','shirts','jeans','sportwear','shoes'];

const dataKidsMenu = ['sets','tops','outdoor'];

export default class SlideBar extends Component{
   render(){
      const {handleGetData} = this.props;
      const url = this.props.history.location.pathname;
      //console.log('url',url);
      const p = url.split('/');
      const pathname = p[1];
      const productname = p[2];
      //console.log('pathname',pathname);
      let matchurl = pathname.toUpperCase();
      let dataSidebarMenu = null;
      switch (pathname){
         case 'men':
            dataSidebarMenu = dataMenMenu;
            break;
         case 'ladies':
            dataSidebarMenu = dataLadiesMenu;
            break;
         case 'kids':
            dataSidebarMenu = dataKidsMenu;
            break;
         default:
            break;
      }
      let itemsSidebarMenu = '';
      if(dataSidebarMenu!=null){
         itemsSidebarMenu = dataSidebarMenu.map(function(item,index){
            const link = (
               <Link to={ '/'+pathname + '/' +item }>{item}</Link>
            );
            return (
               <Menu.Item key={index} children={link} 
                  onClick={()=>{
                     handleGetData(pathname,productname)
                  }}
               />
            )
         })
      }
      else{
         itemsSidebarMenu = '';
      }
      return (
         <div className="slidebar" >
            <Menu defaultOpenKeys={['sub1']} style={{width:'80%'}}>
               <Menu.Item key="pathname" style={{fontWeight:'bold'}}>
                  <Icon type="shopping" />
                  {matchurl}
               </Menu.Item>
               {itemsSidebarMenu}
            </Menu>
         </div>
      )
   }
}