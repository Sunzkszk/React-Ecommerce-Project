import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
import Register from '../src/components/register/Register';
import Category from '../src/components/category/Category';
import BackToTop from '../src/components/backtotop/BackToTop';
import Detail from './components/category/Detail';
import Cart from './components/cart/Cart';
class RouteApp extends Component{
   constructor(props){
      super(props);
      this.state=({
         isLogin:false,
         username:'',
         cart:[
            {
               name:'',
               color:'',
               size:'',
               price:'',
               img:'',
            }
         ]
      })
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleAddCart = this.handleAddCart.bind(this);
      
   }
   handleSubmit(username,password){
      fetch('data/userdata.json',{
         method:'get'
      })
      .then(res => {
         let resdata = res.json();
         //console.log('this',resdata);
         return resdata;
      }).then(data=>{
         //console.log('data',data);
         const _this = this;
         data.forEach(function(item,index){
            if(item.username === username && item.password === password){
               _this.setState({
                  isLogin : true,
                  username : username,
               })
            }
         });
      })
      .catch(err => console.log(err)); 
   }; 
   handleAddCart=(name,color,size,price,img)=>{
      this.setState({
         cart:[
            {
               name:name,
               color:color,
               size:size,
               price:price,
               img:img,
            }
         ],
      });
      console.log('this.state.cart',this.state.cart);
   };
   render(){
      return (
            <BrowserRouter>
               <Switch>
                  <Redirect from='/home' to='/'  />
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/login" children={()=>{
                     return ( <Login isLogin={this.state.isLogin} handleSubmit={this.handleSubmit} /> )
                  }} />
                  <Route path="/cart" children={()=>{
                     return ( <Cart isLogin={this.state.isLogin} handleSubmit={this.handleSubmit} cart={this.state.cart} /> )
                  }} />
                  <Route path="/register" component={Register} />
                  <Route path='/:category/:type/:id' children={()=>{
                     return (<Detail handleAddCart={this.handleAddCart} />)
                  }} />
                  <Route path="/:category" component={Category} />
                  <Redirect from='*' to='/'  />
               </Switch>
               <Route component={BackToTop} />
            </BrowserRouter>
      )
   }
}
ReactDOM.render((
   <RouteApp />
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

