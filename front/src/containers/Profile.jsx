import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText, Button, SnackbarContent } from "@material-ui/core";



export class Profile extends Component {
    constructor() {
        super();
        this.state  = {
            profile: {
                email:  "homer.simpson@wildcodeschool.fr",
                firstname:  "Homer",
                lastname:  "Simpson",
                flash: "",
                openFlash: false
            }
        }
    };
    render() {
        const { email, firstname, lastname, flash, openFlash } = this.state.profile;
        return (
            <>
            <List>
                <ListItem>
                    <ListItemText primary="email" secondary={email}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="firstname" secondary={firstname}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="lastname" secondary={lastname}/>
                </ListItem>
                <Link to='/signin'>
                    <Button type="submit" variant='contained'>Sign Out</Button>
                </Link>
            </List>
            <SnackbarContent
            open={openFlash}
            autohideduration={6000}
            message={flash}
            onClose={() => openFlash(false)}
        />
            </>
        )
    }
}

export default Profile
