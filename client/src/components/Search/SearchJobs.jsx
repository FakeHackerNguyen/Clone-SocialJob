/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSearch } from "../../hooks";

function SearchJobs() {
  const [query, setQuery] = useState({ jobTitle: "", jobLocation: "" });

  const { searchMultipleJob } = useSearch();

  const handleSubmit = function (e) {
    e.preventDefault();
    searchMultipleJob(query);
  };

  const handleChange = function (e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="people base-search-bar w-full h-full"
      data-searchbar-type="JOBS"
      aria-labelledby="job-switcher-tab"
      id="jobs-search-panel"
      role="tabpanel"
    >
      <form
        className="people base-search-bar__form w-full flex babybear:mx-mobile-container-padding babybear:flex-col"
        role="search"
        onSubmit={handleSubmit}
      >
        <section className="people dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 typeahead-input keywords-typeahead-input text-input">
          <input
            aria-autocomplete="list"
            aria-controls="job-search-bar-keywords-typeahead-list"
            aria-haspopup="listbox"
            aria-label="Search job titles or companies"
            autoComplete="off"
            className="people dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary"
            id="job-search-bar-keywords"
            maxLength="500"
            name="jobTitle"
            placeholder="Search job titles or companies"
            role="combobox"
            type="search"
            aria-expanded="false"
            onChange={handleChange}
          />

          <div className="people typeahead-input__dropdown container-lined absolute top-[calc(100%+3px)] left-0 w-full rounded-b-md rounded-t-none z-[10] overflow-hidden max-w-none babybear:min-w-full babybear:bottom-0 babybear:overflow-y-auto">
            <template className="people typeahead-item-template">
              <li
                className="people typeahead-input__dropdown-item py-1.5 px-2 hover:cursor-pointer hover:bg-color-surface-new-hover hover:border-y-2 hover:border-solid hover:border-color-container-primary"
                role="option"
              >
                <span className="people typeahead-input__dropdown-text font-sans text-sm font-bold text-color-text"></span>
              </li>
            </template>

            <ul
              className="people typeahead-input__dropdown-list w-full"
              id="job-search-bar-keywords-typeahead-list"
              role="listbox"
            ></ul>
          </div>

          <button
            className="people dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100"
            type="button"
            disabled=""
          >
            <label className="people sr-only">Dismiss</label>
            <span
              className="people dismissable-input__button-icon lazy-loaded"
              aria-hidden="true"
              aria-busy="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                focusable="false"
                className="people lazy-loaded"
                aria-busy="false"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="currentColor"
                    d="M7.90356 9.19393l-3.3763 3.3763-1.29037-1.29037 3.3763-3.3763-3.3763-3.3763 1.29037-1.29037 3.3763 3.3763 3.3763-3.3763 1.29037 1.29037-3.3763 3.3763 3.3763 3.3763-1.29037 1.29037z"
                  ></path>
                  <path d="M0 0h16v16H0z"></path>
                </g>
              </svg>
            </span>
          </button>
        </section>

        <section className="people dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 typeahead-input location-typeahead-input">
          <input
            aria-autocomplete="list"
            aria-controls="job-search-bar-location-typeahead-list"
            aria-haspopup="listbox"
            aria-label="Location"
            autoComplete="off"
            className="people dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary"
            data-tracking-control-name="people-guest_dismissable-input"
            id="job-search-bar-location"
            maxLength="500"
            name="jobLocation"
            placeholder="Location"
            role="combobox"
            type="search"
            aria-expanded="false"
          />

          <div className="people typeahead-input__dropdown container-lined absolute top-[calc(100%+3px)] left-0 w-full rounded-b-md rounded-t-none z-[10] overflow-hidden max-w-none babybear:min-w-full babybear:bottom-0 babybear:overflow-y-auto">
            <template className="people typeahead-item-template">
              <li
                className="people typeahead-input__dropdown-item py-1.5 px-2 hover:cursor-pointer hover:bg-color-surface-new-hover hover:border-y-2 hover:border-solid hover:border-color-container-primary"
                role="option"
              >
                <span className="people typeahead-input__dropdown-text font-sans text-sm font-bold text-color-text"></span>
              </li>
            </template>

            <ul
              className="people typeahead-input__dropdown-list w-full"
              id="job-search-bar-location-typeahead-list"
              role="listbox"
            ></ul>
          </div>

          <button
            className="people dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100 dismissable-input__button--show"
            type="button"
          >
            <label className="people sr-only">Dismiss</label>
            <span
              className="people dismissable-input__button-icon lazy-loaded"
              aria-hidden="true"
              aria-busy="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                focusable="false"
                className="people lazy-loaded"
                aria-busy="false"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="currentColor"
                    d="M7.90356 9.19393l-3.3763 3.3763-1.29037-1.29037 3.3763-3.3763-3.3763-3.3763 1.29037-1.29037 3.3763 3.3763 3.3763-3.3763 1.29037 1.29037-3.3763 3.3763 3.3763 3.3763-1.29037 1.29037z"
                  ></path>
                  <path d="M0 0h16v16H0z"></path>
                </g>
              </svg>
            </span>
          </button>
        </section>

        <button
          className="people base-search-bar__submit-btn block basis-[40px] flex-shrink-0 cursor-pointer babybear:invisible babybear:ml-[-9999px] babybear:w-[1px] babybear:h-[1px]"
          aria-label="Search"
          data-tracking-control-name="people-guest_jobs-search-bar_base-search-bar-search-submit"
          type="submit"
        >
          <span
            className="people base-search-bar__search-icon onload mx-auto lazy-loaded"
            aria-hidden="true"
            aria-busy="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              version="1.1"
              focusable="false"
              className="people lazy-loaded"
              aria-busy="false"
            >
              <path
                d="M21,19.67l-5.44-5.44a7,7,0,1,0-1.33,1.33L19.67,21ZM10,15.13A5.13,5.13,0,1,1,15.13,10,5.13,5.13,0,0,1,10,15.13Z"
                className="large-icon"
                fill="currentColor"
                style={{ color: "#7a8b98" }}
              ></path>
            </svg>
          </span>
        </button>
      </form>
    </section>
  );
}

export default SearchJobs;
