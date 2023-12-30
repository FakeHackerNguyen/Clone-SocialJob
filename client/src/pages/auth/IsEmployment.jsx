import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createUser } from "../../apis/auth";
import AuthContainer from "../../components/common/AuthContainer";
import Wrapper from "../../components/common/Wrapper";
import ProfileFormField from "../../components/ProfileFormField";
import LiveSearch from "../../components/Search/LiveSearch";
import { useAuth, useNotification } from "../../hooks";

const validateEmploymentInfo = ({ titleJob, companyId }) => {
  if (!titleJob.trim()) return { ok: false, error: "Title job is missing!" };
  if (!companyId.trim()) return { ok: false, error: "Company is missing!" };

  return { ok: true };
};

function IsEmployment() {
  const [employmentInfo, setEmploymentInfo] = useState({
    titleJob: "",
    typeEmployment: "",
    companyId: "",
  });

  console.log(employmentInfo);

  const [employmentInfoIsValid, setEmploymentInfoIsValid] = useState(false);

  const { authInfo } = useAuth();
  const { updateNotification } = useNotification();
  const { isLoggedIn } = authInfo;

  const navigate = useNavigate();
  const { state } = useLocation();

  const setCompany = function (id) {
    setEmploymentInfo({ ...employmentInfo, companyId: id });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmploymentInfo({ ...employmentInfo, [name]: value });
  };

  const handleForEmployment = async function () {
    const { ok, error: er } = validateEmploymentInfo(employmentInfo);
    if (!ok) return updateNotification("error", er);

    const { error, user } = await createUser({ ...state, ...employmentInfo });
    if (error) return updateNotification("error", error);

    navigate("/auth/verification", {
      state: user,
      replace: true,
    });
  };

  const handleForStudent = function () {
    navigate("/auth/is-student", {
      state,
    });
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/feed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  useEffect(() => {
    setEmploymentInfoIsValid(
      employmentInfo.titleJob.trim().length > 0 &&
        employmentInfo.typeEmployment.trim().length > 0 &&
        employmentInfo.companyId.trim().length > 0
    );
  }, [employmentInfo]);

  return (
    <AuthContainer>
      <Wrapper>
        <ProfileFormField
          label="Most recent job title"
          name="titleJob"
          employmentInfo={employmentInfo}
          onSetEmploymentInfo={setEmploymentInfo}
        />
        <div className="location-sign-up onboarding-employment-type-picker">
          <div className="location-sign-up onboarding-profile-form-field">
            <label
              className="main-page location-sign-up onboarding-profile-form-field__label t-14 t-black--light t-normal mt0 truncate"
              htmlFor="typeahead-input-for-employment-type-picker"
            >
              Employment type
            </label>

            <select
              className="location-sign-up onboarding-profile-typeahead__input onboarding-input"
              name="typeEmployment"
              onChange={handleChange}
            >
              <option>Select one</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Self-employed</option>
              <option>Freelance</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Apprenticeship</option>
              <option>Seasonal</option>
            </select>

            <div className="location-sign-up onboarding-profile-error-container"></div>
          </div>
        </div>
        <LiveSearch
          label="Most recent company"
          name="company"
          type="company"
          setCompany={setCompany}
        />
        <footer className="location-sign-up mt5 text-align-center">
          <button
            className="main-page artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view full-width mb4"
            onClick={handleForStudent}
          >
            <span className="artdeco-button__text">I’m a student</span>
          </button>
          <button
            onClick={handleForEmployment}
            disabled=""
            className={`main-page artdeco-button artdeco-button--4 artdeco-button--primary ${
              !employmentInfoIsValid ? "artdeco-button--disabled" : ""
            } ember-view full-width`}
          >
            <span className="artdeco-button__text">Continue</span>
          </button>
        </footer>
      </Wrapper>
    </AuthContainer>
  );
}

export default IsEmployment;
