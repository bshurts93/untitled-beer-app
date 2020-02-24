import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  heroImg: {
    width: "100%",
    borderRadius: "0px 0px 19px 19px",
    marginTop: "-50px",
    zIndex: 0
  },
  headerText: {
    fontSize: "35px",
    fontWeight: "bold",
    position: "absolute",
    bottom: "70px",
    padding: "0 20px",
    width: "55%",
    color: "#fff",
    lineHeight: "38px"
  },
  heroContainer: {
    position: "relative"
  }
});

export default function LoginHero() {
  const classes = useStyles();

  return (
    <div className={classes.heroContainer}>
      <img
        className={classes.heroImg}
        src="https://images.unsplash.com/photo-1462664450306-25ad625a342b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
        alt="Login Background"
      />
      <Typography className={classes.headerText}>
        Beer Education. One Pint At A Time.
      </Typography>
    </div>
  );
}
