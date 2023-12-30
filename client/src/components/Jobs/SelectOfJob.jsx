import { useState } from "react";

/* eslint-disable react/prop-types */
function SelectOfJob({ name, label, options, postInfo, setPostInfo }) {
  const [openList, setOpenList] = useState(false);
  const [selected, setSelected] = useState("");

  const handleOpenList = () => {
    setOpenList(true);
  };

  const handleSelect = (isSelecting) => {
    setSelected(isSelecting);
    setPostInfo({ ...postInfo, [name]: isSelecting });
    setOpenList(false);
  };

  return (
    <div>
      <div>
        <label
          className="main-page t-14 t-black--light"
          htmlFor="workplace-type-selection-dropdown-ember213"
          style={{
            margin: "1.2rem 0 0.3rem",
            display: "block",
          }}
        >
          {/* Workplace type */}
          {label}
        </label>

        <div className="main-page artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view">
          <button
            aria-expanded="false"
            aria-label="Workplace type: On-site"
            id="workplace-type-selection-dropdown-ember213"
            className="main-page artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view job-posting-shared-workplace-type-selection__dropdown-trigger"
            type="button"
            onClick={handleOpenList}
          >
            <div className="main-page t-14 t-normal text-align-left full-width">
              {/* On-site */}
              {selected || "Select"}
            </div>

            <li-icon
              aria-hidden="true"
              type="caret-filled-down-icon"
              class="main-page artdeco-dropdown__trigger-icon"
              size="small"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="main-page mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
              </svg>
            </li-icon>
          </button>
          <div
            aria-hidden="false"
            className={`main-page artdeco-dropdown__content ${
              openList && "artdeco-dropdown__content--is-open"
            } artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view job-posting-shared-workplace-type-selection__dropdown-content`}
          >
            <div className="main-page artdeco-dropdown__content-inner">
              <ul>
                {options &&
                  options.map((option, index) => (
                    <li key={index} onClick={() => handleSelect(option[0])}>
                      <div className="main-page artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view">
                        {option[0]}
                        <p className="main-page t-12 t-black--light">
                          {option[1]}
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectOfJob;
