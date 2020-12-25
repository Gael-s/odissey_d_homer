import React, { Component } from 'react'

export class SignUp extends Component {
constructor() {
    super();
    this.state = {
        email: 'email'
    };
    this.updateEmailField = this.updateEmailField.bind(this);
}

updateEmailField(event) {
    this.setState({email: event.target.value});
}


    render() {
        const { email } = this.state;
        return (
            <div>
                <h1>{email}</h1>
                <input type="email"
                value={email}
                onChange={this.updateEmailField}
                name="email"/>
            </div>
        )
    }
}

export default SignUp;
