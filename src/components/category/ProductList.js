import React,{Component} from 'react';
import { Card, Icon, Col } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;
export default class ProductList extends Component{
   render(){
      let Price =()=> (
         <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
            <div className="name" style={{width:'100%',}}>
               <p style={{fontSize:22,whiteSpace: 'nowrap',cursor:'pointer'}}><b>{this.props.name}</b></p>
            </div>
            <div className="price" style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:'100%',fontSize:22}}>
               <del style={{color:'#CCCCFF'}}>${this.props.marketprice}</del>
               <p style={{color:'red',margin:0}}>&nbsp;&nbsp;&nbsp;${this.props.saleprice}</p>
            </div>
         </div>
      )
      return(
         <Col className="gutter-row" span={8}>
            <Card className="card" size='small'
               cover={
                  <Link to={`/${this.props.category}/${this.props.type}/${this.props.id}`}>
                     <img alt="example" style={{width:'100%',cursor:'pointer'}}
                        src={require('../../data/productImages/'+this.props.images)}
                     />
                  </Link>
               }
               actions={[
                  <div className="wish">
                     <Link to={`/${this.props.category}/${this.props.type}/${this.props.id}`}  style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Icon type="smile" />
                        <p style={{margin:0}}>Add Wishlist</p>
                     </Link>
                  </div>,
                  <div className="cart">
                     <Link to={`/${this.props.category}/${this.props.type}/${this.props.id}`}  style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Icon type="shopping-cart" />
                        <p style={{margin:0}}>Add Cart</p>
                     </Link>
                  </div>,
               ]}
            >
               <Meta description={<Price />} style={{margin:0,padding:0}} />
            </Card>
         </Col>
      )
   }
}