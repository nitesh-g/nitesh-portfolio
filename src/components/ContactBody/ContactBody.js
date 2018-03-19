import React, { Component } from 'react'
import "./ContactBody.css"

export default class ContactBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            contactNo: "",
            message: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {  
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
      }
    

    render() {
        return(
            <div className="form-wrapper">
                <form className="form-style" 
                action="https://formspree.io/contact.niteshgupta@gmail.com"
                method="POST"
                >
                    <label className="heading-label" htmlFor="namedInput">
                        *Your name...
                    </label>
                    <br/>
                    <input
                    className="input-style" 
                    id="nameInput" 
                    type="text"
                    name="name" 
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                    />
                    
                    <br/>
                    <label className="heading-label" htmlFor="emailInput">
                        *Your email...
                    </label>    
                    <br/>
                    <input
                    className="input-style" 
                    id="emailInput" 
                    type="email"
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    />
                    
                    <br/>
                    <label className="heading-label" htmlFor="contactNoInput">
                        Your contact...
                    </label>    
                    <br/>
                    <input
                    className="input-style" 
                    id="contactNo" 
                    type="number"
                    name="contactNo" 
                    value={this.state.contactNo}
                    onChange={this.handleChange}
                    />
                   
                    <br/>
                    <label className="heading-label" htmlFor="messageInput">
                        Your message...
                    </label>    
                    <br/>
                    <textarea
                    className="textarea-style" 
                    id="message" 
                    name="message" 
                    value={this.state.message}
                    onChange={this.handleChange}
                    rows="5"
                    cols="50"
                    />
                    <br/>
                    <span className="required-field">
                        * required
                    </span>
                    <br/>
                    <input className="contact-submit-button" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}