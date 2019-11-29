import React,{Component} from 'react';
import { Card,Button,Divider } from 'antd';
import EmptyCart from '../cart/EmptyCart';
import '../../assets/css/confirmstep.scss';
const table = [
   {
      'title':'PERSONAL DETAILS',
      'content':'JohoshaphatTse',
   },
   {
      'title':'Email',
      'content':'szkszk77@163.com',
   },
   {
      'title':'HOME ADDRESS',
      'content':'San Francisco Street 5 No.101',
   },
   {
      'title':'DELIVERY COMPANY',
      'content':'SF DELIVERY',
   },
   {
      'title':'DELIVERY NOTIFICATION',
      'content':'952768',
   },
   {
      'title':'ORDER VALUE',
      'content':'$1000',
   }
]
export default class ConfirmStep extends Component{
   render(){
      let grid = table.map(function(item,index){
         return (
            <div>
               <Card.Grid hoverable={false} style={{fontWeight:'bold'}}><p>{item.title}</p></Card.Grid>
               <Card.Grid hoverable={false}><p>{item.content}</p></Card.Grid>   
            </div>
         )
      });
      if(this.props.cart[0].name === ''){
         return ( <EmptyCart /> ) 
      }
      else{
         return (  
            <div className="confirmstep">
               <div className="left">
                  <Card title="CONFIRM ORDER">
                     {grid}
                  </Card>
               </div>
               <div className="right">
                  <Card title="YOUR ORDER">
                     <div className="right_top">
                        
                        <img src={require('../../data/productImages/'+this.props.cart[0].img)} alt="" />
                        <div className="text">
                           <h3>{this.props.cart[0].name}</h3>
                           
                           <h3>${this.props.cart[0].price}</h3>
                           <p>Quantity: 1</p>
                           <p>Color: {this.props.cart[0].color}</p>
                           <p>Size: {this.props.cart[0].size}</p>
                        </div>
                     </div>
                     <Divider />
                     <div className="price">
                        <p>ORDER VALUE:</p>
                        <p>${this.props.cart[0].price}</p>
                     </div>
                     <div className="price">
                        <p>DELIVERY:</p>
                        <p>$10</p>
                     </div>
                     <Divider />
                     <div className="price">
                        <p>TOTAL:</p>
                        <h3>${this.props.cart[0].price+10}</h3>
                     </div>
                     <Divider />
                     <p>30 days withdrawal</p>
                  </Card>
                  <Button type="primary" onClick={()=>this.props.handleConfirm()} style={{marginTop:10}}>COMPLETE PURCHASE</Button>
               </div>
            </div>
         )
      }
   }
}