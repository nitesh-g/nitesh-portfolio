import React, { Component } from 'react'
import { Link } from 'react-router'

import './FooterBar.css'

export default class FooterBar extends Component {
    render() {
        return(
            <div className="footerBar-wrapper">
                <div className="container">
                    <hr/>
                </div>
               <div className="container footerNav-wrapper ">
                    <Link className="footer-nav-bar" onlyActiveOnIndex activeClassName="active" to="/" >Home</Link>
                    <Link className="footer-nav-bar" activeClassName="active" to="/projects" >Projects</Link>
                    <Link className="footer-nav-bar" activeClassName="active" to="/aboutMe">About Me</Link>
                    <Link className="footer-nav-bar" activeClassName="active" to="/contactMe">Contact</Link> 
               </div>
               <div className="container"><hr/></div>
               <p className="footer-copyright">Copyright &copy; {new Date().getFullYear()} Nitesh G. All rights reserved.</p>
            </div>
        )
    }
}

