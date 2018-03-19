import React, { Component } from 'react';
import './NavigationBar.css'
import { Link } from 'react-router'

export default class NavigationBar extends Component {


    render() {
        return(
           <div className="nav-bar-wrapper container">
               <Link className="nav-bar" onlyActiveOnIndex activeClassName="active" to="/" >Home</Link>
               <Link className="nav-bar" activeClassName="active" to="/projects" >Projects</Link>
               <Link className="nav-bar" activeClassName="active" to="/aboutMe">About Me</Link>
               <Link className="nav-bar" activeClassName="active" to="/contactMe">Contact</Link>                                             
           </div> 
        );
    }
}