import React,{Component} from 'react';
import { Divider,Rate } from 'antd';
import '../../assets/css/productcomment.scss';

export default class ProductComment extends Component{
   constructor(props){
      super(props);
      this.state=({
         productcomment:[],
      })
   }
   componentWillMount(){
      fetch('../../../data/comment.json',{
         method:'get'
      })
      .then(res => {
         let resdata = res.json();
         //console.log('this',res);
         return resdata;
      })
      .then(data=>{
         //console.log('data',data);
         this.setState({
            productcomment : data,
         })
         //console.log('state',this.state.productcomment);
         //console.log('state',this.state.productcomment[1]);
      })
      .catch(err=>{
         console.log(err);
      })
   }
   render(){
      let pc = this.state.productcomment.map(function(item,index){
         return (
            <li key={index}>
               <div className="top">
                  <div className="name">
                     <img src={require('../../data/avatar/'+item.urlAvatar)} alt="" />
                     <h2>{item.username}</h2>
                     <h3>{item.date}</h3>
                  </div>
                  <Rate disabled defaultValue={item.rating} />
               </div>
               <div className="down">
                  <p>{item.content}</p>
               </div>
            </li>
         )
      })

      return (
         <div className="productcomment">
            <Divider>
               <span>Product Comment</span>
            </Divider>
            <ul>
               {pc}
            </ul>
         </div>
      )
   }
}