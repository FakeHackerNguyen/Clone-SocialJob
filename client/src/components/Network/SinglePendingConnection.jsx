import { responseConnection } from "../../apis/connection";
import { useNotification } from "../../hooks";

/* eslint-disable react/prop-types */
function SinglePendingConnection({ pendingConnection, onSetRefresh }) {
  const { updateNotification } = useNotification();

  const handleResponseConnection = async function (isAccept) {
    const { error, message } = await responseConnection({
      connectionId: pendingConnection._id,
      isAccept,
    });
    if (error) return updateNotification("error", error);

    updateNotification("success", message);
    onSetRefresh((prevState) => !prevState);
  };

  return (
    <li
      className={`main-page invitation-card artdeco-list__item ${
        false && "invitation-card--new-invite"
      }`}
    >
      <div className="main-page invitation-card__container ph2 pt1 pb2">
        <div className="main-page display-flex flex-1 align-items-center pl0">
          <a className="main-page app-aware-link invitation-card__picture">
            <div className="main-page ivm-image-view-model">
              <div className="main-page ivm-view-attr__img-wrapper display-flex">
                <img
                  width="100"
                  src={pendingConnection?.recipient?.avatar?.url}
                  loading="lazy"
                  height="72"
                  className="main-page ivm-view-attr__img--centered EntityPhoto-circle-5   evi-image lazy-image ember-view"
                />
              </div>
            </div>
          </a>

          <div className="main-page invitation-card__details">
            <div className="main-page invitation-card__tvm-title t-16 t-normal t-black">
              <a className="main-page app-aware-link ">
                <strong>
                  <span className="main-page app-aware-link ">
                    {pendingConnection?.recipient?.fullName}
                  </span>
                </strong>
              </a>
            </div>
            <div className="main-page invitation-card__subtitle t-14 t-black--light t-normal">
              {pendingConnection?.recipient?.initialEducation
                ? `Student at ${pendingConnection?.recipient?.initialEducation?.university?.name}`
                : `${pendingConnection?.recipient?.initialExperience?.titleJob} at ${pendingConnection?.recipient?.initialExperience?.company?.name}`}
            </div>
          </div>
        </div>

        <div className="main-page invitation-card__action-container pl3">
          <button
            onClick={() => handleResponseConnection(false)}
            className="main-page artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view invitation-card__action-btn mr2"
          >
            <span className="main-page artdeco-button__text">Ignore</span>
          </button>
          <button
            onClick={() => handleResponseConnection(true)}
            className="main-page artdeco-button artdeco-button--2 artdeco-button--secondary ember-view invitation-card__action-btn"
          >
            <span className="main-page artdeco-button__text">Accept</span>
          </button>
        </div>
      </div>

      <div className="main-page invitation-card__custom-message-container">
        <div className="main-page ember-view invitation-card__custom-message t-14 t-normal">
          <span className="main-page lt-line-clamp__line lt-line-clamp__line--last">
            {pendingConnection?.note}
          </span>

          {/* <span className="main-page lt-line-clamp__ellipsis lt-line-clamp__ellipsis--dummy">
          ...{" "}
          <a
            className="main-page lt-line-clamp__more"
            href="#"
            role="button"
          >
            See more
          </a>
        </span> */}
        </div>

        {/* <div className="main-page invitation-card__custom-message-report-container">
        <div className="main-page artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view">
          <button
            aria-expanded="false"
            className="main-page artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view invitation-card__custom-message-report"
            type="button"
          >
            <svg
              role="img"
              aria-hidden="false"
              aria-label="Report message from ホォィヴェ。ch"
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
          </button>
          <div
            aria-hidden="true"
            className="main-page artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"
          ></div>
        </div>
      </div> */}

        {/* <div className="main-page entry-point">
        <div></div>

        <button className="main-page artdeco-button artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view invitation-card__custom-message-line-cta">
          <span className="main-page artdeco-button__text">
            Reply to ホォィヴェ。ch
          </span>
        </button>
      </div> */}
      </div>
    </li>
  );
}

export default SinglePendingConnection;
