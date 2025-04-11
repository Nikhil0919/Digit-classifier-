import React,{Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

export default  class Comments extends Component{
    state={
        comments:[]
    }
    componentDidMount(){
        axios.get('./comments.json')
        .then(res=>{
            this.setState({comments: res.data});
        })
        .catch(err=>{
            console.log("Could not get connected");
        })    
    }
    render(){
	const comments=this.state.comments; 
	const a=comments.map((data)=><tr style={{fontSize:'15px'}}><td style={{border: '5px solid lightblue', flexWrap:'wrap', lineHeight:'normal'}}>{data.userName}<br/><em>({data.email})</em></td><td style={{border: '5px solid lightblue', flexWrap:'wrap', lineHeight:'normal'}}>{data.comment}</td></tr>);
        return(
            <div className="container">
            <h2 className="center">
                <table style={{height:'200px'}}>
		<tr style={{fontSize:'15px'}}>
			<th style={{border: '5px solid lightblue'}}>Name</th>
			<th style={{border: '5px solid lightblue'}}>Comment</th>
		</tr>
		{a}
		</table>
              </h2>
             </div>
            )
        }
}
