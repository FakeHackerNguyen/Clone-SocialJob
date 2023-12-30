/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth, useSearch } from "../../hooks";

function HeaderMainPage() {
  const [dropDown, setDropDown] = useState(false);
  const { authInfo, handleLogout } = useAuth();
  const { searchPeople } = useSearch();
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchPeople(e.target.value);
      navigate("/people", { state: { type: "people" } });
    }
  };
  const handleDropDown = function () {
    setDropDown(!dropDown);
  };

  return (
    <header
      id="global-nav"
      className="main-page global-nav global-alert-offset-top global-nav--visible"
    >
      <div className="main-page global-nav__content">
        <NavLink className="main-page app-aware-link">
          <div className="main-page ivm-image-view-model global-nav__branding-logo">
            <div className="main-page ivm-view-attr__img-wrapper display-flex">
              {/* <li-icon
                type="app-linkedin-bug-color-icon"
                class="main-page"
                size="large"
                role="img"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="main-page mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </li-icon> */}
            </div>
          </div>
        </NavLink>
        <div className="main-page global-nav__search">
          <div
            className={`main-page search-global-typeahead ${
              false &&
              "search-global-typeahead--focused search-global-typeahead--all-suggestions-ui-search-box-focused"
            } global-nav__search-typeahead`}
          >
            <div
              id="global-nav-typeahead"
              className="main-page search-global-typeahead__typeahead"
            >
              <input
                className="main-page search-global-typeahead__input"
                placeholder="Search"
                aria-autocomplete="list"
                aria-label="Search"
                aria-expanded="false"
                type="text"
                onKeyDown={handleKeyDown}
              />

              <div
                aria-hidden="true"
                className="main-page search-global-typeahead__search-icon-container"
              >
                <svg
                  role="none"
                  aria-hidden="true"
                  className="main-page search-global-typeahead__search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  data-test-icon="search-small"
                >
                  <use
                    className="main-page"
                    href="#search-small"
                    width="16"
                    height="16"
                  ></use>
                </svg>
              </div>
              {/* <div
                className={`main-page search-global-typeahead__overlay ${
                  false && "search-global-typeahead__overlay--visible"
                } global-alert-offset-top`}
              ></div>
              {false && (
                <div
                  className="main-page search-global-typeahead__content search-global-typeahead--content-ease-in search-global-typeahead__content--small-width"
                  aria-label="Recent"
                >
                  <div className="main-page search-history-container relative search-history-list">
                    <h2
                      className="main-page search-typeahead-v2__section-header pt3 ph4 pb2 t-black t-14 search-typeahead-v2__section-header--top-divider t-bold"
                      aria-hidden="true"
                    >
                      Recent
                    </h2>
                    <ul
                      className="main-page mb2"
                      role="listbox"
                      aria-label="Recent query search"
                    >
                      <li
                        aria-label="hr, recent search"
                        className="main-page search-history-list__query search-keyboard-nav__item"
                        role="option"
                        aria-selected="false"
                      >
                        <div className="main-page search-global-typeahead-hit search-global-typeahead-hit--all-suggestions-ui">
                          <div className="main-page ivm-image-view-model search-global-typeahead-hit__image">
                            <div className="main-page ivm-view-attr__img-wrapper display-flex">
                              <li-icon
                                aria-hidden="true"
                                type="clock"
                                class="main-page search-typeahead-v2__image-scale"
                                size="small"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  fill="currentColor"
                                  className="main-page mercado-match"
                                  width="16"
                                  height="16"
                                  focusable="false"
                                >
                                  <path d="M10.87 9.52a1 1 0 01-1.37.37l-2-1A1 1 0 017 8V5a1 1 0 012 0v2.42l1.5.74a1 1 0 01.37 1.36zM15 8a7 7 0 11-7-7 7 7 0 017 7zm-2 0a5 5 0 10-5 5 5 5 0 005-5z"></path>
                                </svg>
                              </li-icon>
                            </div>
                          </div>

                          <span className="main-page search-global-typeahead-hit__info truncate">
                            <span className="main-page search-global-typeahead-hit__text t-16 t-black t-bold">
                              hr
                            </span>{" "}
                            <span className="main-page t-12 t-black--light t-normal">
                              in Jobs
                            </span>
                          </span>
                        </div>
                      </li>

                      <li
                        aria-label="#hiringhr, recent search"
                        className="main-page search-history-list__query search-keyboard-nav__item"
                        role="option"
                        aria-selected="false"
                        id="basic-result-ember555"
                      >
                        <div className="main-page search-global-typeahead-hit search-global-typeahead-hit--all-suggestions-ui">
                          <div className="main-page ivm-image-view-model search-global-typeahead-hit__image">
                            <div className="main-page ivm-view-attr__img-wrapper display-flex">
                              <li-icon
                                aria-hidden="true"
                                type="clock"
                                class="main-page search-typeahead-v2__image-scale"
                                size="small"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  fill="currentColor"
                                  className="main-page mercado-match"
                                  width="16"
                                  height="16"
                                  focusable="false"
                                >
                                  <path d="M10.87 9.52a1 1 0 01-1.37.37l-2-1A1 1 0 017 8V5a1 1 0 012 0v2.42l1.5.74a1 1 0 01.37 1.36zM15 8a7 7 0 11-7-7 7 7 0 017 7zm-2 0a5 5 0 10-5 5 5 5 0 005-5z"></path>
                                </svg>
                              </li-icon>
                            </div>
                          </div>

                          <span className="main-page search-global-typeahead-hit__info truncate">
                            <span className="main-page search-global-typeahead-hit__text t-16 t-black t-bold">
                              #hiringhr
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2
                      className="main-page search-typeahead-v2__section-header pt3 pb2 t-black ph4 t-14 search-typeahead-v2__section-header--top-divider t-bold"
                      aria-hidden="true"
                    >
                      Try searching for
                    </h2>
                    <ul
                      role="listbox"
                      className="main-page mb2"
                      aria-label="Search suggestions"
                    >
                      <li
                        aria-label="Search suggestion, marketing director"
                        className="main-page search-query-suggestions__suggestion search-keyboard-nav__item"
                        role="option"
                        aria-selected="false"
                        id="basic-result-ember556"
                      >
                        <div
                          className="main-page search-global-typeahead-hit search-global-typeahead-hit--all-suggestions-ui search-global-typeahead-hit search-global-typeahead-hit--suggestion"
                          role="presentation"
                          data-view-name="search-query-item"
                        >
                          <div className="main-page ivm-image-view-model search-global-typeahead-hit__image">
                            <div className="main-page ivm-view-attr__img-wrapper display-flex">
                              <li-icon
                                aria-hidden="true"
                                type="search"
                                class="main-page search-typeahead-v2__image-scale"
                                size="small"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  fill="currentColor"
                                  className="main-page mercado-match"
                                  width="16"
                                  height="16"
                                  focusable="false"
                                >
                                  <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                                </svg>
                              </li-icon>
                            </div>
                          </div>

                          <span className="main-page search-global-typeahead-hit__info truncate">
                            <span className="main-page search-global-typeahead-hit__text t-16 t-black t-bold">
                              marketing director
                            </span>
                          </span>
                        </div>
                      </li>

                      <li
                        aria-label="Search suggestion, senior marketing manager"
                        className="main-page search-query-suggestions__suggestion search-keyboard-nav__item"
                        role="option"
                        aria-selected="false"
                        id="basic-result-ember560"
                      >
                        <div
                          className="main-page search-global-typeahead-hit search-global-typeahead-hit--all-suggestions-ui search-global-typeahead-hit search-global-typeahead-hit--suggestion"
                          role="presentation"
                          data-view-name="search-query-item"
                        >
                          <div className="main-page ivm-image-view-model search-global-typeahead-hit__image">
                            <div className="main-page ivm-view-attr__img-wrapper display-flex">
                              <li-icon
                                aria-hidden="true"
                                type="search"
                                class="main-page search-typeahead-v2__image-scale"
                                size="small"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  fill="currentColor"
                                  className="main-page mercado-match"
                                  width="16"
                                  height="16"
                                  focusable="false"
                                >
                                  <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                                </svg>
                              </li-icon>
                            </div>
                          </div>

                          <span className="main-page search-global-typeahead-hit__info truncate">
                            <span className="main-page search-global-typeahead-hit__text t-16 t-black t-bold">
                              senior marketing manager
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )} */}
            </div>

            <button
              className="main-page search-global-typeahead__collapsed-search-button"
              aria-label="Click to start a search"
              type="button"
            >
              <li-icon
                aria-hidden="true"
                type="search"
                class="main-page search-global-typeahead__collapsed-search-button-icon t-black--light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="main-page mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                </svg>
              </li-icon>
              <div className="main-page search-global-typeahead__collapsed-search-button-text t-black--light t-12 t-normal">
                Search
              </div>
            </button>
          </div>
        </div>

        <nav className="main-page global-nav__nav">
          <ul className="main-page global-nav__primary-items">
            <li className="main-page global-nav__primary-item">
              <NavLink
               to="/feed"
                className={`main-page app-aware-link ${
                  false && "global-nav__primary-link--active"
                } global-nav__primary-link`}
              >
                <div className="main-page ivm-image-view-model global-nav__icon-ivm">
                  <div className="main-page ivm-view-attr__img-wrapper display-flex">
                    <li-icon
                      aria-hidden="true"
                      type="home-active"
                      active="true"
                      className="main-page"
                      size="large"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="main-page mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                      </svg>
                    </li-icon>
                  </div>
                </div>

                <span
                  className="main-page t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                  title="Home"
                >
                  Home
                </span>
              </NavLink>
            </li>
            <li className="main-page global-nav__primary-item">
              <NavLink
                to="/my-network"
                className="main-page app-aware-link global-nav__primary-link"
              >
                <div className="main-page ivm-image-view-model global-nav__icon-ivm">
                  <div className="main-page ivm-view-attr__img-wrapper display-flex">
                    <li-icon
                      aria-hidden="true"
                      type="people"
                      className="main-page"
                      size="large"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="main-page mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                      </svg>
                    </li-icon>
                  </div>
                </div>

                <span
                  className="main-page t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                  title="My Network"
                >
                  My Network
                </span>
              </NavLink>
            </li>
            <li className="main-page global-nav__primary-item">
              <NavLink
                to="/jobs"
                className="main-page app-aware-link  global-nav__primary-link"
              >
                <div className="main-page ivm-image-view-model global-nav__icon-ivm">
                  <div className="main-page ivm-view-attr__img-wrapper display-flex">
                    <li-icon
                      aria-hidden="true"
                      type="job"
                      className="main-page"
                      size="large"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="main-page mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                      </svg>
                    </li-icon>
                  </div>
                </div>

                <span
                  className="main-page t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                  title="Jobs"
                >
                  Jobs
                </span>
              </NavLink>
            </li>
            {/* <li className="main-page global-nav__primary-item">
              <NavLink className="main-page app-aware-link global-nav__primary-link">
                <div className="main-page ivm-image-view-model global-nav__icon-ivm">
                  <div className="main-page ivm-view-attr__img-wrapper display-flex">
                    <li-icon
                      aria-hidden="true"
                      type="nav-small-messaging-icon"
                      className="main-page"
                      size="large"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="main-page mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                      </svg>
                    </li-icon>
                  </div>
                </div>

                <span
                  className="main-page t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                  title="Messaging"
                >
                  Messaging
                </span>
              </NavLink>
            </li> */}
            {/* <li className="main-page global-nav__primary-item">
              <NavLink className="main-page app-aware-link  global-nav__primary-link">
                <div className="main-page global-nav__primary-link-notif artdeco-notification-badge ember-view">
                  {" "}
                  <span className="main-page notification-badge notification-badge--show ">
                    <span
                      aria-hidden="true"
                      className="main-page notification-badge__count "
                    >
                      4
                    </span>
                    <span className="main-page a11y-text">
                      4 new notifications
                    </span>
                  </span>
                  <div className="main-page ivm-image-view-model global-nav__icon-ivm">
                    <div className="main-page ivm-view-attr__img-wrapper display-flex">
                      <li-icon
                        aria-hidden="true"
                        type="bell-fill"
                        className="main-page"
                        size="large"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="main-page mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                        </svg>
                      </li-icon>
                    </div>
                  </div>
                </div>

                <span
                  className="main-page t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                  title="Notifications"
                >
                  Notifications
                </span>
              </NavLink>
            </li> */}
            <li
              className="main-page global-nav__primary-item"
              onClick={handleDropDown}
            >
              <div className="main-page global-nav__me artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view">
                <button
                  aria-expanded="false"
                  className="main-page global-nav__primary-link global-nav__primary-link-me-menu-trigger artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view"
                  type="button"
                >
                  <img
                    width="24"
                    src={authInfo.profile?.avatar?.url}
                    height="24"
                    className="main-page global-nav__me-photo evi-image ghost-person ember-view"
                  />

                  <span className="main-page global-nav__primary-link-text">
                    Me
                    <svg
                      role="none"
                      aria-hidden="true"
                      className="main-page global-nav__icon global-nav__icon--small"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      data-test-icon="caret-small"
                    >
                      <use
                        className="main-page"
                        href="#caret-small"
                        width="16"
                        height="16"
                      ></use>
                    </svg>
                  </span>
                </button>

                <div
                  aria-hidden="true"
                  className={`main-page ${
                    dropDown && "artdeco-dropdown__content--is-open"
                  } global-nav__me-content artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view`}
                >
                  <div className="main-page artdeco-dropdown__content-inner">
                    <header className="main-page p2">
                      <NavLink className="main-page ember-view link-without-hover-state">
                        <div className="main-page artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
                          <div
                            className="main-page artdeco-entity-lockup__image artdeco-entity-lockup__image--type-circle ember-view"
                            type="circle"
                          >
                            <img
                              width="70"
                              src={authInfo.profile?.avatar?.url}
                              height="70"
                              alt="Nguyen Toan"
                              className="main-page global-nav__me-photo evi-image ghost-person ember-view"
                            />
                          </div>

                          <div className="main-page artdeco-entity-lockup__content ember-view">
                            <div className="main-page artdeco-entity-lockup__title ember-view">
                              {authInfo.profile?.fullName}
                            </div>

                            <div className="main-page artdeco-entity-lockup__subtitle ember-view">
                              {authInfo.profile?.initialEducation
                                ? `Student at ${authInfo.profile?.initialEducation?.university?.name}`
                                : `${authInfo.profile?.initialExperience?.titleJob} at ${authInfo.profile?.initialExperience?.company?.name}`}
                            </div>
                          </div>
                        </div>
                      </NavLink>

                      <NavLink
                        to={"/profile"}
                        className="main-page ember-view artdeco-button artdeco-button--secondary artdeco-button--1 mt2 full-width"
                      >
                        View Profile
                      </NavLink>
                    </header>

                    <ul
                      className="main-page global-nav__secondary-items"
                      aria-label="Me menu"
                    >
                      <li className="main-page global-nav__secondary-item">
                        <h3 className="main-page global-nav__secondary-title">
                          Account
                        </h3>

                        <ul className="main-page mv1" aria-label="Account">
                          <li className="main-page global-nav__secondary-item">
                            <NavLink className="main-page app-aware-link global-nav__secondary-link">
                              Settings &amp; Privacy
                            </NavLink>
                          </li>
                        </ul>
                      </li>

                      <li className="main-page global-nav__secondary-item">
                        <h3 className="main-page global-nav__secondary-title">
                          Manage
                        </h3>

                        <ul className="main-page mv1" aria-label="Manage">
                          <li className="main-page global-nav__secondary-item">
                            <NavLink className="main-page app-aware-link global-nav__secondary-link">
                              Posts &amp; Activity
                            </NavLink>
                          </li>
                          <li className="main-page global-nav__secondary-item">
                            <NavLink className="main-page app-aware-link global-nav__secondary-link">
                              Job Posting Account
                            </NavLink>
                          </li>
                        </ul>
                      </li>

                      <li className="main-page global-nav__secondary-item global-nav__secondary-item--divider">
                        <NavLink
                          className="main-page global-nav__secondary-link mv1"
                          onClick={handleLogout}
                          to="/auth/sign-in"
                        >
                          Sign Out
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="main-page global-nav__primary-item">
              <NavLink
                to="/job-posting"
                className="main-page app-aware-link  global-nav__primary-link global-nav__primary-item--divider pl3 pr3"
              >
                <div className="main-page ivm-image-view-model global-nav__icon-ivm">
                  <div className="main-page ivm-view-attr__img-wrapper display-flex">
                    <li-icon
                      aria-hidden="true"
                      type="nav-small-job-posting-icon"
                      active="true"
                      class="main-page"
                      size="large"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        width="24"
                        height="24"
                        focusable="false"
                        className="main-page"
                      >
                        <path d="M21 10H3a1 1 0 00-1 1v10a1 1 0 001 1h18a1 1 0 001-1V11a1 1 0 00-1-1zm-5 9H8v-2h8v2zm2-4H6v-2h12v2z"></path>
                      </svg>
                    </li-icon>
                  </div>
                </div>

                <span
                  className="main-page t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                  title="Post a job"
                >
                  Post a job
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderMainPage;
