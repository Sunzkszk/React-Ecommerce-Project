import React,{Component} from 'react';
import { Steps } from 'antd';
import { Route } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Logo from '../body/Logo';
import Divide from '../category/Divide';
import LoginStep from '../cart/LoginStep';
import ConfrimStep from '../cart/ConfirmStep';
import EmptyCart from '../cart/EmptyCart';
import DoneStep from '../cart/DoneStep';
import '../../assets/css/cart.scss';

const { Step } = Steps;

export default class Cart extends Component{
   constructor(props){
      super(props);
      this.state=({
         isConfirm:false,
      })
      this.handleConfirm = this.handleConfirm.bind(this);
   }
   handleConfirm(){
      this.setState({
         isConfirm:true,
      })
   }
   render(){
      //console.log('cart:this.props',this.props);
      let currentStep = 0;
      let displayContainer = null;
      if(this.props.cart === []){
         displayContainer = <EmptyCart />
      }
      else if(!this.props.isLogin){
         currentStep = 0;
         displayContainer = <LoginStep handleSubmit={this.props.handleSubmit} />
      }
      else if(!this.state.isConfirm){
         currentStep = 1;
         displayContainer = <ConfrimStep handleConfirm={this.handleConfirm} cart={this.props.cart} />
      }
      else{
         currentStep = 2;
         displayContainer = <DoneStep />
      }
      return (
         <div className="cart">
            <Header />
            <Logo />
            <Route children={( { location } )=>{
               return(
                  <Divide location={location} />
               )
            }}/>
            <div className="main">
               <h1>CHECKOUT</h1>
               <div className="step">
                  <Steps current={currentStep} status="">
                     <Step title="SINGIN" />
                     <Step title="CONFIRM ORDER" />
                     <Step title="THANKYOU" />
                  </Steps>
               </div>
               <div className="body">
                  {displayContainer}
               </div>
            </div>
            <Footer />
         </div>
      )
   }
}