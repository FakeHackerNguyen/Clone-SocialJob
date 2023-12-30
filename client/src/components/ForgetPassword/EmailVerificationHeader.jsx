/* eslint-disable react/prop-types */
function EmailVerificationHeader({ state }) {
  return (
    <div className="location-sign-up onboarding-header mhA text-align-center">
      <h1 className="location-sign-up text-heading-xlarge pt6 pb3">
        Confirm your email
      </h1>

      <h2 className="location-sign-up onboarding-header__subtitle">
        {`Type in the code we sent to ${state?.email} `}
        {/* <button
          type="button"
          className="location-sign-up onboarding-header__subtitle onboarding-header__subtitle-edit-btn t-bold"
        >
          Edit email
        </button> */}
      </h2>
    </div>
  );
}
export default EmailVerificationHeader;
