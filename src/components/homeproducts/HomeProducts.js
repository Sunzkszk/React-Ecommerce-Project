import React,{Component} from 'react';
import { Row, Col,Icon,Button } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/css/homeproducts.scss';
import BannerCarousel from '../carousel/BannerCarousel';
import Scroll from '../Scroll/scroll';
export default class HomeProducts extends Component{
   constructor(props){
      super(props);
      this.state = {
         dataProducts:[],
         isReadMore:false,
      };
      this.readMore = this.readMore.bind(this);
   }
   componentWillMount(){
      fetch('data/hotSale.json',{
         method:'get'
      })
         .then(res => {
            let resdata = res.json();
            //console.log('this',resdata);
            return resdata;
         }).then(data=>{
            //console.log('data',data);
            this.setState({
               dataProducts:data,
            });
         })
         .catch(err => console.log(err));
   }
   componentDidMount(){
      
   }
   readMore(){
      this.setState({
         isReadMore:true,
      })
   }
   handleOnClick(){
      Scroll(320,300);
   }
   render(){
      const _this = this;  
      let itemsProducts = this.state.dataProducts.map(function(item,index){
         const __this = _this;
            return(  
               <Col className="gutter-row" span={6} key={index}>
                  <div className="gutter-box">
                     <Link to={`/${item.category}/${item.type}/${item.id}`} onClick={__this.handleOnClick}>
                        <img src={require('../../'+item.images.imgProduct)} alt='' />
                     </Link>
                     <h2 >{item.name}</h2>
                     <div className="price">
                        <del>${item.price.marketPrice}</del>
                        <p>&nbsp;&nbsp;&nbsp;${item.price.salePrice}</p>
                     </div>
                     <div className="add">
                        <Link className="wish" to={`/${item.category}/${item.type}/${item.id}`} onClick={__this.handleOnClick}>
                           <Icon type="smile" />
                           <p>Add Wishlist</p>
                        </Link>
                        <Link className="cart" to={`/${item.category}/${item.type}/${item.id}`} onClick={__this.handleOnClick}>
                           <Icon type="shopping-cart" />
                           <p>Add Cart</p>
                        </Link>
                     </div>
                  </div>
               </Col>
            )   
           
      });
      return (
         <div className="homeproducts">
            <BannerCarousel />
            <div className="title">
               <Icon type="gift" style={{fontSize:100,marginBottom:20,marginTop:20}} />
               <p>FEATURE PRODUCTS</p>
               <p>Best Collection fo You</p>
            </div>
            <Row gutter={16}>
               {itemsProducts}
               {this.state.isReadMore?itemsProducts:''}
            </Row>
            <Button block onClick={this.readMore}>Read More</Button>
         </div>
      )
   }
}