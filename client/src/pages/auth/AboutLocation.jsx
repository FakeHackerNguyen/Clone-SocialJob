import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContainer from "../../components/common/AuthContainer";
import Wrapper from "../../components/common/Wrapper";
import ProfileFormField from "../../components/ProfileFormField";
import { useAuth, useNotification } from "../../hooks";
import "../../styles/SignUp/bytr6lg0vp4md8qe2be7ptiqt.css";

const validateLocationInfo = ({ country, city }) => {
  if (!country.trim()) return { ok: false, error: "Country is missing!" };
  if (!city.trim()) return { ok: false, error: "City is missing!" };

  return { ok: true };
};

function LocationSignUp() {
  const [locationInfo, setLocationInfo] = useState({
    country: "",
    city: "",
  });

  const { state } = useLocation();
  const { authInfo } = useAuth();
  const { updateNotification } = useNotification();
  const { isLoggedIn } = authInfo;

  const navigate = useNavigate();

  const handleNext = function () {
    const { ok, error } = validateLocationInfo(locationInfo);
    if (!ok) return updateNotification("error", error);

    navigate("/auth/is-employment", {
      state: { ...state, ...locationInfo },
      replace: true,
    });
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/feed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <AuthContainer>
      <Wrapper
        contentHeader={`Welcome, ${state?.firstName} ${state?.lastName}! What's your location?`}
        isLocation={true}
      >
        <ProfileFormField
          label="Country/Region"
          name="country"
          locationInfo={locationInfo}
          onSetLocationInfo={setLocationInfo}
        />
        <ProfileFormField
          label="City/District"
          name="city"
          locationInfo={locationInfo}
          onSetLocationInfo={setLocationInfo}
        />
        <footer className="location-sign-up mt5 text-align-center">
          <button
            className="main-page location-sign-up artdeco-button artdeco-button--4 artdeco-button--primary ember-view full-width"
            onClick={handleNext}
          >
            <span className="location-sign-up artdeco-button__text">Next</span>
          </button>
        </footer>
      </Wrapper>
    </AuthContainer>
  );
}

export default LocationSignUp;
