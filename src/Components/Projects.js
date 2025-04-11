import React,{Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

export default  class Projects extends Component{
    state={
        projects:[]
    }
    componentDidMount(){
        axios.get('./projects.json')
        .then(res=>{
            this.setState({projects: res.data});
        })
        .catch(err=>{
            console.log("Could not get connected");
        })    
    }
    render(){
	const projects=this.state.projects; 
	const a=projects.map((data)=><tr style={{fontSize:'15px', lineHeight:'normal'}}><td style={{border: '5px solid lightblue', textAlign:'center', width:'200px', fontWeight:'bold'}}>{data.projectName}</td><td style={{border: '5px solid lightblue'}}>{data.details}</td></tr>);
        return(
            <div className="container">
            <h2 className="center">
                <table>
		<tr style={{fontSize:'15px', lineHeight:'normal'}}>
			<th style={{border: '5px solid lightblue', textAlign:'center' , width:'200px'}}>Project Name</th>
			<th style={{border: '5px solid lightblue', textAlign:'center'}}>Details</th>
		</tr>
		{a}
		</table>
              </h2>
             </div>
            )
        }
}