function EmailVerificationForm() {
  return (
    <form
      className="verification pin-verification-form card__view__pin__form"
      id="email-pin-challenge"
    >
      <div className="verification form__content">
        <div className="verification form__input--text mt-32">
          <input
            className="verification input_verification_pin"
            maxLength="6"
            type="number"
            pattern="[0-9]*"
            id="input__email_verification_pin"
            placeholder="6 digit code"
          />
        </div>
        <button
          className="verification challenge-form__footer resend__link"
          id="btn-resend-pin"
          type="button"
        >
          Resend code
        </button>
      </div>
      <div className="verification form__action form__action--mt22">
        <button
          className="verification form__submit form__submit--stretch"
          id="pin-submit-button"
          type="submit"
        >
          Submit
        </button>
      </div>
      <p className="verification help__text">
        If you don&apos;t see a code in your inbox, check your spam folder. If
        it&apos;s not there, the email address may not be confirmed, or it may
        not match an existing LinkedIn account.
      </p>
    </form>
  );
}
export default EmailVerificationForm;
