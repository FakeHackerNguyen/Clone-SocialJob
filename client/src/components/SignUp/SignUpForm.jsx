import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth, useNotification } from "../../hooks";
import { isValidEmail } from "../../utils/helper";

const validateUserInfoFirstStep = ({ email, password }) => {
  if (!email.trim()) return { ok: false, error: "Email is missing!" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email!" };

  if (!password.trim()) return { ok: false, error: "Password is missing!" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 characters long!" };

  return { ok: true };
};

const validateUserInfoSecondStep = ({ firstName, lastName }) => {
  if (!firstName.trim()) return { ok: false, error: "firstName is missing!" };
  if (!lastName.trim()) return { ok: false, error: "lastName is missing!" };
  return { ok: true };
};

function SignUpForm() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [nextStep, setNextStep] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { updateNotification } = useNotification();
  const navigate = useNavigate();
  const { authInfo } = useAuth();
  const { isLoggedIn } = authInfo;

  const handleChange = function ({ target }) {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleNextStep = function () {
    const { ok, error } = validateUserInfoFirstStep(userInfo);
    if (!ok) return updateNotification("error", error);
    else setNextStep(true);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    const { ok, error } = validateUserInfoSecondStep(userInfo);
    if (!ok) return updateNotification("error", error);

    navigate("/auth/about-location", {
      state: userInfo,
      replace: true,
    });
  };

  const handleShowPassword = function () {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/feed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <form className="sign-up join-form" onSubmit={handleSubmit}>
      <section className="sign-up join-form__form-body join-form__form-body--gsi">
        <div
          className={`sign-up join-form__form-input-container ${
            !nextStep ? "join-form__form-input-container--is-hidden" : ""
          } join-form__form-input-container--is-last-section join-form__form-input-container--is-section-2`}
        >
          <label className="sign-up input__label">First name</label>
          <input
            name="firstName"
            className="sign-up input__input"
            id="first-name"
            placeholder="First name"
            type="text"
            onChange={handleChange}
          />

          <label className="sign-up input__label ">Last name</label>
          <input
            name="lastName"
            className="sign-up input__input"
            id="last-name"
            placeholder="Last name"
            type="text"
            onChange={handleChange}
          />
        </div>

        <div
          className={`sign-up join-form__form-input-container ${
            nextStep ? "join-form__form-input-container--is-hidden" : ""
          } join-form__form-input-container--is-section-1`}
        >
          <label className="sign-up input__label ">Email</label>
          <input
            name="email"
            className="sign-up input__input"
            id="email-address"
            placeholder="Email"
            type="email"
            onChange={handleChange}
          />
          {/* <div className="sign-up inline-alert artdeco-inline-feedback artdeco-inline-feedback--error">
            <p className="sign-up artdeco-inline-feedback__message">
              Please enter your email address.
            </p>
          </div> */}
          <label className="sign-up input__label">
            Password (8+ characters)
          </label>

          <div className="sign-up join-form__show-password-container">
            <input
              name="password"
              className="sign-up input__input"
              id="password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
            />
            {/* <div className="sign-up inline-alert artdeco-inline-feedback artdeco-inline-feedback--error">
              <p className="sign-up artdeco-inline-feedback__message">
                Please enter your email address.
              </p>
            </div> */}
            <button
              className="sign-up join-form__show-password-btn"
              type="button"
              onClick={handleShowPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <p className="sign-up join-form__form-body-agreement">
          By clicking Agree &amp; Join, you agree to the LinkedIn{" "}
          <NavLink className="sign-up join-form__form-body-agreement-item-link">
            User Agreement
          </NavLink>
          ,{" "}
          <NavLink className="sign-up join-form__form-body-agreement-item-link">
            Privacy Policy
          </NavLink>
          , and{" "}
          <NavLink className="sign-up join-form__form-body-agreement-item-link">
            Cookie Policy
          </NavLink>
          .
        </p>

        {!nextStep && (
          <button
            className="sign-up join-form__form-body-submit-button"
            id="join-form-submit"
            type="button"
            onClick={handleNextStep}
          >
            Agree &amp; Join
          </button>
        )}
        {nextStep && (
          <button
            className="sign-up join-form__form-body-submit-button join-form__form-body-submit-button--no-agreement-text"
            id="join-form-submit"
            type="submit"
          >
            Continue
          </button>
        )}
      </section>
      <p className="sign-up main__sign-in-container">
        Already on LinkedIn?{" "}
        <NavLink to="/auth/sign-in" className="sign-up main__sign-in-link">
          Sign in
        </NavLink>
      </p>
    </form>
  );
}
export default SignUpForm;
