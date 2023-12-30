import Logo from "../Logo";
import { NavLink } from "react-router-dom";
function AuthHeader() {
  return (
    <header>
      <div className="forget_password nav__base mercado-nav__base--white">
        <div className="forget_password nav__container">
          <Logo />

          <nav className="forget_password nav__content" role="navigation">
            <NavLink
              to="/auth/sign-in"
              className="forget_password nav__button__muted--signin nav_button_section"
            >
              Sign in
            </NavLink>
            <NavLink
              to="/auth/sign-up"
              className="forget_password nav__button__medium--joinnow nav_button_section"
            >
              Join now
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AuthHeader;
