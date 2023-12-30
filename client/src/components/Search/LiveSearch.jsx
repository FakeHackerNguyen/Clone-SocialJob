/* eslint-disable react/prop-types */
import { useState } from "react";
import { getSingleCompany, searchCompany } from "../../apis/company";
import { getSingleUniversity, searchUniversity } from "../../apis/university";
import Label from "../Label";

function LiveSearch({ label, name, type, setCompany, setUniversity }) {
  const [openList, setOpenList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  const handleChange = async (e) => {
    const { value } = e.target;

    if (type === "company") {
      const { error, results } = await searchCompany(value);
      if (error) return;

      setInputValue(value);
      setResultSearch(results);
      setOpenList(true);
    } else {
      const { error, results } = await searchUniversity(value);
      if (error) return;

      setInputValue(value);
      setResultSearch(results);
      setOpenList(true);
    }
  };
  const handleSelect = async (id) => {
    if (type === "company") {
      const { error, data } = await getSingleCompany({ companyId: id });
      if (error) return;

      setInputValue(data.name);
    } else {
      const { error, data } = await getSingleUniversity({ universityId: id });
      if (error) return;

      setInputValue(data.name);
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
            aria-expanded="false"
            type="text"
            onChange={handleChange}
            value={inputValue}
          />
          {openList && (type === "company" || type === "university") && (
            <div
              className="main-page basic-typeahead__triggered-content"
              role="listbox"
            >
              <div>
                {resultSearch &&
                  resultSearch.map((result, index) => (
                    <div
                      key={index}
                      className="main-page basic-typeahead__selectable"
                      role="option"
                      aria-selected="false"
                      onClick={
                        type === "company"
                          ? () => {
                              setOpenList(false);
                              handleSelect(result?._id);
                              setCompany(result?._id);
                            }
                          : () => {
                              setOpenList(false);
                              handleSelect(result?._id);
                              setUniversity(result?._id);
                            }
                      }
                    >
                      <div className="main-page search-typeahead-v2__hit search-typeahead-v2__hit--autocomplete display-flex">
                        <div
                          className="main-page ivm-image-view-model"
                          style={{ margin: "0.4rem 0.6rem 0.4rem 0.6rem" }}
                        >
                          <div className="main-page ivm-view-attr__img-wrapper display-flex">
                            <img
                              width="40"
                              src={result?.avatar?.url}
                              loading="lazy"
                              height="40"
                              alt=""
                              className="main-page ivm-view-attr__img--centered EntityPhoto-square-2  search-typeahead-v2__image-scale evi-image lazy-image ember-view"
                            />
                          </div>
                        </div>

                        <span
                          className="main-page search-typeahead-v2__hit-info display-flex flex-column"
                          style={{ justifyContent: "center" }}
                        >
                          <span className="main-page search-typeahead-v2__hit-text t-14 t-black t-bold">
                            {result?.name}
                          </span>
                          <span className="main-page search-typeahead-v2__hit-subtext t-12 t-black--light t-bold">
                            {type === "company"
                              ? `Company • ${result?.typeOfBusiness}`
                              : `${result?.region}`}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="location-sign-up onboarding-profile-error-container"></div> */}
    </div>
  );
}

export default LiveSearch;
