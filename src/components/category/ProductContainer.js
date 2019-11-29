import React,{Component} from 'react';
import { Icon, Menu, Dropdown, Button,Pagination,Row } from 'antd';
import '../../assets/css/productcontainer.scss';
import ProductList from './ProductList';
import Scroll from '../Scroll/scroll';
export default class ProductContainer extends Component{
   handleMenuClick=(e)=> {
      switch(e.key){
         case '1':
            this.setState({
               filter:'1',
               title:'Best Match',
            })
            break;
         case '2':
            this.setState({
               filter:'2',
               title:'Lowest Price',
            })
            break;
         case '3':
            this.setState({
               filter:'3',
               title:'Highest Price',
            })
            break;
         default:
            break;
      }
      
   }
   menu = (
      <Menu onClick={this.handleMenuClick} selectable>
         <Menu.Item key="1" default>
            <Icon type="user" />
            Best Match
         </Menu.Item>
         <Menu.Item key="2">
            <Icon type="user" />
            Lowest Price
         </Menu.Item>
         <Menu.Item key="3">
            <Icon type="user" />
            Highest Price
         </Menu.Item>
      </Menu>
   )
   constructor(props){
      super(props);
      this.state=({
         filter :'1',
         title:'Best Match',
         current:1,
      });
      this.onShowSizeChange = this.onShowSizeChange.bind(this);
      this.filterBestMatch = this.filterBestMatch.bind(this);
      this.filterLowestPrice = this.filterLowestPrice.bind(this);
      this.filterHighestPrice = this.filterHighestPrice.bind(this);
      this.handleMenuClick = this.handleMenuClick.bind(this);
   }
   temparr = [];
   filterBestMatch(arr){
      return arr;
   }
   filterLowestPrice(arr){
      return arr.length <= 1 ? arr : this.filterLowestPrice(arr.slice(1).filter(item => item.price.salePrice <= arr[0].price.salePrice)).concat(arr[0], this.filterLowestPrice(arr.slice(1).filter(item => item.price.salePrice > arr[0].price.salePrice)));
   }
   filterHighestPrice(arr){
      return arr.length <= 1 ? arr : this.filterHighestPrice(arr.slice(1).filter(item => item.price.salePrice >= arr[0].price.salePrice)).concat(arr[0], this.filterHighestPrice(arr.slice(1).filter(item => item.price.salePrice < arr[0].price.salePrice)));
   }
   onShowSizeChange=(current, pageSize)=> {
      //console.log(current, pageSize);
   }
   currentPageChange= page => {
      this.setState({
        current: page,
      });
      Scroll(300,300);
   };
   render(){
      const {filter} = this.state;
      switch(filter){
         case '1' :
            this.temparr = this.filterBestMatch(this.props.dataProducts);
            break;
         case '2' :
            this.temparr = this.filterLowestPrice(this.props.dataProducts.slice(0));
            break;
         case '3' :
            this.temparr = this.filterHighestPrice(this.props.dataProducts.slice(0));
            break;
         default:
            break;
      };
      this.temparr = this.temparr.slice((this.state.current-1)*12,this.state.current*12);
      let products = this.temparr.map(function(item,index){
         return (
            <ProductList
               key={index}
               name = {item.name}
               images = {item.images.imgProduct}
               marketprice = {item.price.marketPrice}
               saleprice = {item.price.salePrice}
               id = {item.id}
               category = {item.category}
               type = {item.type}
            />
         )
      })
      let itemsTotal = this.props.dataProducts.length;
      console.log('this.props',this.props);
      var page = 0;
      console.log('itemsTotal',itemsTotal);
      if(itemsTotal<=12){
         page = 1;
      }
      else if(itemsTotal%12===0){
         page = itemsTotal / 12;
      }
      else{
         page =1 + Math.floor(itemsTotal / 12);
      }
      console.log('page',typeof(parseFloat(page)));
      return (
         <div className="productcontainer">
            <div className="topcontainer">
               <div className="cal">
                  <h3>{this.props.subpathname.toUpperCase()}</h3>
                  <p>Total&nbsp;&nbsp;{this.props.dataProducts.length}&nbsp;&nbsp;items</p>
               </div>
               <div className="sort">
                  <Dropdown overlay={this.menu}>
                     <Button>
                        {this.state.title} <Icon type="down" />
                     </Button>
                  </Dropdown>
               </div>
            </div>
            <div className="middlecontainer">
               <Row gutter={16} className="Row">
                  {products}
               </Row>
            </div>
            
            <Pagination
               pageSize={12}
               defaultCurrent={1}
               total={parseFloat(itemsTotal)}
               style={{marginTop:30}}
               current={this.state.current}
               onChange={this.currentPageChange}
            /> 
         </div>
      )
   }
}