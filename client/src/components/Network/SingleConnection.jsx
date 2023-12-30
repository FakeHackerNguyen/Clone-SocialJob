import { useState } from "react";
import { removeConnection } from "../../apis/connection";
import { useNotification } from "../../hooks";

/* eslint-disable react/prop-types */
function SingleConnection({ connection, onSetRefresh }) {
  const [openOther, setOpenOther] = useState(false);

  const { updateNotification } = useNotification();

  const handleOpenOther = function () {
    setOpenOther((prevState) => !prevState);
  };

  const handleRemoveConnection = async function () {
    const { error, message } = await removeConnection({
      connectionId: connection._id,
    });
    if (error) return updateNotification("error", error);

    updateNotification("success", message);
    onSetRefresh((prevState) => !prevState);
  };
  return (
    <li className="main-page mn-connection-card artdeco-list">
      <div>
        <div className="main-page display-flex align-items-center">
          <div className="main-page hidden"></div>
          <a className="main-page ember-view mn-connection-card__picture">
            <div className="main-page presence-entity presence-entity--size-5">
              <img
                src={connection?.avatar?.url}
                loading="lazy"
                alt="Dũng Phan Xuân"
                className="main-page presence-entity__image   EntityPhoto-circle-5 evi-image lazy-image ember-view"
              />

              <div className="main-page presence-entity__indicator presence-entity__indicator--size-5 presence-indicator hidden presence-indicator--size-5">
                <span className="main-page visually-hidden">
                  Status is offline
                </span>
              </div>
            </div>
          </a>

          <div className="main-page mn-connection-card__details">
            <a className="main-page ember-view mn-connection-card__link">
              <span className="main-page visually-hidden">Member’s name</span>
              <span className="main-page mn-connection-card__name t-16 t-black t-bold">
                {connection?.name}
              </span>
              {/* <span className="main-page visually-hidden">
                Member’s occupation
              </span>
              <span className="main-page mn-connection-card__occupation t-14 t-black--light t-normal">
                --
              </span> */}
            </a>
            {/* 
            <time className="main-page time-badge t-12 t-black--light t-normal">
              Connected 2 weeks ago
            </time> */}
          </div>

          <div className="main-page mn-connection-card__action-container">
            <div className="main-page entry-point">
              <div></div>

              <button
                aria-label="Send a message to Dũng Phan Xuân"
                className="main-page artdeco-button artdeco-button--2 artdeco-button--secondary ember-view"
              >
                <span className="main-page artdeco-button__text">Message</span>
              </button>
            </div>

            <div className="main-page artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view mn-connection-card__dropdown">
              <button
                aria-expanded="false"
                className="main-page artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view mn-connection-card__dropdown-trigger artdeco-button--tertiary artdeco-button--muted artdeco-button--circle p1"
                type="button"
                onClick={handleOpenOther}
              >
                <svg
                  role="img"
                  aria-hidden="false"
                  aria-label="More actions for Dũng Phan Xuân"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  data-test-icon="overflow-web-ios-medium"
                >
                  <use
                    href="#overflow-web-ios-medium"
                    width="24"
                    height="24"
                    className="main-page"
                  ></use>
                </svg>
              </button>

              <div
                aria-hidden="true"
                className={`main-page artdeco-dropdown__content ${
                  openOther && "artdeco-dropdown__content--is-open"
                } artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view`}
              >
                <div className="main-page artdeco-dropdown__content-inner">
                  <ul>
                    <li>
                      <div className="main-page artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view mn-connection-card__dropdown-item">
                        <button
                          onClick={handleRemoveConnection}
                          className="main-page display-flex align-items-center t-14 t-black--light t-normal"
                        >
                          <svg
                            role="img"
                            aria-hidden="false"
                            aria-label="Remove Dũng Phan Xuân from connections"
                            className="main-page mn-connection-card__dropdown-option-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            data-test-icon="trash-medium"
                          >
                            <use
                              href="#trash-medium"
                              width="24"
                              height="24"
                              className="main-page"
                            ></use>
                          </svg>

                          <span className="main-page mn-connection-card__dropdown-option-text ml1">
                            Remove connection
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="ember-view">
          <div className="ember-view"></div>
        </div> */}
        </div>
      </div>
    </li>
  );
}

export default SingleConnection;
