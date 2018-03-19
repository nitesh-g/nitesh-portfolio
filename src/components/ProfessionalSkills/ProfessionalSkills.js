import React, { Component } from 'react'

import './ProfessionalSkills.css'

export default class ProfessionalSkills extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <div className="container">
                    <h1 className="professional-heading">Professional Development</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={require('../../assets/HTML CSS and JavaScript.jpg')} className="img-responsive img-thumbnail certificate"  alt="Certificate" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="course-title">Online Course: HTML, CSS, and JavaScript for Web Developers</h3>
                            <p className="university-title">
                                <i>John Hopkins University</i>
                            </p>
                            <div className="alert alert-info text-left text-list">
                                <ul>
                                    <li>Developed a familiarity with several languages, including HTML, CSS, JavaScript and Bootstrap plus Git and GitHub.</li>
                                    <li>Developed to code web pages such that its components in the webpage rearrange and resize themselves automatically based on the screen size of the user’s device.</li>
                                    <li>Developed a fully functional restaurant web application that utilizes Ajax to expose server-side functionality and data to the end user.</li>
                                    <li>Following is the link for the website developed and hosted on Github</li>
                                    <br/>
                                    <a href="https://nitesh-g.github.io/coursera-test/site/mod5_solution/index.html" target="_blank" rel="noopener noreferrer"> View Restaurant Website</a>
                                    <br/>
                                    <a href="https://www.coursera.org/account/accomplishments/certificate/G8VRPT4KVQ3K" target="_blank" rel="noopener noreferrer"> View Certificate Online </a>
                                    
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
        </div>
        )
    }
}
