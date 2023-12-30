/* eslint-disable react/prop-types */
import { useState } from "react";
import { searchCountry, searchCity } from "../../apis/country";

function SearchInputForCountryCity({
  label,
  name,
  inputInfo,
  onSetInputInfo,
  classes,
}) {
  const [results, setResults] = useState([]);
  const [openList, setOpenList] = useState(false);
  const [selected, setSelected] = useState(
    name === "country" ? inputInfo?.country : inputInfo?.city
  );

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setSelected(value);
    if (name === "country" || name === "location") {
      const { error, results } = await searchCountry({ name: value });
      if (error) return;

      setResults(results);
      setOpenList(true);
    } else if (name === "city") {
      const { error, results } = await searchCity({
        country: inputInfo.country,
        name: value,
      });
      if (error) return;

      setResults(results);
      setOpenList(true);
    } else {
      onSetInputInfo({
        ...inputInfo,
        [name]: value,
      });
    }
  };

  return (
    <div className={`main-page relative ${classes}`}>
      <label className="main-page fb-dash-form-element__label fb-dash-form-element__label-title--is-required">
        {label}{" "}
      </label>

      <div className="main-page search-basic-typeahead search-vertical-typeahead">
        <input
          placeholder="Ex: United States"
          required=""
          role="combobox"
          aria-autocomplete="list"
          type="text"
          className="main-page"
          name={name}
          value={selected}
          onChange={handleChange}
        />
        {openList && results.length !== 0 && (
          <div
            className="main-page basic-typeahead__triggered-content fb-single-typeahead-entity__triggered-content"
            role="listbox"
          >
            {results.map((value, index) => (
              <div
                key={index}
                onClick={() => {
                  if (name === "country") {
                    setSelected(value.name);
                    setOpenList(false);
                    onSetInputInfo({
                      ...inputInfo,
                      [name]: value.name,
                    });
                  } else {
                    setSelected(value);
                    setOpenList(false);
                    onSetInputInfo({
                      ...inputInfo,
                      [name]: value,
                    });
                  }
                }}
              >
                <div
                  className="main-page basic-typeahead__selectable"
                  role="option"
                  aria-selected="false"
                >
                  <div className="main-page search-typeahead-v2__hit search-typeahead-v2__hit--autocomplete">
                    <span
                      className="main-page search-typeahead-v2__hit-info display-flex flex-column"
                      style={{ padding: "0.4rem 1.2rem" }}
                    >
                      <span
                        className="main-page search-typeahead-v2__hit-text t-14 t-black t-bold"
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
  );
}

export default SearchInputForCountryCity;
