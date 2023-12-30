import AuthHeader from "../../components/common/AuthHeader";
import FakeEmailVerificationForm from "../../components/ForgetPassword/FakeEmailVerificationForm";
import FakeEmailVerificationHeader from "../../components/ForgetPassword/FakeEmailVerificationHeader";
import "../../styles/EmailVerification.css";

function EmailVerification() {
  return (
    <div id="app__container" className="verification">
      <AuthHeader />
      <main className="verification app__content" role="main">
        <div id="card-container" className="verification card-layout">
          <FakeEmailVerificationHeader />

          <div className="verification content__body">
            <FakeEmailVerificationForm />
          </div>
        </div>
      </main>
    </div>
  );
}
export default EmailVerification;
