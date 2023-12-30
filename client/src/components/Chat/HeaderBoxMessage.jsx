import { useAuth, useChat } from "../../hooks";

/* eslint-disable react/prop-types */
function HeaderBoxMessage({
  minimizedWindow,
  onHandleMinimizedWindow,
  onHandleCloseBoxMessage,
}) {
  const { authInfo } = useAuth();
  const { selectedChat } = useChat();

  return (
    <header
      onClick={onHandleMinimizedWindow}
      className="main-page msg-overlay-bubble-header msg-overlay-conversation-bubble-header justify-space-between"
    >
      <div className="main-page msg-overlay-bubble-header__badge-container"></div>

      {/* <div></div> */}

      <div className="main-page msg-overlay-conversation-bubble-header--fade-in display-flex align-items-center flex-grow-1 overflow-hidden">
        <div>
          <div className="main-page presence-entity presence-entity--size-1">
            <img
              src={
                authInfo.profile._id === selectedChat.users[0]._id
                  ? selectedChat.users[1].avatar.url
                  : selectedChat.users[0].avatar.url
              }
              loading="lazy"
              className="main-page presence-entity__image EntityPhoto-circle-1  evi-image lazy-image ember-view"
            />

            <div className="main-page presence-entity__indicator presence-entity__indicator--size-1 presence-indicator hidden presence-indicator--size-1">
              <span className="main-page visually-hidden">
                Status is offline
              </span>
            </div>
          </div>
        </div>

        <div className="main-page pl2 flex-grow-1 overflow-hidden">
          <h2 className="main-page pl1 msg-overlay-bubble-header__title truncate t-14 t-bold t-black pr1">
            <a href="http://localhost:5173/feed" className="main-page">
              <span className="main-page t-14 t-bold hoverable-link-text t-black">
                {selectedChat?.users[0]?._id === authInfo?.profile?._id
                  ? `${selectedChat?.users[1]?.firstName} ${selectedChat?.users[1]?.lastName}`
                  : `${selectedChat?.users[0]?.firstName} ${selectedChat?.users[0]?.lastName}`}
              </span>
            </a>
          </h2>
        </div>
      </div>

      <div className="main-page msg-overlay-bubble-header__controls display-flex align-items-center">
        {!minimizedWindow && (
          <div className="main-page artdeco-dropdown msg-thread-actions__dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view">
            <button
              aria-expanded="false"
              className="main-page msg-thread-actions__control artdeco-button artdeco-button--circle artdeco-button--1 artdeco-button--muted artdeco-button--tertiary artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view"
              type="button"
            >
              <svg
                role="none"
                aria-hidden="true"
                className="main-page main-page artdeco-button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                data-test-icon="overflow-web-ios-small"
              >
                <use
                  href="#overflow-web-ios-small"
                  width="16"
                  height="16"
                  className="main-page"
                ></use>
              </svg>

              <span className="main-page visually-hidden">
                Open the options list in your conversation with Dũng Phan Xuân
                and Nguyen Toan
              </span>
            </button>
            <div className="main-page msg-thread-actions__dropdown-container">
              <div
                aria-hidden="true"
                className="main-page msg-thread-actions__dropdown-options artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"
              ></div>
            </div>
          </div>
        )}
        {!minimizedWindow && (
          <div className="main-page relative ">
            <button
              aria-label="Create video meeting"
              className="main-page msg-form__footer-action flex-shrink-zero artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
              type="button"
            >
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
                data-test-icon="video-conference-small"
              >
                <use
                  href="#video-conference-small"
                  width="16"
                  height="16"
                  className="main-page"
                ></use>
              </svg>
              <span className="main-page artdeco-button__text"></span>
            </button>
          </div>
        )}

        <button
          aria-expanded="false"
          className="main-page msg-overlay-bubble-header__control msg-overlay-conversation-bubble__expand-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
        >
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
            data-test-icon="maximize-small"
          >
            <use
              href="#maximize-small"
              width="16"
              height="16"
              className="main-page"
            ></use>
          </svg>
          <span className="main-page artdeco-button__text">
            Expand your conversation with Dũng and Nguyen
          </span>
        </button>

        <button
          onClick={onHandleCloseBoxMessage}
          className="main-page msg-overlay-bubble-header__control artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
        >
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
            data-test-icon="close-small"
          >
            <use
              href="#close-small"
              width="16"
              height="16"
              className="main-page"
            ></use>
          </svg>
          <span className="main-page artdeco-button__text">
            Close your conversation with Dũng Phan Xuân and Nguyen Toan
          </span>
        </button>
      </div>
    </header>
  );
}

export default HeaderBoxMessage;
