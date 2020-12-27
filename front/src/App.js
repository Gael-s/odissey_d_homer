import "./App.css";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12}>
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} sm={6} alignContent="center">
                  <img
                    src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                    alt="homer-wild"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SignUp />
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
