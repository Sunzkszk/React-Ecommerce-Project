import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Button,Tabs,Radio,notification } from 'antd';
import '../../assets/css/productdetail.scss';
const { TabPane } = Tabs;
export default class ProductDetail extends Component{
   constructor(props){
      super(props);
      this.state=({
         product: {
            id:"Loading",
            category:"",
            type:"",
            name:"Loading",
            price:{
               marketPrice:"",
               salePrice:"Loading"
            },
            detail:{
               color:['red','blue'],
               size:['','','','',''],
               des:""
            },
            quantity:"",
            images:{
               imgProduct:"",
               imgModel:"",
               imgDetail:""
            }
         },
         color:'',
         size:'',
      });
      this.addToCart = this.addToCart.bind(this);
   }
   callback(key) {
      //console.log(key);
   }
   handleColorChange=(e)=>{
      //console.log(e.target.value);
      this.setState({
         color:e.target.value,
      })
   }
   handleSizeChange=(e)=>{
      //console.log(e.target.value);
      this.setState({
         size:e.target.value,
      })
   }
   addToCart=()=>{
      if(this.state.color!=='' &&this.state.size!==''){
         this.props.handleAddCart(this.state.product.name,this.state.color,this.state.size,this.state.product.price.salePrice,this.state.product.images.imgProduct);
         this.props.history.push('/cart');
      }
      else if(this.state.color!=='' &&this.state.size===''){
         notification.open({
            message: 'Please select size',
            description:
              'Please choose your suitable size to ensure that this product is suitable for you.',
            style: {
              width: 600,
              marginLeft: 335 - 600,
            },
            duration: 2.5,
          });
      }
      else if(this.state.color==='' &&this.state.size!==''){
         notification.open({
            message: 'Please select color',
            description:
              'Please choose your favorite color to ensure that the product is suitable for you.',
            style: {
              width: 600,
              marginLeft: 335 - 600,
            },
            duration: 2.5,
          });
      }
      else{
         notification.open({
            message: 'Please select color and size',
            description:
              'Please choose the right color and size to ensure that the product is suitable for you.',
            style: {
              width: 600,
              marginLeft: 335 - 600,
            },
            duration: 2.5,
          });
      }
   }
   saveAsFavorite(){

   }
   componentDidMount(){
      const url = this.props.location.pathname;
      const p = url.split('/');
      const pathname = p[1];
      const subpathname = p[2];
      const productid = p[3];
      fetch('/data/'+pathname+'/'+subpathname+'.json',{
         method:'get'
      })
         .then(res => {
            let resdata = res.json();
            return resdata;
         }).then(data=>{
            const that = this;
            data.map(function(item,index){
               let dataTemp = {};
               if(item.id===productid){
                  dataTemp = JSON.parse(JSON.stringify(item));
                  that.setState({
                     product:dataTemp
                  })
                  console.log('product',that.state.product);
               }
               return item;
            })
            return data;
         })
         .catch(err => console.log(err));
   }
   render(){
      let color = this.state.product.detail.color.map(function(item,index){
         return (
            <Radio.Button key={index} value={item} style={{marginRight:10,backgroundColor:item}}></Radio.Button>
         )
      })
      let size = this.state.product.detail.size.map(function(item,index){
         return (
            <Radio.Button key={index} value={item} style={{marginRight:10,fontWeight:'bold'}}>{item}</Radio.Button>
         )
      })
      const url = this.props.location.pathname;
      const p = url.split('/');
      const pathname = p[1];
      const subpathname = p[2];
      return (
         <div className="productdetail">
            <div className="left">
               <img src={require('../../data/productImages/'+pathname+'/'+subpathname+'.jpg')} alt="" />
            </div>
            <div className="right"  >
               <div className="name">
                  <h1>{this.state.product.name}</h1>
               </div>
               <div className="price">
                  <h1><del>${this.state.product.price.marketPrice}</del></h1>
                  <h1 style={{color:'red',marginLeft:20}}>${this.state.product.price.salePrice}</h1>
               </div>
               <div className="color">
                  <h3>Color: Please Select Color</h3>
                  <Radio.Group onChange={this.handleColorChange}>
                     {color}
                  </Radio.Group>
               </div>
               <div className="size">
                  <h3>Color: Please Select Size</h3>
                  <Radio.Group onChange={this.handleSizeChange}>
                     {size}
                  </Radio.Group>
               </div>
               <Link to="/"><h3 style={{marginTop:10,marginBottom:10}}>SIZE GUIDE</h3></Link>
               <h3>Delivers in: <b>1-7 working days</b></h3>
               <div className="button">
                  <Button icon="shopping" onClick={this.addToCart}>ADD TO SHOPPING CART</Button>
                  <Button icon="heart" onClick={this.saveAsFavorite}>SAVE AS FAVORITE</Button>
               </div>
               <div className="detail">
                  <Tabs defaultActiveKey="1" onChange={this.callback}>
                     <TabPane tab="DESCRIPTION" key="1">
                        {this.state.product.detail.des}
                     </TabPane>
                     <TabPane tab="DETAILS" key="2">
                        Content of Tab Pane 2
                     </TabPane>
                     <TabPane tab="SHARE" key="3">
                        Content of Tab Pane 3
                     </TabPane>
                     <TabPane tab="DELIVERY" key="4">
                        Content of Tab Pane 3
                     </TabPane>
                  </Tabs>
               </div>
            </div>
         </div>
      )
   }
}