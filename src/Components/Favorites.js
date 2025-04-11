import React from 'react';
import img1 from '../img/1.jpeg';
import img2 from '../img/2.jpeg';
import img3 from '../img/3.jpeg';
import img4 from '../img/4.jpeg';
export default function Favorites(){
return(
  <div className="container">
	<br/><br/>
	<table align="center" style={{border:'4px solid lightblue', width:'80px'}}>
	<caption style={{fontSize:'24px'}}>My favourite Celebrities</caption>
	<tr><th style={{border:'4px solid lightblue', textAlign:'center'}}><img src={img1} /></th>
	<th style={{border:'4px solid lightblue', textAlign:'center'}}><img src={img2} /></th></tr>
	<tr><th style={{border:'4px solid lightblue', textAlign:'center'}}><img src={img3} /></th>
	<th style={{border:'4px solid lightblue', textAlign:'center'}}><img src={img4} /></th></tr>
	</table>
   </div>
 )
}
