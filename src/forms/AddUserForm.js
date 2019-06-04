import React, { useState } from 'react'

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', phone: ''};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }

    handleSubmit(event) {
        console.log('name: ' + this.state.name + '     email: ' + this.state.email + '      phone: ' + this.state.phone )
        fetch('http://192.168.2.56:8080/contacts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'name': this.state.name,
                'email': this.state.email,
                'phone': this.state.phone,
            })
        }).then(res => res.json())
            .then((result) => {
                console.log(result)
            },
            (error) => {
                console.log(error)
            });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <label>
                    Email:
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                </label>
                <label>
                    Phone:
                    <input type="text" value={this.state.phone} onChange={this.handlePhoneChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddUserForm