import React, { Component } from 'react'

export class SignUp extends Component {
constructor() {
    super();
    this.state = {
        email: 'email',
        firstname: '',
        lastname: '',
        password: '',
        passwordConfirmation: ''
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updateFirstnameField = this.updateFirstnameField.bind(this);
    this.updateLastnameField = this.updateLastnameField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.updatePasswordConfirmationField = this.updatePasswordConfirmationField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

updateEmailField(event) {
    this.setState({email: event.target.value});
}
updateFirstnameField(event) {
    this.setState({firstname: event.target.value});
}
updateLastnameField(event) {
    this.setState({lastname: event.target.value});
}
updatePasswordField(event) {
    this.setState({password: event.target.value});
}
updatePasswordConfirmationField(event) {
    this.setState({passwordConfirmation: event.target.value});
}
handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
}

    render() {
        const { email, firstname, lastname, password, passwordConfirmation } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>

                <h2>{firstname}</h2>
                <input type="text"
                value={firstname}
                onChange={this.updateFirstnameField}
                name="firstname"/>

                <h2>{lastname}</h2>
                <input type="text"
                value={lastname}
                onChange={this.updateLastnameField}
                name="lastname"/>

                <h2>{email}</h2>
                <input type="email"
                value={email}
                onChange={this.updateEmailField}
                name="email"/>

                <h2>{password}</h2>
                <input type="password"
                value={password}
                onChange={this.updatePasswordField}
                name="password"/>

                <h2>{passwordConfirmation}</h2>
                <input type="passwordConfirmation"
                value={passwordConfirmation}
                onChange={this.updatePasswordConfirmationField}
                name="passwordConfirmation"/>

                <button type="submit">Soumettre</button>
            </form>
        )
    }
}

export default SignUp;
