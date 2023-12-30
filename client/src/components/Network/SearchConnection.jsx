import React from "react";

function SearchConnection() {
  return (
    <React.Fragment>
      <input
        className="main-page mn-connections__search-input artdeco-text-input--search artdeco-text-input--input"
        id="mn-connections-search-input"
        placeholder="Search by name"
        aria-describedby=""
        type="search"
        style={{ padding: "0.6rem 0.6rem 0.8rem 4rem" }}
      />
      <div
        aria-hidden="true"
        className="main-page search-global-typeahead__search-icon-container"
        style={{ top: "-2px" }}
      >
        <svg
          role="none"
          aria-hidden="true"
          className="main-page search-global-typeahead__search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          data-test-icon="search-small"
        >
          <use
            className="main-page"
            href="#search-small"
            width="16"
            height="16"
          ></use>
        </svg>
      </div>
    </React.Fragment>
  );
}

export default SearchConnection;
