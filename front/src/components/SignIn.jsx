import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, SnackbarContent } from "@material-ui/core";

import "./SignUp.css"


export class SignIn extends Component {
constructor() {
    super();
    this.state = {
        email: '',
        pass: '',
        flash: '',
        open: false
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePassField = this.updatePassField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
};

updateEmailField(event) {
    this.setState({email: event.target.value});
}

updatePassField(event) {
    this.setState({pass: event.target.value});
}

handleSubmit(event) {
    event.preventDefault();
    fetch("/auth/signin",
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
        const { email,  pass,  flash } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign In</h1>

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
                <Link to='/signup'>Sign Up</Link>
                <Link to='/profile'>
                <Button type="submit" variant='contained'>Sign In</Button>
                </Link>
                <SnackbarContent open={!this.setState.open} autohideduration={6000} message={flash} onClose={this.setState.open} />
            </form>
        )
    }
}

export default SignIn;
