import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth, useNotification } from "../../hooks/index";
import { isValidEmail } from "../../utils/helper";

const validateUserInfo = ({ email, password }) => {
  if (!email.trim()) return { ok: false, error: "Email is missing!" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email!" };

  if (!password.trim()) return { ok: false, error: "Password is missing!" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 characters long!" };

  return { ok: true };
};

function SignInForm() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, authInfo } = useAuth();
  const { updateNotification } = useNotification();
  const navigate = useNavigate();

  const { isLoggedIn } = authInfo;

  const handleChange = function ({ target }) {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleShowPassword = function () {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    const { ok, error } = validateUserInfo(userInfo);
    if (!ok) return updateNotification("error", error);

    handleLogin(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/feed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <form className="login login__form" onSubmit={handleSubmit}>
      <div className="login form__input--floating mt-24">
        <input
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          className="login"
        />
        <label
          className="login form__label--floating"
          htmlFor="email"
          aria-hidden="true"
        >
          Email
        </label>
      </div>
      <div className="login form__input--floating mt-24">
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          className="login sign-in"
          onChange={handleChange}
        />
        <label
          className="login form__label--floating"
          htmlFor="password"
          aria-hidden="true"
        >
          Password
        </label>
        <span
          id="login password-visibility-toggle"
          className="login button__password-visibility"
          role="button"
          onClick={handleShowPassword}
        >
          {showPassword ? "hide" : "show"}
        </span>
      </div>
      <NavLink
        to="/auth/forget-password"
        className="login btn__tertiary--medium forgot-password"
      >
        Forgot password?
      </NavLink>
      <div className="login login__form_action_container">
        <button
          className="login btn__primary--large from__button--floating"
          type="submit"
          aria-label="Sign in"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
export default SignInForm;
