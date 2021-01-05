import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { TextField, Button, SnackbarContent } from "@material-ui/core";
import { connect } from "react-redux";

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
      flash: "",
      openFlash: false,
      doRedirect: false,
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePassField = this.updatePassField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  };

  updatePassField(event) {
    this.setState({ pass: event.target.value });
  };

handleSubmit(event) {
  event.preventDefault();
  fetch("/auth/signin", {
      method: "POST",
      headers: new Headers({
          "Content-Type": "application/json",
      }),
      body: JSON.stringify(this.state),
  })
  .then(
      (res) => {
          if (res.ok) return res.json()
          else throw new Error(res.statusText)
      },
    )
  .then(
      (res) => this.setState({ flash: res.flash, doRedirect: true, openFlash: true }),
      (res) => this.props.dispatch({
        type: "CREATE_SESSION",
        email: res.email,
        pass: res.pass,
        flash: res.flash    
        }),  console.log(this.props), 
      (err) => this.setState({ flash: err.flash, doRedirect: false, openFlash: true })
    )
  
};


  render() {
    const { email, pass, doRedirect, openFlash, flash } = this.state;
    console.log(this.state);
    
        
    return (
        <>
      <form onSubmit={this.handleSubmit}>
        <h1>Sign In</h1>

        <h2>{email}</h2>
        <TextField
          type="email"
          value={email}
          onChange={this.updateEmailField}
          name="email"
        />

        <h2>{pass}</h2>
        <TextField
          type="password"
          value={pass}
          onChange={this.updatePassField}
          name="password"
        />
        <Link to="/signup">Sign Up</Link>
        <Button type="submit" variant="contained">Sign In</Button>
          { doRedirect && <Redirect to="/profile" /> }
          
        <SnackbarContent
            open={openFlash}
            autohideduration={6000}
            message={flash}
            onClose={() => openFlash(false)}
        />
      </form>
          
      </>
    );
  }
}

function mapStateToProps(state) {
// console.log(state.auth.token)  
    return {
    flash: state.auth.token,
  };
}
export default connect(mapStateToProps)(SignIn);
