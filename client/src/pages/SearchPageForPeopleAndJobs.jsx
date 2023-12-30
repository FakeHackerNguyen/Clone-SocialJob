/* eslint-disable react/prop-types */
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import "../styles/OutsidePeople/axxi75juk1bgdfx78rh5ax3w8.css";
import "../styles/OutsideJobs/1qrdjx8vxcq7uy4mll3e7qrjc.css";
import { useState } from "react";
import SearchPeople from "../components/Search/SearchPeople";
import SearchJobs from "../components/Search/SearchJobs";
import SearchPeopleResults from "../components/Search/SearchPeopleResults";
import SearchJobsResults from "../components/Search/SearchJobsResults";
import { useAuth } from "../hooks";

function SearchPageForPeopleAndJobs({ type }) {
  const [openListChoice, setOpenListChoice] = useState(false);

  const { isAuth } = useAuth();
  const { isLoggedIn } = isAuth;

  const navigate = useNavigate();

  const { state } = useLocation();
  if (state?.type) type = state?.type;

  const handleOpenListChoice = function () {
    setOpenListChoice((prevState) => !prevState);
  };

  const handleChangeCurrentType = function (e) {
    const { name } = e.target;
    if (name === "people") navigate("/people", { replace: true });
    else navigate("/jobs", { replace: true });
  };

  return (
    <div className="people base-serp-page">
      <header className="people base-serp-page__header global-alert-offset">
        <nav className="people nav pt-1.5 pb-2 flex items-center justify-between relative flex-nowrap mamabear:flex-wrap mamabear:gap-y-1 babybear:flex-wrap babybear:py-1.5">
          <Logo />

          <section
            className="people search-bar relative flex flex-grow h-[40px] bg-cool-gray-20 min-w-0 max-w-full mx-4 rounded-sm babybear:mx-0 babybear:mb-1.5 babybear:bg-color-transparent babybear:w-full babybear:flex babybear:flex-wrap isExpanded"
            data-current-search-type={type === "people" ? "PEOPLE" : "JOBS"}
          >
            <div className="people switcher-tabs__trigger-and-tabs babybear:flex">
              <button
                aria-expanded="false"
                className="people switcher-tabs__placeholder flex !h-full !py-0 !pl-2 !pr-1.5 border-r-1 border-solid border-r-color-border-faint babybear:hidden tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer"
                onClick={handleOpenListChoice}
              >
                <span className="people switcher-tabs__placeholder-text m-auto">
                  {type === "people" ? "People" : "Jobs"}
                </span>
                <span
                  className="people switcher-tabs__caret-down-filled onload pointer-events-none block my-auto min-h-[24px] min-w-[24px] h-[24px] babybear:hidden lazy-loaded"
                  aria-hidden="true"
                  aria-busy="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    className="people artdeco-icon lazy-loaded"
                    focusable="false"
                    aria-busy="false"
                  >
                    <path
                      d="M5,9h14l-6.2,6.7C12.6,15.9,12.3,16,12,16c-0.3,0-0.6-0.1-0.8-0.3L5,9z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>

              <div
                className={`people switcher-tabs z-[1] w-auto min-w-[160px] mb-1.5 py-1 absolute top-[48px] left-0 border-solid border-1 border-color-border-faint papabear:container-raised mamabear:container-raised babybear:static babybear:w-[100vw] babybear:h-[48px] babybear:p-0 overflow-y-hidden overflow-x-auto md:overflow-x-hidden ${
                  !openListChoice && "hidden"
                }`}
                style={{ zIndex: 3 }}
              >
                <ul
                  className={`people switcher-tabs__list flex flex-1 items-stretch papabear:flex-col mamabear:flex-col no-focus-ring ${
                    false && "hidden"
                  }`}
                  role="tablist"
                >
                  <li
                    className="people switcher-tabs__tab h-[44px] babybear:basis-1/2"
                    role="presentation"
                  >
                    <button
                      aria-controls="jobs-search-panel"
                      aria-selected="false"
                      className={`people tab-vertical switcher-tabs__button w-full h-full tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer ${
                        type === "jobs" && "tab-selected"
                      }`}
                      id="job-switcher-tab"
                      role="tab"
                      name="jobs"
                      onClick={handleChangeCurrentType}
                    >
                      Jobs
                    </button>
                  </li>
                  <li
                    className="people switcher-tabs__tab h-[44px] babybear:basis-1/2"
                    role="presentation"
                  >
                    <button
                      aria-controls="people-search-panel"
                      aria-selected="true"
                      className={`people tab-vertical switcher-tabs__button w-full h-full tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer ${
                        type === "people" && "tab-selected"
                      }`}
                      id="people-switcher-tab"
                      role="tab"
                      name="people"
                      onClick={handleChangeCurrentType}
                    >
                      People
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <SearchPeople />
            <SearchJobs />
          </section>
          {isLoggedIn && (
            <div className="homepage nav__cta-container order-3 flex gap-x-1 justify-end min-w-[100px] flex-nowrap flex-shrink-0  babybear:flex-wrap flex-2">
              <NavLink
                to="/auth/sign-up"
                className="homepage nav__button-tertiary btn-md btn-tertiary"
              >
                Join now
              </NavLink>

              <NavLink
                to="/auth/sign-in"
                className="homepage nav__button-secondary btn-md btn-secondary-emphasis"
              >
                Sign in
              </NavLink>
            </div>
          )}
        </nav>
      </header>
      {false && (
        <section className="people base-serp-page__filters-bar">
          <div className="people base-serp-page__filters">
            <div className="jobs guest-filters">
              <div className="jobs filters filters--desktop">
                <form className="people filters__form" id="jserp-filters">
                  <ul className="jobs filters__list">
                    <li className="jobs filter">
                      <div className="jobs dropdown-to-modal filter__dropdown-to-modal">
                        <div className="collapsible-dropdown flex items-center relative hyphens-auto">
                          <button
                            className="jobs filter-button pill flex items-center !min-h-0 filter-button--selected pill-checked filter__dropdown-to-modal-trigger"
                            aria-label="Date posted filter. Any Time filter is currently applied. Clicking this button displays all Date posted filter options."
                            data-tracking-control-name="public_jobs_f_TPR"
                            aria-expanded="false"
                            type="button"
                          >
                            Any Time
                            <span
                              className="people filter-button__icon h-3 w-2 lazy-loaded"
                              aria-hidden="true"
                              aria-busy="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24px"
                                height="24px"
                                className="people artdeco-icon lazy-loaded"
                                focusable="false"
                                aria-busy="false"
                              >
                                <path
                                  d="M5,9h14l-6.2,6.7C12.6,15.9,12.3,16,12,16c-0.3,0-0.6-0.1-0.8-0.3L5,9z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </button>

                          <div
                            className={`jobs collapsible-dropdown__list ${
                              true && "hidden"
                            } container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto no-focus-ring top-[100%]`}
                          >
                            <div className="jobs filter-values-container">
                              <div
                                className="jobs filter-values-container__filter-values"
                                aria-label="Date posted filter options"
                                role="group"
                              >
                                <div className="jobs filter-values-container__filter-value">
                                  <input
                                    id="f_TPR-0"
                                    form="jserp-filters"
                                    name="f_TPR"
                                    type="radio"
                                    className="jobs"
                                  />
                                  <label>Past 24 hours (5)</label>
                                </div>
                                <div className="jobs filter-values-container__filter-value">
                                  <input
                                    id="f_TPR-0"
                                    form="jserp-filters"
                                    name="f_TPR"
                                    type="radio"
                                    className="jobs"
                                  />
                                  <label>Past Week (16)</label>
                                </div>
                                <div className="jobs filter-values-container__filter-value">
                                  <input
                                    id="f_TPR-0"
                                    form="jserp-filters"
                                    name="f_TPR"
                                    type="radio"
                                    className="jobs"
                                  />
                                  <label>Past Month (31)</label>
                                </div>
                                <div className="jobs filter-values-container__filter-value">
                                  <input
                                    id="f_TPR-0"
                                    form="jserp-filters"
                                    name="f_TPR"
                                    type="radio"
                                    className="jobs"
                                  />
                                  <label>Any Time (42)</label>
                                </div>
                              </div>
                            </div>

                            <button
                              className="jobs filter__submit-button"
                              form="jserp-filters"
                              type="submit"
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
      {type === "people" && <SearchPeopleResults />}

      {type === "jobs" && <SearchJobsResults />}
    </div>
  );
}
export default SearchPageForPeopleAndJobs;
