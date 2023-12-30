/* eslint-disable react/prop-types */
function HeaderBoxChat({ minimizedWindow, onHandleMinimizedWindow }) {
  return (
    <header className="main-page msg-overlay-bubble-header">
      <div className="main-page msg-overlay-bubble-header__badge-container"></div>

      <div className="main-page msg-overlay-bubble-header__details flex-row align-items-center ml1">
        <div className="main-page presence-entity presence-entity--size-1">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/1c5u578iilxfi4m4dvc4q810q"
            loading="lazy"
            alt="Nguyen Toan"
            id="ember140"
            className="main-page presence-entity__image EntityPhoto-circle-1  evi-image lazy-image ghost-person ember-view"
          />

          <div className="main-page presence-entity__indicator presence-entity__indicator--size-1 presence-indicator presence-indicator--is-online presence-indicator--size-1">
            <span className="main-page visually-hidden">Status is online</span>
          </div>
        </div>

        <button
          className="main-page msg-overlay-bubble-header__button truncate ml2"
          type="button"
        >
          <span className="main-page truncate t-14 t-bold t-black">
            <span aria-hidden="true">Messaging</span>
            <span className="main-page visually-hidden">
              You are on the messaging overlay. Press enter to minimize it.
            </span>
          </span>
        </button>
      </div>
      <div className="main-page msg-overlay-bubble-header__controls display-flex">
        <div className="main-page artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view">
          <button
            aria-expanded="false"
            className="main-page visually-hidden msg-overlay-bubble-header__dropdown-trigger artdeco-button artdeco-button--1 artdeco-button--circle artdeco-button--muted artdeco-button--tertiary artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view"
            type="button"
          >
            <svg
              role="img"
              aria-hidden="false"
              aria-label="Open messenger dropdown menu"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              data-test-icon="overflow-web-ios-small"
              className="main-page"
            >
              <use
                href="#overflow-web-ios-small"
                width="16"
                height="16"
                className="main-page"
              ></use>
            </svg>
          </button>
          <div className="main-page msg-overlay-bubble-header__dropdown-container">
            <div
              aria-hidden="true"
              className="main-page artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"
            ></div>
          </div>
        </div>

        <button className="main-page visually-hidden msg-overlay-bubble-header__control msg-overlay-bubble-header__control--new-convo-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view">
          {" "}
          <svg
            role="none"
            aria-hidden="true"
            className="main-page artdeco-button__icon "
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            data-test-icon="compose-small"
          >
            <use
              className="main-page"
              href="#compose-small"
              width="16"
              height="16"
            ></use>
          </svg>
          <span className="main-page artdeco-button__text">
            Compose message
          </span>
        </button>

        <button
          onClick={onHandleMinimizedWindow}
          className="main-page -bubble-header__control msg-overlay-bubble-header__control--new-convo-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
        >
          <svg
            role="none"
            aria-hidden="true"
            className="main-page artdeco-button__icon "
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            data-test-icon="chevron-down-small"
          >
            <use
              href={`#chevron-${minimizedWindow ? "up" : "down"}-small`}
              width="16"
              height="16"
              className="main-page"
            ></use>
          </svg>
          <span className="main-page artdeco-button__text">
            You are on the messaging overlay. Press enter to minimize it.
          </span>
        </button>
      </div>
    </header>
  );
}

export default HeaderBoxChat;
