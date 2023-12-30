/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { resendEmailVerificationToken, verifyUserEmail } from "../../apis/auth";
import { useAuth, useNotification } from "../../hooks";

function EmailVerificationHandler() {
  const [OTP, setOTP] = useState("");
  const [OTPIsValid, setOTPIsValid] = useState(false);
  const [resendState, setResendState] = useState(false);

  const { updateNotification } = useNotification();
  const { authInfo } = useAuth();
  const { isLoggedIn } = authInfo;

  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();

  const handleChange = function ({ target }) {
    const { value } = target;
    setOTP(value);
  };

  const handleVerification = async function () {
    const { error, message } = await verifyUserEmail({
      OTP,
      userId: state._id,
    });
    if (error) return updateNotification("error", error);

    updateNotification("success", message);
    navigate("/auth/sign-in", { replace: true });
  };

  const handleResend = async function () {
    const { error, message } = await resendEmailVerificationToken({
      userId: state._id,
    });
    if (error) return updateNotification("error", error);

    updateNotification("success", message);
    setResendState(true);
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/feed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  useEffect(() => {
    setOTPIsValid(OTP.trim().length < 7 && OTP.trim().length > 0);
  }, [OTP]);

  return (
    <div className="location-sign-up onboarding-email-confirmation__main text-align-center mt2 mhA">
      <label
        className="main-page visually-hidden"
        htmlFor="email-confirmation-input"
      >
        Email confirmation input
      </label>

      <input
        id="email-confirmation-input"
        className="main-page location-sign-up ember-text-field ember-view onboarding-email-confirmation__code-input text-align-center"
        autoFocus="autofocus"
        placeholder="______"
        type="number"
        onChange={handleChange}
      />
      <div className="main-page location-sign-up artdeco-card display-flex mt5 p4">
        <div className="location-sign-up fl onboarding-gdpr-message__icon">
          <svg
            role="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            data-test-icon="shield-medium"
            className="main-page"
          >
            <use
              href="#shield-medium"
              width="24"
              height="24"
              className="main-page"
            ></use>
          </svg>
        </div>

        <div className="pl1 text-align-left">
          <p className="t-14 t-black t-bold">Your privacy is important</p>
          <p className="t-12 t-black--light t-normal mt1">
            We may send you member updates, recruiter messages, job suggestions,
            invitations, reminders and promotional messages from us and our
            partners. You can change your <NavLink to="/">preferences</NavLink>{" "}
            anytime.
          </p>
        </div>
      </div>
      <p className="mt3">
        <span className="v-align-middle">Didn’t receive the code?&nbsp;</span>
        <button
          onClick={handleResend}
          aria-label="Click to resend email confirmation code."
          className="main-page artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
          type="button"
        >
          <span className="main-page artdeco-button__text">Send again</span>
        </button>
      </p>
      {resendState && (
        <div
          className="main-page artdeco-inline-feedback artdeco-inline-feedback--success ember-view"
          role="alert"
        >
          <span className="main-page artdeco-inline-feedback__message">
            <p
              className="location-sign-up onboarding-email-confirmation__code-sent pt2"
              aria-live="polite"
            >
              <svg
                role="none"
                aria-hidden="true"
                className="main-page v-align-middle"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                data-test-icon="signal-success-medium"
              >
                <use
                  href="#signal-success-medium"
                  width="24"
                  height="24"
                  className="main-page"
                ></use>
              </svg>{" "}
              <span className="v-align-middle">Email sent</span>
            </p>
          </span>
        </div>
      )}
      <button
        onClick={handleVerification}
        disabled=""
        className={`main-page artdeco-button artdeco-button--4 artdeco-button--primary ${
          !OTPIsValid && "artdeco-button--disabled"
        } ember-view full-width mt5 mb4 t-18 t-18--open t-white t-normal`}
      >
        <span className="main-page artdeco-button__text">
          Agree &amp; Confirm
        </span>
      </button>
    </div>
  );
}
export default EmailVerificationHandler;
