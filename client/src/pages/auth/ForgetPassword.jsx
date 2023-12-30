import AuthHeader from "../../components/common/AuthHeader";
import ForgetPasswordForm from "../../components/ForgetPassword/ForgetPasswordForm";
import ForgetPasswordHeader from "../../components/ForgetPassword/ForgetPasswordHeader";
import "../../styles/ForgetPassword.css";
function ForgetPassword() {
  return (
    <div id="app__container" className="forget_password">
      <AuthHeader />
      <main className="forget_password app__content">
        <div id="card-container" className="forget_password card-layout">
          <div id="password-reset-otp-div">
            <ForgetPasswordHeader />
            <div className="forget_password content__body">
              <ForgetPasswordForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default ForgetPassword;
