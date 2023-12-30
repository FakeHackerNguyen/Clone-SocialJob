/* eslint-disable react/prop-types */
import { useRef } from "react";

function FileSelector({ onHandleChange }) {
  const fileInput = useRef();

  const handleSelectFile = function () {
    fileInput.current.click();
  };

  return (
    <span className="main-page artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view">
      <input type="file" ref={fileInput} onChange={onHandleChange} hidden />
      <button
        aria-label="Add media"
        className="main-page share-promoted-detour-button share-promoted-detour-button-legacy"
        type="button"
        onClick={handleSelectFile}
      >
        <span className="main-page share-promoted-detour-button__icon-container">
          <svg
            role="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            data-test-icon="image-medium"
            className="main-page"
          >
            <use
              href="#image-medium"
              width="24"
              height="24"
              className="main-page"
            ></use>
          </svg>
        </span>
      </button>
      {/* <div className="main-page ember-view">
<div className="main-page ember-view"></div>
</div> */}
    </span>
  );
}

export default FileSelector;
