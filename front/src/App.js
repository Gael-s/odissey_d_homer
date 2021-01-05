import "./App.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Profile from "./containers/Profile";



function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12}>
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} sm={6} container alignContent="center">
                  <img
                    src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                    alt="homer-wild"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <BrowserRouter>
                  <Switch>
                    <Route exact path ='/' component={SignIn} />
                    <Route  path ='/signin' component={SignIn} />
                    <Route  path ='/signup' component={SignUp} />
                    <Route  path ='/profile' component={Profile} />
                  </Switch>
                  </BrowserRouter>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
