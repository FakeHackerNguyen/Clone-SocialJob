import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword, verifyPasswordResetToken } from "../../apis/auth";

function ConfirmPasswordForm() {
  const [password, setPassword] = useState({
    one: "",
    two: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const id = searchParams.get("id");

  const navigate = useNavigate();

  const isValidToken = async () => {
    const data = await verifyPasswordResetToken(token, id);
    if (data?.error) return;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPassword({ ...password, [name]: value });
  };

  const handleShowPassword = function () {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password.one.trim()) return;

    if (password.one.trim().length < 8) return;

    if (password.one !== password.two) return;

    const data = await resetPassword({
      newPassword: password.one,
      userId: id,
      token,
    });

    if (data?.error) return;

    navigate("/auth/sign-in", { replace: true });
  };

  useEffect(() => {
    isValidToken();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      id="confirm-password-reset-form"
      className="confirm_password reset__password__form"
    >
      <div className="confirm_password form__content ">
        <div className="confirm_password form__input--floating mt-24">
          <input
            id="newPassword"
            maxLength="200"
            type={showPassword ? "text" : "password"}
            className="confirm_password"
            name="one"
            onChange={handleChange}
          />
          <label className="confirm_password form__label--floating">
            New password
          </label>
          <span
            id="password-visibility-toggle"
            className="confirm_password button__password-visibility"
            onClick={handleShowPassword}
          >
            show
          </span>
        </div>
        <div className="confirm_password form__input--floating mt-24">
          <input
            id="confirmPassword"
            maxLength="200"
            type={showPassword ? "text" : "password"}
            className="confirm_password"
            name="two"
            onChange={handleChange}
          />
          <label className="confirm_password form__label--floating">
            Retype new password
          </label>
        </div>
      </div>

      <div className="confirm_password form__action ">
        <button
          className="confirm_password form__submit form__submit--stretch"
          id="reset-password-submit-button"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default ConfirmPasswordForm;
