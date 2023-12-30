import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createUser } from "../../apis/auth";
import AuthContainer from "../../components/common/AuthContainer";
import Wrapper from "../../components/common/Wrapper";
import DateFormField from "../../components/DateFormField";
import LiveSearch from "../../components/Search/LiveSearch";
import { useAuth, useNotification } from "../../hooks";

const validateStudentInfo = ({ universityId,startYear, endYear }) => {
  if (!universityId.trim()) return { ok: false, error: "University is missing!" };
  if (!startYear.trim()) return { ok: false, error: "Start year is missing!" };
  if (!endYear.trim()) return { ok: false, error: "End Year is missing!" };

  return { ok: true };
};

function IsStudent() {
  const [studentInfo, setStudentInfo] = useState({
    universityId: "",
    startYear: "",
    endYear: "",
  });

  const [studentInfoIsValid, setStudentInfoIsValid] = useState(false);

  const { authInfo } = useAuth();
  const { updateNotification } = useNotification();
  const { isLoggedIn } = authInfo;

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleChange = async function ({ target }) {
    const { name, value } = target;
    setStudentInfo({ ...studentInfo, [name]: value });
  };

  const setUniversity = function (id) {
    setStudentInfo({ ...studentInfo, universityId: id });
  };

  const handleForStudent = async function () {
    const { ok, error: er } = validateStudentInfo(studentInfo);
    if (!ok) return updateNotification("error", er);

    const { error, user } = await createUser({ ...state, ...studentInfo });
    if (error) return updateNotification("error", error);

    navigate("/auth/verification", {
      state: user,
      replace: true,
    });
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/feed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  useEffect(() => {
    setStudentInfoIsValid(
      studentInfo.universityId.trim().length > 0 &&
        studentInfo.startYear.trim().length > 0 &&
        studentInfo.endYear.trim().length > 0
    );
  }, [studentInfo]);

  return (
    <AuthContainer>
      <Wrapper>
        <LiveSearch
          label="School or College/University"
          name="university"
          onChange={handleChange}
          type="university"
          setUniversity={setUniversity}
        />
        <section>
          <h3 className="main-page visually-hidden">Time period</h3>
          <div className="location-sign-up onboarding-profile-edu__form-field-container">
            <DateFormField
              label="Start year"
              classes="mr5"
              name="startYear"
              onChange={handleChange}
            />

            <DateFormField
              label="End year (or expected)"
              name="endYear"
              onChange={handleChange}
            />
          </div>

          <div className="location-sign-up onboarding-profile-error-container"></div>
        </section>
        <footer className="location-sign-up mt5 text-align-center">
          <button
            className="main-page artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view full-width mb4"
            onClick={() => navigate(-1)}
          >
            <span className="artdeco-button__text">I’m not a student</span>
          </button>
          <button
            onClick={handleForStudent}
            disabled=""
            className={`main-page artdeco-button artdeco-button--4 artdeco-button--primary ${
              !studentInfoIsValid && "artdeco-button--disabled"
            } ember-view full-width`}
          >
            <span className="artdeco-button__text">Continue</span>
          </button>
        </footer>
      </Wrapper>
    </AuthContainer>
  );
}

export default IsStudent;
