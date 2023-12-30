import { useLocation } from "react-router-dom";
import AuthContainer from "../../components/common/AuthContainer";
import EmailVerificationHandler from "../../components/ForgetPassword/EmailVerificationHandler";
import EmailVerificationHeader from "../../components/ForgetPassword/EmailVerificationHeader";

function EmailVerification() {
  const { state } = useLocation();

  return (
    <AuthContainer>
      <div className="location-sign-up onboarding-widget pt4 onboarding-email-confirmation text-align-center">
        <EmailVerificationHeader state={state} />
        <EmailVerificationHandler />
      </div>
    </AuthContainer>
  );
}

export default EmailVerification;
