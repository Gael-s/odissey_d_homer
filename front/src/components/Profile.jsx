import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText, Button } from "@material-ui/core";

export class Profile extends Component {
    constructor() {
        super();
        this.state  = {
            profile: {
                email:  "homer.simpson@wildcodeschool.fr",
                firstname:  "Homer",
                lastname:  "Simpson"
            }
        }
    };
    render() {
        const { email, firstname, lastname } = this.state.profile;
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
            </>
        )
    }
}

export default Profile
