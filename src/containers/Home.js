import React, {Component} from 'react'
import styled from 'styled-components'
import './container.css'

const Image = styled.img`
	width: 100%;
`;

export default class Home extends Component {
	
	render() {
		return (
			<div className="container">
				<div className="nitesh-img-wrapper" >
					<Image className="nitesh-img" src={require ('../assets/Nitesh-NJ.jpg')} alt="Nitesh-Pic" />
					<h3 className="name-portfolio">Nitesh G</h3>
				</div>
				<p className="home-intro">
				My name is Nitesh G. I am from Hyderabad, India. 
				I have completed my Bachelor’s of Technology in the field of Electronics and Communication Engineering from India. 
				When I was in the half way of my engineering I acquired a taste for software engineering and I realized that Computer Science was my subject. 
				Later, I came to United States and have successfully completed my Master’s in Information Technology from Southern New Hampshire University, NH, USA. 
				When I was in India I didn’t have a big exposure of the outside world but after travelling to United States and living independently has taught me a lot and have gained the courage to think and dream big. 
				I am a kind of a person who will be willing to take risk’s to achieve and accepts whatever may be the result.
				</p>
			</div>
		)
	}
}