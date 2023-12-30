import SVG from "../SVG";
import AuthNav from "./AuthNav";

// eslint-disable-next-line react/prop-types
function AuthContainer({ children }) {
  return (
    <div className="main-page location-sign-up application-outlet">
      <SVG />
      <div className="main-page location-sign-up authentication-outlet nav-hidden">
        <div className="main-page location-sign-up onboarding-main">
          <AuthNav />

          <div className="main-page location-sign-up scaffold-layout scaffold-layout--breakpoint-xl scaffold-layout--main scaffold-layout--reflow">
            <div className="main-page location-sign-up scaffold-layout__inner scaffold-layout-container scaffold-layout-container--reflow">
              <div className="main-page location-sign-up scaffold-layout__row scaffold-layout__content scaffold-layout__content--main">
                <main className="main-page location-sign-up scaffold-layout__main">
                  <div className="location-sign-up onboarding-main__container">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="location-sign-up application-outlet__overlay-container">
        <aside
          className="location-sign-up coach-container
            "
          id="coach-container"
        ></aside>
      </div>

      <div id="ember13" className="location-sign-up ember-view"></div>

      <img
        src="https://px.ads.linkedin.com/collect/?pid=6883&amp;fmt=gif&amp;_t=1699011930046"
        alt=""
        className="location-sign-up third-party-tracking-pixel hidden"
      /> */}
    </div>
  );
}

export default AuthContainer;
