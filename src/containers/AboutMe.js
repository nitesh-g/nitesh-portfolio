import React, { Component }  from 'react'
import AboutBody from '../components/AboutBody/AboutBody'


export default class AboutMe extends Component {
	render(){
		return(
			<div className="container">
				<AboutBody 
				name="Nitesh" 
				country="India"
				university="Southern New Hampshire University"
				/>
			</div>
			)
}	
}
