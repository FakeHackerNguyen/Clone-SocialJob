import ReactDOM from "react-dom";
import "../styles/Profile/re0btdsxnudmtlmplcnybmf2.css";
import "../styles/Profile/ct5v3xt7kfax49yhxm9p3uq9r.css";
import "../styles/Profile/a4aig5bu1oeucqtdyyjo3df6n.css";
import "../styles/Profile/cw9a7pbxt50sx52pn0teu1bb1.css";
import HeaderMainPage from "../components/MainPage/HeaderMainPage";
import SVG from "../components/SVG";
import Experiences from "../components/Profile/Experiences";
import CommonInformation from "../components/Profile/CommonInformation";
import Educations from "../components/Profile/Educations";
import React from "react";
import ModalConnection from "../components/Profile/ModalConnection";
import { useState } from "react";
import BoxMessage from "../components/Chat/BoxMessage";
import BoxChat from "../components/Chat/BoxChat";
import NotificationProvider from "../context/NotificationProvider";
import { useLocation } from "react-router-dom";
import ModalEditProfile from "../components/Profile/ModalEditProfile";
import ModalAddEducation from "../components/Profile/ModalAddEducation";
import ModalAddExperience from "../components/Profile/ModalAddExperience";

function Profile() {
  const [openModalConnection, setOpenModalConnection] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalAddEducation, setOpenModalAddEducation] = useState(false);
  const [openModalAddExperience, setOpenModalAddExperience] = useState(false);

  const [closeBoxMessage, setCloseBoxMessage] = useState(true);
  const [chatId, setChatId] = useState();

  const { state } = useLocation();

  const handleOpenModalConnection = function () {
    setOpenModalConnection(true);
  };

  const handleCloseModalConnection = function () {
    setOpenModalConnection(false);
  };

  const handleOpenModalEdit = function () {
    setOpenModalEdit(true);
  };

  const handleCloseModalEdit = function () {
    setOpenModalEdit(false);
  };

  const handleOpenModalAddEducation = function () {
    setOpenModalAddEducation(true);
    setOpenModalEdit(false);
  };

  const handleCloseModalAddEducation = function () {
    setOpenModalAddEducation(false);
  };

  const handleOpenModalAddExperience = function () {
    setOpenModalAddExperience(true);
    setOpenModalEdit(false);
  };

  const handleCloseModalAddExperience = function () {
    setOpenModalAddExperience(false);
  };

  const handleCloseBoxMessage = function () {
    setCloseBoxMessage(true);
  };

  const handleClickChat = function (chatId) {
    setChatId(chatId);
    setCloseBoxMessage(false);
  };

  return (
    <React.Fragment>
      {openModalConnection &&
        ReactDOM.createPortal(
          <ModalConnection
            onCloseModalConnection={handleCloseModalConnection}
            user={state}
          />,
          document.getElementById("artdeco-modal-outlet")
        )}

      {openModalEdit &&
        ReactDOM.createPortal(
          <ModalEditProfile
            onCloseModalEdit={handleCloseModalEdit}
            onOpenModalAddExperience={handleOpenModalAddExperience}
            onOpenModalAddEducation={handleOpenModalAddEducation}
          />,
          document.getElementById("artdeco-modal-outlet")
        )}

      {openModalAddEducation &&
        ReactDOM.createPortal(
          <ModalAddEducation
            onCloseModalAddEducation={handleCloseModalAddEducation}
          />,
          document.getElementById("artdeco-modal-outlet")
        )}

      {openModalAddExperience &&
        ReactDOM.createPortal(
          <ModalAddExperience
            onCloseModalAddExperience={handleCloseModalAddExperience}
          />,
          document.getElementById("artdeco-modal-outlet")
        )}

      {ReactDOM.createPortal(
        <NotificationProvider />,
        document.getElementById("artdeco-toasts__wormhole")
      )}

      <div className="main-page application-outlet">
        <SVG />
        <HeaderMainPage />

        <div className="main-page authentication-outlet">
          <div
            id="main-page profile-content"
            className="main-page extended tetris pv-profile-body-wrapper"
          >
            <div className="main-page body">
              <div className="main-page scaffold-layout scaffold-layout--breakpoint-xl scaffold-layout--main-aside scaffold-layout--reflow pv-profile">
                {/* <section className="main-page scaffold-layout-toolbar scaffold-layout-toolbar--is-fixed scaffold-layout-toolbar--is-fixed-visible">
                <div className="main-page scaffold-layout-toolbar__content scaffold-layout-container scaffold-layout-container--reflow">
                  <div className="main-page pv-profile-sticky-header-v2__container pv1">
                    <div className="main-page artdeco-entity-lockup artdeco-entity-lockup--size-1 ember-view pv-profile-sticky-header-v2__mini-profile-container">
                      <div className="main-page presence-entity presence-entity--size-1 m1">
                        <img
                          src="https://media.licdn.com/dms/image/C5603AQFWwZbi9g5ITg/profile-displayphoto-shrink_100_100/0/1517519074701?e=1707350400&amp;v=beta&amp;t=pJX1VqA_hcoDgJFlhLLqD3kqtF7LZ__DsWisgXjk3Fg"
                          loading="lazy"
                          alt="Melissa Ho"
                          className="main-page presence-entity__image   EntityPhoto-circle-1 evi-image lazy-image ember-view"
                        />

                        <div className="main-page presence-entity__indicator presence-entity__indicator--size-1 presence-indicator hidden presence-indicator--size-1">
                          <span className="main-page visually-hidden">
                            Status is offline
                          </span>
                        </div>
                      </div>

                      <div className="main-page artdeco-entity-lockup__content ember-view overflow-hidden ml1 align-self-flex-start">
                        <div className="main-page artdeco-entity-lockup__title ember-view">
                          Melissa Ho
                        </div>

                        <div className="main-page artdeco-entity-lockup__subtitle ember-view truncate">
                          Social Entrepreneur
                        </div>
                      </div>
                    </div>
                    <div className="main-page pv-profile-sticky-header-v2__actions-container">
                      <div className="main-page display-flex inline-flex">
                        <div className="main-page pvs-sticky-header-profile-actions inline-flex">
                          <div className="main-page pvs-sticky-header-profile-actions__action">
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
                                  openMore &&
                                  "artdeco-dropdown__content--is-open"
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
                                        <span
                                          className="main-page a11y-text"
                                          aria-live="off"
                                        >
                                          About this profile
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="main-page entry-point profile-action-compose-option">
                            <button
                              aria-label="Message Melissa"
                              className="main-page artdeco-button artdeco-button--2 artdeco-button--secondary ember-view pvs-sticky-header-profile-actions__action"
                            >
                              <span className="main-page artdeco-button__text">
                                Message
                              </span>
                            </button>
                          </div>

                          <button
                            aria-label="Invite Melissa Ho to connect"
                            className="main-page artdeco-button artdeco-button--2 artdeco-button--primary ember-view pvs-sticky-header-profile-actions__action"
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
                              data-test-icon="connect-small"
                            >
                              <use
                                href="#connect-small"
                                width="16"
                                height="16"
                                className="main-page"
                              ></use>
                            </svg>
                            <span className="main-page artdeco-button__text">
                              Connect
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
                <div className="main-page scaffold-layout__inner scaffold-layout-container scaffold-layout-container--reflow">
                  <div className="main-page scaffold-layout__row scaffold-layout__content scaffold-layout__content--main-aside scaffold-layout__content--has-aside">
                    <main className="main-page scaffold-layout__main">
                      <CommonInformation
                        onOpenModalConnection={handleOpenModalConnection}
                        onOpenModalEdit={handleOpenModalEdit}
                        people={state}
                        onHandleClickChat={handleClickChat}
                      />
                      <Experiences people={state} />
                      <Educations people={state} />
                    </main>
                    <aside className="main-page scaffold-layout__aside">
                      <a>
                        <img
                          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                          alt="Advertise on LinkedIn"
                          border="0"
                          style={{ borderRadius: "10px" }}
                        />
                      </a>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-page application-outlet__overlay-container">
          <aside
            id="main-page msg-overlay"
            className="main-page msg-overlay-container msg-overlay-container-reflow"
          >
            <BoxChat onHandleClickChat={handleClickChat} />
            {!closeBoxMessage && (
              <BoxMessage
                onHandleCloseBoxMessage={handleCloseBoxMessage}
                chatId={chatId}
              />
            )}
          </aside>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
