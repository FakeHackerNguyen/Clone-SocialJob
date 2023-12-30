/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSearch } from "../../hooks";
function SearchPeople() {
  const [query, setQuery] = useState({ firstName: "", lastName: "" });

  const { searchPeople } = useSearch();

  const handleSubmit = function (e) {
    e.preventDefault();
    searchPeople(`${query.firstName} ${query.lastName}`);
  };

  const handleChange = function (e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="people base-search-bar w-full h-full"
      data-searchbar-type="PEOPLE"
      aria-labelledby="people-switcher-tab"
      id="people-search-panel"
      role="tabpanel"
    >
      <form
        className="people base-search-bar__form w-full flex babybear:mx-mobile-container-padding babybear:flex-col"
        role="search"
      >
        <section className="people dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 search-input">
          <input
            aria-label="First Name"
            autoComplete="on"
            className="people dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary"
            maxLength="500"
            name="firstName"
            placeholder="First Name"
            type="search"
            onChange={handleChange}
          />

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

        <section className="people dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 search-input">
          <input
            aria-label="Last Name"
            autoComplete="on"
            className="people dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary"
            data-tracking-control-name="people-guest_people-search-bar_last-name_dismissable-input"
            maxLength="500"
            name="lastName"
            placeholder="Last Name"
            type="search"
            onChange={handleChange}
          />

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
          type="submit"
          onClick={handleSubmit}
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
                className="people large-icon"
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

export default SearchPeople;
