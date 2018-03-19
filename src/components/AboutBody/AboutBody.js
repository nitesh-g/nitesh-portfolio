import React, {Component} from 'react'
import Typist from 'react-typist'
import { Link } from 'react-router'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import '../../../node_modules/react-typist/dist/Typist.css'
import './AboutBody.css'



export default class AboutBody extends Component {
    render() {
        return (
            <div>
             <h2>Introduction</h2>   
           <Typist ms={1000}><span className="about-text">Hello, I am {this.props.name}.</span></Typist>
           <p className="about-text">I’m a web developer who is innovative, creative and a proven team player.
I possess a tech degree in Information Technology from Southern New Hampshire University and have 1 year experience in building, developing and managing websites and applications.</p>
             <div>
                 <div className="row figure-block">
                     <figure className="col-xs-12 col-lg-6 col-md-6">
                        <img className="img-responsive img-thumbnail" src={require('../../assets/snhu.jpg')} alt="Southern New Hampshire" />
                        <p className="img-caption">{this.props.university}</p>
                        <p className="img-caption">This is where I graduated in the field of Information Technology</p>
                     </figure>
                     <figure className="col-xs-12 col-lg-6 col-md-6" >
                         <img className="img-responsive img-thumbnail" src={require('../../assets/IMG_0598.jpg')} alt="Nitesh Library" />
                         <p className="img-caption">First day at university</p>
                     </figure>
                 </div>
                 <div>
                     <h2>What I am looking for?</h2>
                     <p className="about-text">
                        I am looking to join a stable company in a position that offers a positive atmosphere to learn and expand my knowledge, enhance my skills to implement new technologies for the betterment of the organization.
                     </p>
                 </div>
                 <div className="contact-button-wrapper">
                    <h2>Get in touch!</h2>
                    <Link className="button-large" to="/contactMe">
                    Contact Me &nbsp;
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                    </Link> 
                </div>
             </div>
            </div>
        )
    }
}