import React,{Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Body from '../body/Body';

export default class Home extends Component{
   render(){
      //console.log('home this.props',this.props);
      return (
         <div>
            <Header history={this.props.history} />
            <Body history={this.props.history} />
            <Footer />
         </div>
      )
   }
}