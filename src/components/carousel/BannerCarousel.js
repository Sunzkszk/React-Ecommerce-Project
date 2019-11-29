import React,{Component} from 'react';
import { Carousel } from 'antd';
import '../../assets/css/carousel.scss';

export default class BannerCarousel extends Component{
   constructor(props) {
      super(props);
      this.state = {
         dataCarousel: [],
      };
   }
   componentDidMount(){
      fetch('data/carousel.json')
         .then(res => {
            let resdata = res.json();
            console.log('this',resdata);
            return resdata;
         }).then(data=>{
            console.log('data',data);
            this.setState({
               dataCarousel:data,
            });
         })
         .catch(err => console.log(err));
   }
   render(){
       let itemsBannerCarousel = this.state.dataCarousel.map(function(item,index){
         return(
            <div className="body" key={index}>
               <h2>{item.title}</h2>
               <p>{item.des}</p>
               <img src={require('../../'+item.url)} alt="" />
            </div>
         )
       })
      return (
         <Carousel autoplay>
            {itemsBannerCarousel}
         </Carousel>
      )
   }
}