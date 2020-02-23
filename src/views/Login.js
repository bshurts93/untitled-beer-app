import React, { Component } from "react";
import { Container } from "@material-ui/core";

import LoginCard from "../components/login/LoginCard";
import LoginHero from "../components/login/LoginHero";

class Login extends Component {
  render() {
    return (
      <Container>
        <LoginHero />
        <LoginCard />
      </Container>
    );
  }
}

export default Login;
