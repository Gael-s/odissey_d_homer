import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, SnackbarContent } from "@material-ui/core";

import "./SignUp.css"

export class SignUp extends Component {
constructor() {
    super();
    this.state = {
        firstname: '',
        lastname: '',
        email: '',
        pass: '',
        passConfirmation: '',
        flash: '',
        open: false
    };
    this.updateFirstnameField = this.updateFirstnameField.bind(this);
    this.updateLastnameField = this.updateLastnameField.bind(this);
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePassField = this.updatePassField.bind(this);
    this.updatePassConfirmationField = this.updatePassConfirmationField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
};

updateEmailField(event) {
    this.setState({email: event.target.value});
}
updateFirstnameField(event) {
    this.setState({firstname: event.target.value});
}
updateLastnameField(event) {
    this.setState({lastname: event.target.value});
}
updatePassField(event) {
    this.setState({pass: event.target.value});
}
updatePassConfirmationField(event) {
    this.setState({passConfirmation: event.target.value});
}
handleSubmit(event) {
    event.preventDefault();
    fetch("/auth/signup",
{
    method:  'POST',
    headers:  new  Headers({
        'Content-Type':  'application/json'
    }),
    body:  JSON.stringify(this.state),
})
.then(res  =>  res.json())
.then(
    res  =>  this.setState({"flash":  res.flash}),
    err  =>  this.setState({"flash":  err.flash})
)
}

    render() {
        const { email, firstname, lastname, pass, passConfirmation, flash } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>

                <h2>{firstname}</h2>
                <TextField type="text"
                value={firstname}
                onChange={this.updateFirstnameField}
                name="firstname"/>

                <h2>{lastname}</h2>
                <TextField type="text"
                value={lastname}
                onChange={this.updateLastnameField}
                name="lastname"/>

                <h2>{email}</h2>
                <TextField type="email"
                value={email}
                onChange={this.updateEmailField}
                name="email"/>

                <h2>{pass}</h2>
                <TextField type="password"
                value={pass}
                onChange={this.updatePassField}
                name="password"/>

                <h2>{passConfirmation}</h2>
                <TextField type="passwordConfirmation"
                value={passConfirmation}
                onChange={this.updatePassConfirmationField}
                name="passwordConfirmation"/>
                <Link to='/signin'>Sign In</Link>
                <Button type="submit" variant='contained'>Soumettre</Button>
                <SnackbarContent open={!this.setState.open} autohideuration={6000} message={flash} onClose={this.setState.open} />
            </form>
        )
    }
}

export default SignUp;
