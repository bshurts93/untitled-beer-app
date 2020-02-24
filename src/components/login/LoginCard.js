import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardActions,
  Button,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    zIndex: 100,
    minWidth: 275,
    marginTop: "-50px",
    position: "relative",
    margin: "0px 25px"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function LoginCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>Sign in with</Typography>
        <Grid container spacing={3}>
          <Grid item xs>
            <Typography>Login with Facebook</Typography>
          </Grid>
          <Grid item xs>
            <Typography>Login With Google</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <TextField
              fullWidth
              id="login-email"
              label="Email"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <TextField
              fullWidth
              id="login-password"
              label="Password"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <FormControlLabel
              value="top"
              control={<Checkbox color="primary" />}
              label="Stay signed in"
              labelPlacement="right"
            />
          </Grid>
          <Grid item xs>
            <CardActions>
              <Button size="small">Forgot password?</Button>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
