import React,{Component} from 'react';
import HomeProducts from '../homeproducts/HomeProducts';
import Logo from '../body/Logo';
import '../../assets/css/body.scss';
import Category from '../category/Category';
export default class Body extends Component{
   constructor(props){
      super(props);
      this.state=({
         surl:'',
      });
   }
   componentWillMount(){
      //console.log(this.props);
      const url = this.props.history.location.pathname;
      const pathname = url.slice(1,url.length);
      //console.log('pathname',pathname);
      this.setState({
         surl:pathname,
      })
   }
   render(){
      return (
         <div className="body">
            <Logo history={this.props.history} />
            {(this.state.surl === 'men'||this.state.surl === 'ladies'||this.state.surl === 'kids') ? <Category /> : <HomeProducts history={this.props.history} /> }
         </div>
      )
   }
}