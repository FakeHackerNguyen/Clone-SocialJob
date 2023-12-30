import { useAuth, useChat } from "../../hooks";

/* eslint-disable react/prop-types */
const months = [
  "Mon",
  "Tue",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const handleTime = function (time) {
  const now = new Date();
  const latestMessageTime = new Date(time);
  let display;
  if (latestMessageTime.getDate() >= now.getDate()) {
    display = `${latestMessageTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })}`;
  } else if (now.getDate() > latestMessageTime.getDate()) {
    display = `${
      months[latestMessageTime.getMonth()]
    } ${latestMessageTime.getDate()}`;
  }
  return display;
};

function SingleChat({ chat, onHandleClickChat }) {
  const { authInfo } = useAuth();
  const { setSelectedChat } = useChat();

  return (
    <div
      onClick={() => {
        onHandleClickChat(chat._id);
        setSelectedChat(chat);
      }}
      className="main-page msg-conversation-listitem__link msg-overlay-list-bubble__convo-item"
    >
      <div className="main-page msg-overlay-list-bubble__convo-card-container">
        <div className="main-page msg-conversation-card msg-overlay-list-bubble__convo-card display-flex">
          <div className="main-page msg-selectable-entity msg-selectable-entity--3">
            <div className="main-page msg-facepile-grid--no-facepile msg-facepile-grid msg-facepile-grid--3">
              <img
                src={
                  authInfo.profile._id === chat.users[0]._id
                    ? chat.users[1].avatar.url
                    : chat.users[0].avatar.url
                }
                loading="lazy"
                className="main-page msg-facepile-grid__img msg-facepile-grid__img--person evi-image lazy-image ember-view"
              />
            </div>

            {/* <div className="main-page msg-selectable-entity__checkbox-container">
      <input
        id="main-page checkbox-msg-selectable-entity__checkbox-ember3324"
        className="main-page ember-checkbox ember-view msg-selectable-entity__input simple-form"
        type="checkbox"
      />
      <label
        className="main-page msg-selectable-entity__checkbox-label ml2"
        aria-label="Select conversation"
        htmlFor="checkbox-msg-selectable-entity__checkbox-ember3324"
      ></label>

      <div className="main-page msg-selectable-entity__checkbox-circle-container">
        <div className="main-page msg-selectable-entity__checkbox-circle"></div>
      </div>
    </div> */}
          </div>

          <div className="main-page overflow-hidden pl2 msg-overlay-list-bubble__convo-card-content">
            <div className="main-page msg-overlay-list-bubble__convo-card-content-wrapper fl">
              <div className="main-page msg-conversation-card__row align-items-center display-flex">
                <h3 className="main-page msg-conversation-listitem__participant-names msg-conversation-card__participant-names truncate t-14 t-black t-normal">
                  {chat?.owner?._id === authInfo?.profile?._id
                    ? `${chat?.users[1]?.firstName} ${chat?.users[1]?.lastName}`
                    : `${chat?.users[0]?.firstName} ${chat?.users[0]?.lastName}`}
                </h3>
                <div className="main-page msg-conversation-card__mute-icon-holder msg-conversation-card__mute-icon-holder--inbox-shortcuts"></div>
                <time className="main-page msg-overlay-list-bubble-item__time-stamp t-12 msg-overlay-list-bubble-item__time-stamp--inbox-shortcuts t-normal t-black--light">
                  {handleTime(chat?.latestMessage?.updatedAt)}
                </time>
                <div className="main-page msg-overlay-list-bubble__inbox-shortcuts-container">
                  <div className="main-page msg-overlay-list-bubble__inbox-shortcuts">
                    <div className="main-page artdeco-dropdown msg-thread-actions__dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view">
                      <button
                        aria-expanded="false"
                        className="main-page msg-thread-actions__control artdeco-button artdeco-button--circle artdeco-button--1 artdeco-button--muted artdeco-button--tertiary artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view"
                        type="button"
                      >
                        <svg
                          role="none"
                          aria-hidden="true"
                          className="main-page artdeco-button__icon"
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
                          Open the options list in your conversation with Dũng
                          Phan Xuân and Nguyen Toan
                        </span>
                      </button>
                      <div className="main-page msg-thread-actions__dropdown-container">
                        <div
                          aria-hidden="true"
                          className="main-page msg-thread-actions__dropdown-options--inbox-shortcuts artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"
                        ></div>
                      </div>
                    </div>

                    <div></div>
                  </div>
                </div>
              </div>

              {chat.latestMessage && (
                <div className="main-page msg-conversation-card__row justify-space-between">
                  <div className="main-page msg-overlay-list-bubble__message-snippet-container--narrow-two-line">
                    <p className="main-page msg-overlay-list-bubble__message-snippet--v2 m0 t-12 t-black--light">
                      {chat?.latestMessage.sender._id === chat.owner._id
                        ? "You: "
                        : `${chat?.latestMessage.sender.lastName}: `}
                      {chat?.latestMessage.content}
                    </p>
                  </div>
                  <div className="main-page display-flex">
                    <div className="main-page msg-conversation-card__conversation-status msg-conversation-card__star-icon"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleChat;
