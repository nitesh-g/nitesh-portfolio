import React, { Component } from 'react'
import ContactBody from '../components/ContactBody/ContactBody'

export default class ContactMe extends Component {
    render(){
        return(
            <div className="container">
                <h1>Contact Me</h1>
                <ContactBody />
            </div>
        )
    }
}