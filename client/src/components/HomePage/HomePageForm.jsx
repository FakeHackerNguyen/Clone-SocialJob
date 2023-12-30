import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HomePageInputForm from "./HomePageInputForm";
import { isValidEmail } from "../../utils/helper";
import { useAuth, useNotification } from "../../hooks";

const validateInputInfo = ({ email, password }) => {
  if (!email.trim()) return { ok: false, error: "Email is missing!" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email!" };

  if (!password.trim()) return { ok: false, error: "Password is missing!" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 characters long!" };

  return { ok: true };
};
function HomePageForm() {
  const [inputInfo, setInputInfo] = useState({ email: "", password: "" });
  console.log(inputInfo);
  const { handleLogin, authInfo } = useAuth();
  const { updateNotification } = useNotification();
  const navigate = useNavigate();

  const { isLoggedIn } = authInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { ok, error } = validateInputInfo(inputInfo);
    if (!ok) return updateNotification("error", error);

    handleLogin(inputInfo.email, inputInfo.password);
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/feed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <div className="homepage hero-cta-form">
      <form onSubmit={handleSubmit}>
        <div className="homepage flex flex-col">
          <HomePageInputForm
            type="text"
            name="email"
            inputInfo={inputInfo}
            onSetInputInfo={setInputInfo}
          />
          <HomePageInputForm
            type="password"
            name="password"
            inputInfo={inputInfo}
            onSetInputInfo={setInputInfo}
          />
        </div>

        <div className="homepage flex justify-between sign-in-form__footer--full-width">
          <NavLink
            to="/auth/forget-password"
            className="homepage font-sans text-md font-bold link leading-regular sign-in-form__forgot-password--full-width"
          >
            Forgot password?
          </NavLink>

          <button
            className="homepage btn-md !btn-primary flex-shrink-0 cursor-pointer sign-in-form__submit-btn--full-width w-full max-w-[400px] mx-auto"
            type="submit"
          >
            Sign in
          </button>
        </div>
        <div className="homepage sign-in-form__divider left-right-divider pt-2 pb-3">
          <p className="homepage sign-in-form__divider-text font-sans text-sm text-color-text px-2">
            or
          </p>
        </div>
      </form>
    </div>
  );
}
export default HomePageForm;
