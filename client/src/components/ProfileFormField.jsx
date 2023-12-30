/* eslint-disable react/prop-types */
import { useState } from "react";
import { searchCountry, searchCity } from "../apis/country";
import Label from "./Label";

function ProfileFormField({
  label,
  name,
  locationInfo,
  onSetLocationInfo,
  employmentInfo,
  onSetEmploymentInfo,
}) {
  const [results, setResults] = useState([]);
  const [openList, setOpenList] = useState(false);
  const [selected, setSelected] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setSelected(value);
    if (name === "country") {
      const { error, results } = await searchCountry({ name: value });
      if (error) return;

      setResults(results);
      setOpenList(true);
    } else if (name === "city") {
      const { error, results } = await searchCity({
        country: locationInfo.country,
        name: value,
      });
      if (error) return;

      setResults(results);
      setOpenList(true);
    } else {
      onSetEmploymentInfo({
        ...employmentInfo,
        [name]: value,
      });
    }
  };

  return (
    <div className="main-page location-sign-up onboarding-profile-form-field">
      <Label label={label} />

      <div className="main-page location-sign-up onboarding-profile-typeahead">
        <div className="main-page location-sign-up search-basic-typeahead search-vertical-typeahead onboarding-profile-typeahead__basic-typeahead relative">
          <input
            id="typeahead-input-for-country"
            className="main-page location-sign-up onboarding-profile-typeahead__input onboarding-input "
            required=""
            name={name}
            type="text"
            onChange={handleChange}
            value={selected}
          />
          {openList && results.length !== 0 && (
            <div
              className="main-page location-sign-up basic-typeahead__triggered-content"
              role="listbox"
            >
              {results.map((value, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (name === "country") {
                      setSelected(value.name);
                      setOpenList(false);
                      onSetLocationInfo({
                        ...locationInfo,
                        [name]: value.name,
                      });
                    } else {
                      setSelected(value);
                      setOpenList(false);
                      onSetLocationInfo({
                        ...locationInfo,
                        [name]: value,
                      });
                    }
                  }}
                >
                  <div
                    className="main-page location-sign-up basic-typeahead__selectable"
                    role="option"
                    aria-selected="false"
                  >
                    <div className="main-page location-sign-up search-typeahead-v2__hit search-typeahead-v2__hit--autocomplete">
                      <span
                        className="main-page location-sign-up search-typeahead-v2__hit-info display-flex flex-column"
                        style={{ padding: "0.4rem 1.2rem" }}
                      >
                        <span
                          className="main-page location-sign-up search-typeahead-v2__hit-text t-14 t-black t-bold"
                          style={{ fontWeight: "400" }}
                        >
                          {name === "country" ? value.name : value}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileFormField;
