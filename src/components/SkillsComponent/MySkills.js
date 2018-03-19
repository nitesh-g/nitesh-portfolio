import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGem, faKeyboard } from '@fortawesome/fontawesome-free-regular'
import { faAngular, faReact, faNpm, faHtml5, faCss3, faJsSquare, faGithubSquare, faGit  } from '@fortawesome/fontawesome-free-brands'
import './MySkills.css'

export default class MySkills extends Component {
    render() {
        return(
        <div className="container skill-wrapper">
            <h1 className="skill-title">My {this.props.title}</h1>
            <div className="row">
                <div className="col-xs-12 col-md-6 idea-tab">
                   <div>
                   <FontAwesomeIcon icon={faGem} color="Gold" className="icon-gem" />
                    <h4 className="ideas-heading">Ideas</h4>
                    <p className="ideas-text">
                        I collaborate with clients and peers to nurture and transform ideas 
                        into well thought out design specs. 
                        After all, that's where the majority of amazing user experiences start.
                    </p>
                   </div>
                </div>
                <div className="col-xs-12 col-md-6 code-tab">
                  <div>  
                      <FontAwesomeIcon icon={faKeyboard} color="Gold" className="icon-keyboard" />
                      <h4 className="code-heading">
                          <FontAwesomeIcon className="icon-brand" icon={faGithubSquare} color="black"/>    
                          <FontAwesomeIcon className="icon-brand" icon={faGit} color="black"/>
                          <FontAwesomeIcon className="icon-brand" icon={faHtml5} color="red"/>
                          <FontAwesomeIcon className="icon-brand" icon={faCss3} color="green"/>                         
                          Code
                          <FontAwesomeIcon className="icon-brand" icon={faNpm} color="red"/>
                          <FontAwesomeIcon className="icon-brand" icon={faJsSquare} color="blue" />
                          <FontAwesomeIcon className="icon-brand" icon={faAngular} color="red"/>
                          <FontAwesomeIcon className="icon-brand" icon={faReact} color="purple" />                          
                      </h4>
                      <p className="code-text">I design in the browser with latest versions of HTML, CSS and a touch of JavaScript. 
                         I love coding things from scratch, 
                         but I can work with front-end libraries & frameworks like React, Angular and Bootstrap.</p>
                  </div>
                </div>
            </div>
        </div>
        );
    }
}