/* eslint-disable react/prop-types */
const handleTime = function (time) {
  const date = new Date(time);
  const display = `${date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;

  return display;
};

function SingleMessage({ message }) {
  return (
    <li className="main-page msg-s-message-list__event clearfix">
      {/* <time className="main-page msg-s-message-list__time-heading t-12 t-black--light t-bold">
        Thursday
      </time> */}

      {/* <span className="main-page msg-s-event-listitem--group-a11y-heading visually-hidden">
        Dũng Phan Xuân sent the following message at 2:04 PM
      </span> */}

      <div className="main-page msg-s-event-listitem msg-s-event-listitem--last-in-group msg-s-event-listitem--other">
        <a
          href="https://www.linkedin.com/in/ACoAADU0LlMBFVeoSWS5KBBl00YCkZ_XI9wbetY"
          className="main-page ember-view msg-s-event-listitem__link"
        >
          <span className="main-page a11y-text">View Dũng’s profile</span>
          <img
            title="Dũng Phan Xuân"
            src={message?.sender?.avatar?.url}
            loading="lazy"
            alt="Dũng Phan Xuân"
            className="main-page msg-s-event-listitem__profile-picture EntityPhoto-circle-2 evi-image lazy-image ember-view"
          />
        </a>

        <div className="main-page msg-s-message-group__meta">
          <a
            className="main-page app-aware-link "
            href="https://www.linkedin.com/in/ACoAADU0LlMBFVeoSWS5KBBl00YCkZ_XI9wbetY"
            data-test-app-aware-link=""
          >
            <span className="main-page msg-s-message-group__profile-link msg-s-message-group__name t-14 t-black t-bold hoverable-link-text">
              {message?.sender?.lastName}
            </span>
          </a>{" "}
          <time className="main-page msg-s-message-group__timestamp white-space-nowrap t-12 t-black--light t-normal">
            {" "}
            {handleTime(message?.createdAt)}
          </time>
        </div>

        <div className="main-page msg-s-event-listitem__message-bubble msg-s-event-listitem__message-bubble--msg-fwd-enabled">
          <div className="main-page msg-s-event-with-indicator display-flex ">
            <div className="main-page msg-s-event__content" dir="ltr">
              <p className="main-page msg-s-event-listitem__body t-14 t-black--light t-normal">
                {message?.content}
              </p>
            </div>
          </div>
        </div>

        <div className="main-page msg-s-event-with-indicator display-flex msg-s-event-listitem__attachment-item--msg-fwd-enabled">
          <div className="main-page msg-s-event__content">
            <div className="main-page msg-s-event-listitem__message-bubble msg-s-event-listitem__attachment-item">
              <div className="main-page msg-s-event-listitem__image-container">
                <button
                  className="main-page full-height full-width"
                  type="button"
                >
                  <span className="main-page visually-hidden">
                    Click or press enter to display {"filename"} in the image
                    preview
                  </span>
                  <img
                    src="https://www.linkedin.com/dms/prv/vid/D5606AQFIzSwggOW__g/messaging-attachmentFile/0/1703844619793?m=AQJRMYnIXX5cNwAAAYy1Lujm60rNcShTIoRNk80z_XKIVhSYmMk3nUqzFRY&amp;ne=1&amp;v=beta&amp;t=K8o4kYkD_qTy4nL5uapDCjaBikr_XrnWWOSm6yZwAS0"
                    className="main-page msg-s-event-listitem__image block evi-image ember-view"
                  />
                </button>
              </div>
            </div>
          </div>

          <span
            className="main-page msg-s-event-with-indicator__sending-indicator align-self-flex-end"
            title="Sending"
          ></span>
        </div>
      </div>
    </li>
  );
}

export default SingleMessage;
