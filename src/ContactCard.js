import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./ContactCard.css"

class ContactCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="contact">
                <h1>Name: { this.props.name }</h1>
                <p>Email: { this.props.email }</p>
                <p>Mobile Phone Number: { this.props.mobile }</p>
                <p>Work Phone Number: { this.props.work }</p>
            </div>
        );
    }
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobile: PropTypes.number.isRequired,
    work: PropTypes.number.isRequired
}

export default ContactCard;