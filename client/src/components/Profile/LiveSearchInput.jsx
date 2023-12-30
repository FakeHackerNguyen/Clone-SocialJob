/* eslint-disable react/prop-types */
import { useState } from "react";
import { getSingleCompany, searchCompany } from "../../apis/company";
import { getSingleUniversity, searchUniversity } from "../../apis/university";

function LiveSearchInput({ label, name, type, inputInfo, onSetInputInfo }) {
  const [openList, setOpenList] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    img: "",
  });
  const [resultSearch, setResultSearch] = useState([]);

  const handleChange = async (e) => {
    const { value } = e.target;

    if (type === "company") {
      const { error, results } = await searchCompany(value);
      if (error) return;

      setInputValue({ name: value });
      setResultSearch(results);
      setOpenList(true);
    } else {
      const { error, results } = await searchUniversity(value);
      if (error) return;

      setInputValue({ name: value });
      setResultSearch(results);
      setOpenList(true);
    }
  };
  const handleSelect = async (id) => {
    if (type === "company") {
      const { error, data } = await getSingleCompany({ companyId: id });
      if (error) return;

      setInputValue({ img: data.avatar.url, name: data.name });
      onSetInputInfo({ ...inputInfo, companyId: id });
    } else {
      const { error, data } = await getSingleUniversity({ universityId: id });
      if (error) return;

      setInputValue({ img: data.avatar.url, name: data.name });
      onSetInputInfo({ ...inputInfo, universityId: id });
    }
  };

  return (
    <div className="main-page relative ">
      <label className="main-page fb-dash-form-element__label fb-dash-form-element__label-title--is-required">
        {label}{" "}
      </label>

      <div className="main-page ivm-image-view-model fb-single-typeahead-entity__image-container">
        <div className="main-page ivm-view-attr__img-wrapper display-flex">
          <img
            width="24"
            src={inputValue?.img}
            loading="lazy"
            height="24"
            alt=""
            className="main-page ivm-view-attr__img--centered ivm-view-attr__entity-img--company  fb-single-typeahead-entity__image evi-image lazy-image ember-view"
          />
        </div>
      </div>

      <div className="main-page search-basic-typeahead search-vertical-typeahead">
        <input
          placeholder="Ex: Microsoft"
          required=""
          role="combobox"
          aria-autocomplete="list"
          aria-activedescendant=""
          aria-expanded="false"
          type="text"
          className="main-page pl6"
          name={name}
          onChange={handleChange}
          value={inputValue.name}
        />
        {openList && (type === "company" || type === "university") && (
          <div
            className="main-page basic-typeahead__triggered-content fb-single-typeahead-entity__triggered-content"
            role="listbox"
          >
            <div>
              {resultSearch &&
                resultSearch.map((result, index) => (
                  <div
                    className="main-page basic-typeahead__selectable"
                    role="option"
                    aria-selected="false"
                    key={index}
                    onClick={
                      type === "company"
                        ? () => {
                            setOpenList(false);
                            handleSelect(result?._id);
                            // setCompany(result?._id);
                          }
                        : () => {
                            setOpenList(false);
                            handleSelect(result?._id);
                            // setUniversity(result?._id);
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
  );
}

export default LiveSearchInput;
