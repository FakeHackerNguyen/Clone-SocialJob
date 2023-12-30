function SearchChat() {
  return (
    <div className="main-page msg-overlay-list-bubble-search">
      <div className="main-page msg-overlay-list-bubble-search__input-container">
        <label className="main-page a11y-text">
          Type to search for connections and conversations.
        </label>
        <span className="main-page msg-overlay-list-search__search-icon display-flex">
          <svg
            role="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            data-test-icon="search-small"
            className="main-page"
          >
            <use
              href="#search-small"
              width="16"
              height="16"
              className="main-page"
            ></use>
          </svg>
        </span>
        <input
          id="main-page msg-overlay-list-bubble-search__search-typeahead-input"
          className="main-page ember-text-field ember-view msg-overlay-list-bubble-search__search-typeahead-input"
          placeholder="Search messages"
          autoComplete="off"
          type="text"
        />
      </div>
    </div>
  );
}

export default SearchChat;
