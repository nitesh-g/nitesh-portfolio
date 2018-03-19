import React, {Component} from 'react'

import './MyWork.css'

export default class MyWork extends Component {
    render() {
        const { workExp } = this.props

        return(
            <div className="work-wrapper">
                <div className="container">
                    <h1>My Work</h1>
                    {
                        workExp.map((work) => 
                        <div key={work.companyId} className="row-wrapper" >
                            <div className="row" >
                                <div className="col-xs-12 col-md-6 col-lg-6">
                                    <h3 className="company-name">{work.company}</h3>  
                                    <ul><li className="work-job-title" >{work.jobTitle}</li></ul> 
                                    <p className="company-description" >{work.description}</p> 
                                    <a href={work.companyURL} target="_blank" className="company-link">Visit Website</a>
                                </div>
                                <div className="col-xs-12 col-md-6 col-lg-6 signal-img-wrapper">
                                    <img className="signals-image" src={require("../../assets/Signals.png")} alt="signals-img"/>
                                </div>
                            </div>    
                            <hr/>          
                        </div>
                        )
                    }

                </div>
                
            </div>
        )
    }
}