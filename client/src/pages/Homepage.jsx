import React from "react";
import { NavLink } from "react-router-dom";
import HomePageForm from "../components/HomePage/HomePageForm";
import HomePageNav from "../components/HomePage/HomePageNav";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <React.Fragment>
      <HomePageNav />
      <main
        className="homepage flex flex-col items-center overflow-hidden min-h-[calc(100vh-76px-50px)]"
        id="main-content"
      >
        <section className="homepage section min-h-[560px] flex-nowrap pt-[40px] babybear:flex-col babybear:min-h-[0] babybear:px-mobile-container-padding babybear:pt-[24px]">
          <div className="homepage self-start relative flex-shrink-0 w-[55%] pr-[42px] babybear:w-full babybear:pr-[0px]">
            <h1 className="homepage main-heading text-color-text-accent-2 babybear:pb-[24px]">
              Welcome to your professional community
            </h1>
            <HomePageForm />
            <NavLink
              to="/auth/sign-up"
              className="homepage sign-in-form__join-cta btn-md btn-secondary w-column babybear:w-full block mb-3"
            >
              New to LinkedIn? Join now
            </NavLink>
          </div>
          <img
            className="homepage flip-rtl block z-[-1] w-[700px] h-[560px] relative flex-shrink babybear:w-[374px] babybear:h-[214px] babybear:static"
            alt="Welcome to your professional community"
            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          />
        </section>
      </main>
    </React.Fragment>
  );
}

export default Homepage;
