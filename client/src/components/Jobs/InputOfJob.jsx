/* eslint-disable react/prop-types */
function InputOfJob({ label, name, position, note, postInfo, setPostInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPostInfo({ ...postInfo, [name]: value });
  };
  return (
    <div>
      <div className="main-page display-flex align-items-baseline">
        <label
          className="main-page t-14 t-black--light mb1"
          style={{ margin: "1.2rem 0 0.3rem", display: "block" }}
        >
          {label}
        </label>
        <span className="main-page artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-right ember-view">
          <button
            className="main-page artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view job-posting-shared-job-title-typeahead__tooltip-trigger"
            type="button"
          >
            {" "}
            <svg
              role="none"
              aria-hidden="true"
              className="main-page artdeco-button__icon  rtl-flip"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              data-test-icon="question-small"
            >
              <use
                href="#question-small"
                width="16"
                height="16"
                className="main-page"
              ></use>
            </svg>
            <span className="main-page artdeco-button__text"></span>
          </button>
          <div className="main-page ember-view">
            <div className="main-page ember-view"></div>
          </div>
        </span>

        <div>
          <div
            className={`main-page artdeco-hoverable-content ${
              false && "artdeco-hoverable-content--visible"
            } job-posting-shared-job-title-typeahead__tooltip-content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--open-spacing artdeco-hoverable-content--right-placement`}
            role="tooltip"
            aria-hidden="false"
            style={{ top: `${position.top}`, left: `${position.left}` }}
          >
            <div className="main-page artdeco-hoverable-content__shell">
              <button
                className="main-page artdeco-hoverable-content__close-btn"
                aria-label="Dismiss"
                type="button"
              >
                <li-icon aria-hidden="true" type="cancel-icon" size="small">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                  </svg>
                </li-icon>
              </button>
              <div className="main-page artdeco-hoverable-content__content">
                <span>{note}</span>
              </div>
            </div>
            <div
              className="main-page artdeco-hoverable-content__arrow"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>

      <div className="main-page artdeco-typeahead ember-view">
        <div className="main-page ember-view">
          <div>
            <input
              className="main-page artdeco-typeahead__input "
              autoComplete="off"
              placeholder=""
              required=""
              role="combobox"
              aria-autocomplete="list"
              aria-expanded="false"
              aria-haspopup="true"
              type="text"
              name={name}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* <ul
      data-count="0"
      aria-label="Job title suggestions"
      role="listbox"
      className="main-page job-posting-shared-job-title-typeahead__results-list absolute artdeco-typeahead__results-list ember-view"
    ></ul> */}

        <div
          className="main-page artdeco-typeahead__a11y-text"
          aria-live="polite"
        ></div>
      </div>
    </div>
  );
}

export default InputOfJob;
