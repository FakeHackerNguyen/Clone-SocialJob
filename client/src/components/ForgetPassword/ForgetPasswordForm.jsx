import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { forgetPassword } from "../../apis/auth";

function ForgetPasswordForm() {
  const [email, setEmail] = useState("");

  const handleChange = function (e) {
    setEmail(e.target.value);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    await forgetPassword({ email });
  };

  return (
    <form
      id="reset-password-form"
      className="forget_password reset__password__form"
      onSubmit={handleSubmit}
    >
      <div className="forget_password form__content">
        <div className="forget_password non__fastrack form__input--floating mt-24">
          <input
            id="username"
            maxLength="128"
            type="text"
            name="username"
            className="forget_password"
            onChange={handleChange}
          />
          <label className="forget_password form__label--floating">Email</label>
        </div>

        <p className="forget_password form-footer mt-24 t-14">
          We’ll send a verification code to this email or phone number if it
          matches an existing LinkedIn account.
        </p>
      </div>

      <div className="forget_password form__action ">
        <button
          className="forget_password form__submit"
          id="reset-password-submit-button"
          type="submit"
        >
          Next
        </button>

        <NavLink
          id="back-button-password-reset"
          className="forget_password back_button"
          to={"/"}
        >
          Back
        </NavLink>
      </div>
    </form>
  );
}
export default ForgetPasswordForm;
