/* eslint-disable react/prop-types */
import { useState } from "react";
import { accessChat } from "../../apis/chat";
import { useAuth, useChat } from "../../hooks";

function CommonInformation({
  onOpenModalConnection,
  onOpenModalEdit,
  people,
  onHandleClickChat,
}) {
  const [openMore, setOpenMore] = useState(false);
  const { authInfo } = useAuth();
  const { setSelectedChat, fetchChats } = useChat();

  if (!people) people = authInfo.profile;
  if (people && people._id === authInfo.profile?._id) people = authInfo.profile;

  const handleClickMore = function () {
    setOpenMore((prevStateMore) => !prevStateMore);
  };

  const handleAccessChat = async function () {
    const { error, chat } = await accessChat({ userId: people?._id });
    if (error) return;

    onHandleClickChat(chat._id);
    setSelectedChat(chat);
    fetchChats();
  };

  return (
    <section className="main-page artdeco-card ember-view pv-top-card">
      <div
        className="main-page live-video-hero-image"
        style={{ minHeight: "201px", maxHeight: "201px" }}
      >
        <div className="main-page live-video-hero-image__bg-image">
          <div className="main-page profile-background-image profile-background-image--default"></div>
        </div>
        <div className="main-page live-video-hero-image__live-video"></div>
      </div>

      <div className="main-page ph5 pb5">
        <div className="main-page display-flex">
          <div className="main-page pv-top-card--photo text-align-left pv-top-card--photo-resize">
            <div className="main-page pv-top-card__non-self-photo-wrapper ml0">
              <button
                className="main-page pv-top-card-profile-picture pv-top-card-profile-picture__container display-block pv-top-card__photo presence-entity__image EntityPhoto-circle-9"
                aria-label="open profile picture"
                type="button"
              >
                <img
                  width="200"
                  title="Melissa Ho"
                  src={people?.avatar?.url}
                  height="200"
                  alt="Melissa Ho"
                  className="main-page pv-top-card-profile-picture__image pv-top-card-profile-picture__image--show evi-image ember-view"
                />
              </button>

              <div className="main-page presence-entity__indicator presence-entity__indicator--size-9 presence-indicator hidden presence-indicator--size-9">
                <span className="main-page visually-hidden">
                  Status is offline
                </span>
              </div>
            </div>
          </div>
          <div className="main-page flex-1 flex-column">
            <div className="main-page pv-top-card__badge-wrap">
              {people?._id === authInfo?.profile?._id && (
                <div>
                  <a className="main-page ember-view">
                    <button
                      className="main-page artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view mh1"
                      type="button"
                      onClick={onOpenModalEdit}
                    >
                      {" "}
                      <svg
                        role="none"
                        aria-hidden="true"
                        className="main-page artdeco-button__icon "
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        data-test-icon="edit-medium"
                      >
                        <use
                          href="#edit-medium"
                          width="24"
                          height="24"
                          className="main-page"
                        ></use>
                      </svg>
                      <span className="main-page artdeco-button__text"></span>
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="main-page mt2 relative">
          <div className="main-page GzfFsHYUeATlDQRrmdnUyDDEsISwxeaxtds">
            <div className="main-page ZxWTwEDVahYpetAhPrAdccEMjrEwecpKIOI">
              <span className="main-page artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom artdeco-hoverable-trigger--is-hoverable ember-view">
                <a className="main-page ember-view pv-text-details__about-this-profile-entrypoint">
                  <h1 className="main-page text-heading-xlarge inline t-24 v-align-middle break-words">
                    {people?.fullName}
                  </h1>
                </a>
                <div className="main-page ember-view">
                  <div className="main-page ember-view"></div>
                </div>
              </span>
            </div>
            <div className="main-page text-body-medium break-words">
              {people?.initialEducation
                ? `Student at ${people?.initialEducation?.university?.name}`
                : `${people?.initialExperience?.titleJob} at ${people?.initialExperience?.company?.name}`}
            </div>
          </div>
          <ul className="main-page pv-text-details__right-panel">
            {people?.initialEducation && (
              <li className="main-page NxQuESGSJNimbWZuonIhsprFmHwRUJakmI">
                <button
                  className="main-page BWRYNzZOvJlhLezivaYusShGJnAWdJBxlOHdxok text-align-left"
                  aria-label="Current company: Bright Vietnam. Click to skip to experience card"
                  type="button"
                >
                  <img
                    src={people?.initialEducation?.university?.avatar?.url}
                    alt=""
                    className="main-page evi-image ember-view raKKHQaXgrieQpQOoPKHhmuKirxdyucGUFxCI EntityPhoto-square-1"
                  />
                  <span className="main-page OpKGlgkFuOIdasCWGNfkEsWSUGkQoilbc hoverable-link-text break-words text-body-small t-black">
                    <div
                      className="main-page inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp inline"
                      style={{ WebkitLineClamp: "2" }}
                    >
                      {people?.initialEducation?.university?.name}
                    </div>
                  </span>
                </button>
              </li>
            )}
            {people?.initialExperience && (
              <li className="main-page NxQuESGSJNimbWZuonIhsprFmHwRUJakmI">
                <button
                  className="main-page BWRYNzZOvJlhLezivaYusShGJnAWdJBxlOHdxok text-align-left"
                  type="button"
                >
                  <img
                    src={people?.initialExperience?.company?.avatar?.url}
                    className="main-page evi-image ember-view raKKHQaXgrieQpQOoPKHhmuKirxdyucGUFxCI EntityPhoto-square-1"
                  />
                  <span className="main-page OpKGlgkFuOIdasCWGNfkEsWSUGkQoilbc hoverable-link-text break-words text-body-small t-black">
                    <div
                      className="main-page inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp inline"
                      style={{ WebkitLineClamp: "2" }}
                    >
                      {people?.initialExperience?.company?.name}
                    </div>
                  </span>
                </button>
              </li>
            )}
          </ul>
          <div className="main-page GzfFsHYUeATlDQRrmdnUyDDEsISwxeaxtds mt2">
            <span className="main-page text-body-small inline t-black--light break-words">
              {people?.country}
            </span>
            {/* <span className="main-page pv-text-details__separator t-black--light">
              {" "}
              <a
                id="top-card-text-details-contact-info"
                className="main-page ember-view link-without-visited-state cursor-pointer text-heading-small inline-block break-words"
              >
                Contact info
              </a>
            </span> */}
          </div>
        </div>

        <ul className="main-page pv-top-card--list pv-top-card--list-bullet">
          <li className="main-page text-body-small">
            <span className="main-page t-black--light">
              <span className="main-page t-bold">430</span> connections
            </span>
          </li>
        </ul>

        {people?._id !== authInfo.profile?._id && (
          <div className="main-page pv-top-card-v2-ctas">
            <div className="main-page pvs-profile-actions">
              <button
                aria-label="Invite Melissa Ho to connect"
                className="main-page artdeco-button artdeco-button--2 artdeco-button--primary ember-view pvs-profile-actions__action"
                type="button"
                onClick={onOpenModalConnection}
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
                  data-test-icon="connect-small"
                >
                  <use
                    href="#connect-small"
                    width="16"
                    height="16"
                    className="main-page"
                  ></use>
                </svg>
                <span className="main-page artdeco-button__text">Connect</span>
              </button>

              <div className="main-page entry-point profile-action-compose-option">
                <div></div>

                <button
                  aria-label="Message Melissa"
                  className="main-page artdeco-button artdeco-button--2 artdeco-button--secondary ember-view pvs-profile-actions__action"
                  onClick={handleAccessChat}
                >
                  <span className="main-page artdeco-button__text">
                    Message
                  </span>
                </button>
              </div>

              <div
                className={`main-page artdeco-dropdown ${
                  openMore && "artdeco-dropdown--is-open"
                } artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view`}
              >
                <button
                  aria-expanded="false"
                  aria-label="More actions"
                  className="main-page artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view pvs-profile-actions__action artdeco-button artdeco-button--secondary artdeco-button--muted artdeco-button--2"
                  type="button"
                  onClick={handleClickMore}
                >
                  <span>More</span>
                </button>
                <div
                  className={`main-page pvs-overflow-actions-dropdown__content artdeco-dropdown__content ${
                    openMore && "artdeco-dropdown__content--is-open"
                  } artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view`}
                >
                  <div className="main-page artdeco-dropdown__content-inner">
                    <ul>
                      <li>
                        <div
                          aria-label="Follow Melissa Ho"
                          role="button"
                          className="main-page artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view full-width display-flex align-items-center"
                        >
                          <svg
                            role="none"
                            aria-hidden="true"
                            className="main-page mr3 flex-grow-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            data-test-icon="add-medium"
                          >
                            <use
                              href="#add-medium"
                              width="24"
                              height="24"
                              className="main-page"
                            ></use>
                          </svg>

                          <span
                            className="main-page display-flex t-normal flex-1"
                            aria-hidden="true"
                          >
                            Follow
                          </span>
                        </div>
                      </li>

                      <li>
                        <div
                          role="button"
                          className="main-page display-flex align-items-center full-width artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="currentColor"
                            className="main-page mr3 flex-grow-0"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-4 15h-1a3 3 0 01-3-3 3.22 3.22 0 01.1-.75L11.2 10h2.07L12 14.75A1 1 0 0013 16h1zm-1-9.75A1.25 1.25 0 1114.25 7 1.25 1.25 0 0113 8.25z"></path>
                          </svg>
                          <span
                            className="main-page display-flex t-normal flex-1"
                            aria-hidden="true"
                          >
                            About this profile
                          </span>
                          <span className="main-page a11y-text" aria-live="off">
                            About this profile
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div id="main-page profile-sticky-header-toggle"></div> */}
    </section>
  );
}

export default CommonInformation;
