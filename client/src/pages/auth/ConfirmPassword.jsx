import AuthHeader from "../../components/common/AuthHeader";
import ConfirmPasswordForm from "../../components/ForgetPassword/ConfirmPasswordForm";
import ConfirmPasswordHeader from "../../components/ForgetPassword/ConfirmPasswordHeader";
import "../../styles/ConfirmPassword.css";

function ConfirmPassword() {
  return (
    <div id="app__container" className="confirm_password glimmer">
      <AuthHeader />
      <main className="confirm_password app__content" role="main">
        <div
          id="card-container"
          className="confirm_password card-layout container-pos"
        >
          <ConfirmPasswordHeader />
          <div className="confirm_password content__body">
            <ConfirmPasswordForm />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ConfirmPassword;
