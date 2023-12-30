import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { reportJob } from "../../apis/job";
import { useAuth, useNotification } from "../../hooks";
import { calculateTime } from "../../utils/helper";
import ModalApplyJob from "../Jobs/ModalApplyJob";
/* eslint-disable react/prop-types */
function DetailJob({ currentJob }) {
  const [showDetail, setShowDetail] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [openModalApplyJob, setOpenModalApplyJob] = useState(false);

  const { authInfo } = useAuth();

  console.log(authInfo);
  const { isLoggedIn } = authInfo;
  const { updateNotification } = useNotification();
  const navigate = useNavigate();

  const handleShowDetail = () => {
    setShowDetail((prevState) => !prevState);
  };

  const handleOpenReport = () => {
    setOpenReport((prevState) => !prevState);
  };

  const handleCloseModal = () => {
    setOpenModalApplyJob(false);
  };

  const handleOpenModal = () => {
    if (!isLoggedIn) {
      navigate("/");
      updateNotification("error", "You need to login");
      return;
    }
    setOpenModalApplyJob(true);
  };

  const handleReport = async () => {
    const { error, message } = await reportJob({ jobId: currentJob._id });
    if (error) return updateNotification("error", error);

    updateNotification("success", message);
  };

  return (
    <React.Fragment>
      {openModalApplyJob &&
        ReactDOM.createPortal(
          <ModalApplyJob
            currentJob={currentJob}
            onHandleCloseModal={handleCloseModal}
          />,
          document.getElementById("artdeco-modal-outlet")
        )}
      <section
        className="jobs two-pane-serp-page__detail-view"
        style={{ height: "calc(100vh - 133px)" }}
      >
        <div
          className={`jobs details-pane__loader ${
            true && "details-pane__loader--hide"
          }`}
        >
          <div
            className={`jobs loader ${
              false && "loader--show loader--absolute"
            }`}
          >
            <div className="jobs loader__container mb-2 overflow-hidden">
              <span
                className="jobs loader__icon inline-block loader__icon--default text-color-progress-loading lazy-loaded"
                aria-hidden="true"
                aria-busy="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 60"
                  width="60"
                  height="60"
                  focusable="false"
                  fill="currentColor"
                  className="jobs loader__icon-svg--large h-[60px] min-h-[60px] w-[60px] min-w-[60px] lazy-loaded"
                  aria-busy="false"
                >
                  <g>
                    <path
                      opacity="1"
                      d="M30.1,16.1L30.1,16.1c-0.6,0-1-0.5-1-1V1c0-0.6,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1v14.1C31.1,15.7,30.6,16.1,30.1,16.1z"
                    ></path>
                    <path
                      opacity="0.85"
                      d="M23.1,18.1L23.1,18.1c-0.5,0.3-1.1,0.1-1.4-0.4L14.5,5.6c-0.3-0.5-0.2-1.1,0.4-1.4l0,0C15.4,3.9,16,4,16.3,4.6l7.2,12.1C23.8,17.2,23.6,17.8,23.1,18.1z"
                    ></path>
                    <path
                      opacity="0.77"
                      d="M17.9,23.1L17.9,23.1c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7c-0.5-0.3-0.7-0.9-0.4-1.4l0,0c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7C18,22,18.2,22.7,17.9,23.1z"
                    ></path>
                    <path
                      opacity="0.69"
                      d="M16.1,30.1L16.1,30.1c0,0.6-0.5,1-1,1L1,31.2c-0.6,0-1-0.5-1-1l0,0c0-0.6,0.5-1,1-1l14.1-0.1C15.7,29.1,16.1,29.5,16.1,30.1z"
                    ></path>
                    <path
                      opacity="0.61"
                      d="M18,36.9L18,36.9c0.3,0.5,0.2,1.1-0.4,1.4L5.5,45.6c-0.5,0.3-1.1,0.2-1.4-0.4l0,0c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3C17.1,36.2,17.7,36.4,18,36.9z"
                    ></path>
                    <path
                      opacity="0.53"
                      d="M23.3,42.1L23.3,42.1c0.5,0.3,0.6,0.9,0.4,1.4l-7.3,12.1c-0.3,0.5-0.9,0.6-1.4,0.4l0,0c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1C22.1,41.9,22.8,41.8,23.3,42.1z"
                    ></path>
                    <path
                      opacity="0.45"
                      d="M30.1,43.9L30.1,43.9c0.6,0,1,0.5,1,1V59c0,0.6-0.5,1-1,1l0,0c-0.6,0-1-0.5-1-1V44.9C29,44.4,29.5,43.9,30.1,43.9z"
                    ></path>
                    <path
                      opacity="0.37"
                      d="M37,41.9L37,41.9c0.5-0.3,1.1-0.2,1.4,0.4l7.2,12.1c0.3,0.5,0.2,1.1-0.4,1.4l0,0c-0.5,0.3-1.1,0.2-1.4-0.4l-7.2-12.1C36.4,42.8,36.6,42.2,37,41.9z"
                    ></path>
                    <path
                      opacity="0.29"
                      d="M42.2,36.8L42.2,36.8c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7c0.5,0.3,0.7,0.9,0.4,1.4l0,0c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7C42.1,38,41.9,37.4,42.2,36.8z"
                    ></path>
                    <path
                      opacity="0.21 "
                      d="M44,29.9L44,29.9c0-0.6,0.5-1,1-1h14.1c0.6,0,1,0.5,1,1l0,0c0,0.6-0.5,1-1,1L45,31C44.4,31,44,30.5,44,29.9z"
                    ></path>
                    <path
                      opacity="0.13"
                      d="M42.1,23.1L42.1,23.1c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3c0.5-0.3,1.1-0.2,1.4,0.4l0,0c0.3,0.4,0.1,1.1-0.4,1.3l-12.1,7.3C43.1,23.7,42.4,23.6,42.1,23.1z"
                    ></path>
                    <path
                      opacity="0.05"
                      d="M36.9,17.9L36.9,17.9c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1c0.3-0.5,0.9-0.6,1.4-0.4l0,0c0.5,0.3,0.6,0.9,0.4,1.4l-7.4,12.2C38,18.1,37.3,18.2,36.9,17.9z"
                    ></path>
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      begin="0s"
                      dur="1s"
                      repeatCount="indefinite"
                      calcMode="discrete"
                      keyTimes="0;.0833;.166;.25;.3333;.4166;.5;.5833;.6666;.75;.8333;.9166;1"
                      values="0,30,30;30,30,30;60,30,30;90,30,30;120,30,30;150,30,30;180,30,30;210,30,30;240,30,30;270,30,30;300,30,30;330,30,30;360,30,30"
                    ></animateTransform>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="jobs details-pane__content details-pane__content--show">
          <section className="jobs top-card-layout container-lined overflow-hidden babybear:rounded-[0px]">
            <div className="jobs top-card-layout__card relative p-2 papabear:p-details-container-padding">
              <a>
                <img
                  className="jobs artdeco-entity-image artdeco-entity-image--square-5 lazy-loaded"
                  src={currentJob?.company?.avatar?.url}
                />
              </a>

              <div className="jobs top-card-layout__entity-info-container flex flex-wrap papabear:flex-nowrap">
                <div className="jobs top-card-layout__entity-info flex-grow flex-shrink-0 basis-0 babybear:flex-none babybear:w-full babybear:flex-none babybear:w-full">
                  <a className="jobs topcard__link" href="">
                    <h2 className="jobs top-card-layout__title font-sans text-lg papabear:text-xl font-bold leading-open text-color-text mb-0 topcard__title">
                      {`${currentJob?.jobTitle} - ${currentJob?.jobLocation} - ${currentJob?.workplaceType}`}
                    </h2>
                  </a>

                  <h4 className="jobs top-card-layout__second-subline font-sans text-sm leading-open text-color-text-low-emphasis mt-0.5">
                    <div className="jobs topcard__flavor-row">
                      <span className="jobs topcard__flavor">
                        <a className="jobs topcard__org-name-link topcard__flavor--black-link">
                          {currentJob?.company?.name}{" "}
                        </a>
                      </span>
                      <span className="jobs topcard__flavor topcard__flavor--bullet">
                        {" "}
                        {currentJob?.jobLocation}
                      </span>
                    </div>
                    <div className="jobs topcard__flavor-row">
                      <span className="jobs posted-time-ago__text topcard__flavor--metadata">
                        {calculateTime(currentJob?.updatedAt)}{" "}
                      </span>

                      <span className="jobs num-applicants__caption topcard__flavor--metadata topcard__flavor--bullet">
                        {" "}
                        {`${currentJob?.applicants?.length || 0} applicants`}
                      </span>
                    </div>

                    <div className="jobs face-pile flex see-who-was-hired">
                      {/* <div className="jobs face-pile__images-container self-start flex-shrink-0 mr-1 leading-[1]">
                      <img
                        alt=""
                        data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2"
                        data-ghost-classes="bg-color-entity-ghost-background"
                        className="jobs inline-block relative rounded-[50%] w-4 h-4 face-pile__image border-1 border-solid border-color-transparent -ml-2 first:ml-0 lazy-loaded"
                        aria-busy="false"
                        src="https://static.licdn.com/aero-v1/sc/h/ep18cz0zbog1k61nu8kk2kwmr"
                      />

                      <img
                        alt=""
                        data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2"
                        data-ghost-classes="bg-color-entity-ghost-background"
                        className="jobs inline-block relative rounded-[50%] w-4 h-4 face-pile__image border-1 border-solid border-color-transparent -ml-2 first:ml-0 lazy-loaded"
                        aria-busy="false"
                        src="https://static.licdn.com/aero-v1/sc/h/8w44rdi2q9j581bh0jvajry6x"
                      />

                      <img
                        alt=""
                        data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2"
                        data-ghost-classes="bg-color-entity-ghost-background"
                        className="jobs inline-block relative rounded-[50%] w-4 h-4 face-pile__image border-1 border-solid border-color-transparent -ml-2 first:ml-0 lazy-loaded"
                        aria-busy="false"
                        src="https://static.licdn.com/aero-v1/sc/h/4gybc9qd9imal0s1aw11rym5e"
                      />
                    </div> */}
                      {/* <a
                    data-tracking-will-navigate=""
                    data-tracking-control-name="public_jobs_see-who-was-hired_people-search-link_face-pile-cta"
                    href="https://www.linkedin.com/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fsearch%2Fresults%2Fpeople%2F%3FfacetCurrentCompany%3D14415749%26title%3DFull%2BStack%2BEngineer&amp;emailAddress=&amp;fromSignIn=&amp;trk=public_jobs_see-who-was-hired_people-search-link_face-pile-cta"
                    className="jobs face-pile__cta self-center link-no-visited-state"
                  >
                    See who SMG Swiss Marketplace Group Vietnam has hired
                    for this role
                  </a> */}
                    </div>
                  </h4>

                  <div className="jobs top-card-layout__cta-container flex flex-wrap mt-0.5 papabear:mt-0 ml-[-12px]">
                    <button
                      onClick={handleOpenModal}
                      className="jobs sign-up-modal__outlet top-card-layout__cta mt-2 ml-1.5 h-auto babybear:flex-auto top-card-layout__cta--primary btn-md btn-primary"
                    >
                      Apply
                      <span className="jobs lazy-loaded" aria-busy="false">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer_1"
                          data-name="Layer 1"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          focusable="false"
                          className="jobs apply-button__offsite-apply-icon-svg lazy-loaded"
                          aria-busy="false"
                        >
                          <path
                            fill="#fff"
                            d="M12,10v3a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H6V6H4v6h6V10h2Zm1-8H8V4h2.67L6,8.67,7.33,10,12,5.33V8h2V3A1,1,0,0,0,13,2Z"
                          ></path>
                        </svg>
                      </span>
                    </button>

                    <button className="jobs top-card-layout__cta mt-2 ml-1.5 h-auto babybear:flex-auto top-card-layout__cta--secondary btn-md btn-secondary save-job-modal-outlet">
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="jobs ellipsis-menu absolute right-0 top-0 top-card-layout__ellipsis-menu mr-1 papabear:mt-0.5 papabear:mr-2">
                <div className="jobs collapsible-dropdown flex items-center relative hyphens-auto">
                  <button
                    className="jobs ellipsis-menu__trigger collapsible-dropdown__button btn-md btn-tertiary cursor-pointer !py-[6px] !px-1 flex items-center rounded-[50%]"
                    onClick={handleOpenReport}
                  >
                    <span
                      className="jobs ellipsis-menu__trigger-icon m-0 p-0 centered-icon lazy-loaded"
                      aria-hidden="true"
                      aria-busy="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        focusable="false"
                        className="jobs lazy-loaded"
                        aria-busy="false"
                      >
                        <path d="M2 10h4v4H2v-4zm8 4h4v-4h-4v4zm8-4v4h4v-4h-4z"></path>
                      </svg>
                    </span>
                  </button>

                  <ul
                    role="menu"
                    className={`jobs collapsible-dropdown__list ${
                      !openReport && "hidden"
                    } container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]`}
                  >
                    <li className="jobs ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                      <a
                        onClick={handleReport}
                        className="jobs semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]"
                      >
                        <span className="jobs ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1 lazy-loaded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            data-supported-dps="24x24"
                            fill="currentColor"
                            focusable="false"
                            className="jobs lazy-loaded"
                            aria-busy="false"
                          >
                            <path d="M13.82 5L14 4a1 1 0 00-1-1H5V2H3v20h2v-7h4.18L9 16a1 1 0 001 1h8.87L21 5h-7.18zM5 13V5h6.94l-1.41 8H5zm12.35 2h-6.3l1.42-8h6.29z"></path>
                          </svg>
                        </span>
                        Report this job
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*  */}
          </section>

          <div className="jobs decorated-job-posting__details">
            <section className="jobs core-section-container my-3 description">
              <div className="jobs core-section-container__content break-words">
                <div className="jobs description__text description__text--rich">
                  <section
                    data-max-lines="5"
                    className={`jobs show-more-less-html ${
                      showDetail && "show-more-less-html--more"
                    }`}
                  >
                    <div
                      className={`jobs show-more-less-html__markup ${
                        !showDetail &&
                        "show-more-less-html__markup--clamp-after-5"
                      } relative overflow-hidden`}
                      dangerouslySetInnerHTML={{
                        __html: currentJob?.description,
                      }}
                    ></div>

                    <button
                      className="jobs show-more-less-html__button show-more-less-button show-more-less-html__button--more !ml-0.5"
                      onClick={handleShowDetail}
                    >
                      Show more
                      <span className="jobs show-more-less-html__button-icon show-more-less-button-icon lazy-loaded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          preserveAspectRatio="xMinYMin meet"
                          focusable="false"
                          className="jobs lazy-loaded"
                          aria-busy="false"
                        >
                          <path
                            d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </button>

                    <button
                      className="jobs show-more-less-html__button show-more-less-button show-more-less-html__button--less !ml-0.5"
                      onClick={handleShowDetail}
                    >
                      Show less
                      <span className="jobs show-more-less-html__button-icon show-more-less-button-icon lazy-loaded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          preserveAspectRatio="xMinYMin meet"
                          focusable="false"
                          className="jobs lazy-loaded"
                          aria-busy="false"
                        >
                          <path
                            d="M8 7l-5.9 4L1 9.5l6.2-4.2c.5-.3 1.2-.3 1.7 0L15 9.5 13.9 11 8 7z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </section>
                </div>

                <ul className="jobs description__job-criteria-list">
                  {/* <li className="jobs description__job-criteria-item">
                <h3 className="jobs description__job-criteria-subheader">
                  Seniority level
                </h3>
                <span className="jobs description__job-criteria-text description__job-criteria-text--criteria">
                  Mid-Senior level
                </span>
              </li> */}
                  <li className="jobs description__job-criteria-item">
                    <h3 className="jobs description__job-criteria-subheader">
                      Employment type
                    </h3>
                    <span className="jobs description__job-criteria-text description__job-criteria-text--criteria">
                      {currentJob?.jobType}
                    </span>
                  </li>
                  {/* <li className="jobs description__job-criteria-item">
                <h3 className="jobs description__job-criteria-subheader">
                  Job function
                </h3>
                <span className="jobs description__job-criteria-text description__job-criteria-text--criteria">
                  Engineering and Information Technology
                </span>
              </li> */}
                  <li className="jobs description__job-criteria-item">
                    <h3 className="jobs description__job-criteria-subheader">
                      Industries
                    </h3>
                    <span className="jobs description__job-criteria-text description__job-criteria-text--criteria">
                      {currentJob?.company?.typeOfBusiness}
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default DetailJob;
