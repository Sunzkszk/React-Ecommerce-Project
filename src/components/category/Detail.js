import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import '../../assets/css/detail.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Logo from '../body/Logo';
import Divide from './Divide';
import ProductDetail from './ProductDetail';
import ProductComment from './ProductComment';
export default class Detail extends Component{
   render(){
      //console.log('detail this.props',this.props);
      return (
         <div className="detail" >
            <Route children={( { history } )=>{
               return(
                  <Header history={history} />
               )
            }}/>
            <Logo />
            <Route children={( { location } )=>{
               return(
                  <Divide location={location} />
               )
            }}/>
            <Route children={( { history,location } )=>{
               return(
                  <ProductDetail location={location} history={history} handleAddCart={this.props.handleAddCart} />
               )
            }}/>
            <ProductComment />
            <Footer />
         </div>
      )
   }
}