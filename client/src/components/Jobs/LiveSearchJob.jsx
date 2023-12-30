/* eslint-disable react/prop-types */
import { useState } from "react";
import { getSingleCompany, searchCompany } from "../../apis/company";

function LiveSearchJob({ init, postInfo, setPostInfo }) {
  const [openList, setOpenList] = useState(false);
  const [inputValue, setInputValue] = useState({
    img: "",
    name: "",
  });
  const [resultSearch, setResultSearch] = useState([]);

  console.log(resultSearch);

  const handleChange = async (e) => {
    const { value } = e.target;

    const { error, results } = await searchCompany(value);
    if (error) return;

    setInputValue({ name: value });
    setResultSearch(results);
    setOpenList(true);
  };

  const handleSelect = async (id) => {
    const { error, data } = await getSingleCompany({ companyId: id });
    if (error) return;

    setInputValue({ img: data.avatar.url, name: data.name });
    setPostInfo({ ...postInfo, companyId: id });
    setOpenList(false);
  };

  return (
    <div>
      <label
        htmlFor="company-typeahead-input-ember208"
        className="main-page t-14 t-black--light mb1"
        style={{ margin: "1.2rem 0 0.3rem", display: "block" }}
      >
        Company
      </label>

      <div className="main-page artdeco-typeahead ember-view">
        <figure className="main-page job-posting-shared-company-typeahead__logo">
          <img
            width="24"
            src={inputValue.img || init?.avatar?.url}
            loading="lazy"
            height="24"
            className="main-page evi-image lazy-image ember-view"
          />
        </figure>
        <div className="main-page ember-view">
          <div>
            <input
              className="main-page artdeco-typeahead__input job-posting-shared-company-typeahead__input"
              autoComplete="off"
              required=""
              role="combobox"
              aria-autocomplete="list"
              aria-expanded="false"
              aria-haspopup="true"
              type="text"
              value={inputValue.name || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        {openList && (
          <ul
            data-count="0"
            aria-label="Company suggestions"
            role="listbox"
            className="main-page container-with-shadow Elevation-4dp job-posting-shared-company-typeahead__results-list absolute artdeco-typeahead__results-list ember-view"
          >
            {resultSearch &&
              resultSearch.map((result, index) => (
                <li
                  key={index}
                  aria-selected="false"
                  role="option"
                  className="main-page artdeco-typeahead__result t-14 relative ember-view"
                  onClick={() => handleSelect(result._id)}
                >
                  <figure className="main-page job-posting-shared-company-typeahead__logo">
                    <div className="main-page ivm-image-view-model">
                      <div className="main-page ivm-view-attr__img-wrapper display-flex">
                        <img
                          width="24"
                          src={result?.avatar?.url}
                          loading="lazy"
                          height="24"
                          alt=""
                          className="main-page ivm-view-attr__img--centered EntityPhoto-square-0 evi-image lazy-image ember-view"
                        />
                      </div>
                    </div>
                  </figure>
                  <p
                    className="main-page job-posting-shared-company-typeahead__result t-14 t-black--light t-bold"
                    style={{ marginLeft: "1rem" }}
                  >
                    {result?.name}
                  </p>
                </li>
              ))}
          </ul>
        )}

        <div
          className="main-page artdeco-typeahead__a11y-text"
          aria-live="polite"
        ></div>
      </div>

      <span aria-live="polite"></span>
    </div>
  );
}

export default LiveSearchJob;
