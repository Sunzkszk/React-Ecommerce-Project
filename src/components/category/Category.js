import React,{Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Logo from '../../components/body/Logo';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SlideBar from '../category/SlideBar';
import ProductContainer from './ProductContainer';
import Divide from './Divide';
import '../../assets/css/category.scss';

const CategoryBanner = (props) => (
   <img src={require('../../assets/images/'+ props.pathname +'Banner.jpg')} alt="" />
)

export default class Category extends Component{
   constructor(props){
      super(props);
      this.state=({
         dataProducts:[],
      });
      this.handleGetData = this.handleGetData.bind(this);
   }
   handleGetData=()=>{
      const url = this.props.history.location.pathname;
      const p = url.split('/');
      const pathname = p[1];
      const subpathname = p[2];
      let that = this;
      fetch('/data/'+pathname+'/'+subpathname+'.json',{
         method:'get'
      })
         .then(res => {
            let resdata = res.json();
            console.log('this',resdata);
            return resdata;
         }).then(data=>{
            console.log('data',data);
            that.setState({
               dataProducts:data,
            });
         })
         .catch(err => console.log(err));
   }
   render(){
      console.log('category this.props.history',this.props.history);
      const url = this.props.history.location.pathname;
      const p = url.split('/');
      const pathname = p[1];
      //console.log('pathname',pathname);
      if(pathname!=='men' && pathname!=='kids' && pathname!=='ladies'){
         //console.log('我运行到这里了');
         this.props.history.push('/');
         return null;
      }
      const subpathname = p[2];
      //console.log('subpathname',subpathname);
      let matchurl = pathname.toUpperCase();
      return (
         <div className="category">
            <Header history={this.props.history} />
            <Logo />
            <Divide matchurl={matchurl} location={this.props.history.location} />
            <div className="cate">
               <SlideBar history={this.props.history} handleGetData={this.handleGetData} />
               <div className="cateRight">
                  <Switch>
                     <Route exact path={'/'+pathname + '/'+subpathname }
                        children={() => {
                           return(
                              <ProductContainer dataProducts={this.state.dataProducts} subpathname={subpathname}/>
                           )
                        }}
                     />
                     <Route exact path={'/'+pathname}
                        children={() => {
                           return(
                              <CategoryBanner pathname={pathname}/>
                           )
                        }}
                     />
                  </Switch>
               </div>
            </div>
            <Footer />
         </div>
      )
   }
}