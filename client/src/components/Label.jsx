/* eslint-disable react/prop-types */
function Label({ htmlFor, label }) {
  return (
    <label
      className="main-page location-sign-up onboarding-profile-form-field__label t-14 t-black--light t-normal mt0 truncate onboarding-profile-form-field__label--required"
      htmlFor={htmlFor}
    >
      {label}{" "}
    </label>
  );
}
export default Label;
