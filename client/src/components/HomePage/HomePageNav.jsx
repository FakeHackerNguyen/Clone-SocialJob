import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import HomePageCustomLink from "./HomePageCustomLink";
function HomePageNav() {
  return (
    <nav className="homepage nav pt-1.5 pb-2 flex items-center justify-between relative flex-nowrap mamabear:flex-wrap mamabear:gap-y-1 babybear:flex-wrap babybear:py-1.5">
      <Logo />
      <ul className="homepage top-nav-menu flex items-center mr-0.5 babybear:hidden mamabear:hidden after:up-down-divider after:!h-[37px] nav__menu order-3">
        <HomePageCustomLink to="/people" />
        <HomePageCustomLink to="/jobs" />
      </ul>
      <div className="homepage nav__cta-container order-3 flex gap-x-1 justify-end min-w-[100px] flex-nowrap flex-shrink-0  babybear:flex-wrap flex-2">
        <NavLink
          to="auth/sign-up"
          className="homepage nav__button-tertiary btn-md btn-tertiary"
        >
          Join now
        </NavLink>

        <NavLink
          to="auth/sign-in"
          className="homepage nav__button-secondary btn-md btn-secondary-emphasis"
        >
          Sign in
        </NavLink>
      </div>
    </nav>
  );
}

export default HomePageNav;
