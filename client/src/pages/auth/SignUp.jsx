import SignUpForm from "../../components/SignUp/SignUpForm";
import SignUpHeader from "../../components/SignUp/SignUpHeader";
import "../../styles/SignUp.css";

function SignUp() {
  return (
    <div className="sign-up page page--is-g-mode">
      <main className="sign-up main max-w-screen-content-max-w">
        <SignUpHeader />
        <div className="sign-up join-form-wrapper">
          <SignUpForm />
        </div>
      </main>
    </div>
  );
}

export default SignUp;
