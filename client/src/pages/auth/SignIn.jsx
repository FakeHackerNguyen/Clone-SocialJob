import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import SignInForm from "../../components/SignIn/SignInForm";
import SignInHeader from "../../components/SignIn/SignInHeader";
import "../../styles/SignIn.css";

function SignIn() {
  return (
    <React.Fragment>
      <div id="app__container" className="login">
        <header>
          <Logo />
        </header>
        <main className="login app__content">
          <div className="login card-layout">
            <div id="login organic-div">
              <SignInHeader />
              <SignInForm />
            </div>
          </div>
          <div className="login join-now">
            New to LinkedIn?{" "}
            <NavLink
              to="/auth/sign-up"
              className="login btn__tertiary--medium"
              id="join_now"
            >
              Join now
            </NavLink>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
