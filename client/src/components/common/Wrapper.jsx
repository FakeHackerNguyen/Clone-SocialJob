/* eslint-disable react/prop-types */
import CustomHeader from "./CustomHeader";

function Wrapper({
  children,
  contentHeader = "Your profile helps you discover new people and opportunities",
  isLocation = false,
}) {
  return (
    <section className="location-sign-up onboarding-widget onboarding-page onboarding-page--h-center onboarding-profile-edit">
      <CustomHeader content={contentHeader} isLocation={isLocation} />

      <section className="location-sign-up onboarding-page__content display-flex justify-space-between">
        <section className="location-sign-up onboarding-widget__single-card-container onboarding-profile-edit__container mhA">
          <div className="location-sign-up onboarding-profile-form full-width">
            {children}
          </div>
        </section>
      </section>
    </section>
  );
}
export default Wrapper;
