import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks";

/* eslint-disable react/prop-types */
function SearchPeopleResults() {
  const { searchInfo } = useSearch();

  const navigate = useNavigate();

  const handleViewProfile = (userInfo) => {
    navigate("/profile", { state: userInfo });
  };

  return (
    <div className="people base-serp-page__content">
      {searchInfo.people?.length === 0 ? (
        <main id="main-content" role="main">
          <section className="people empty-search-header empty-search-header--center-aligned">
            <img
              className="people empty-search-header__image lazy-loaded"
              alt=""
              aria-busy="false"
              src="https://static.licdn.com/aero-v1/sc/h/dfa1erc1uncnl1po7l2v7yawd"
            />

            <section className="people core-section-container my-3">
              <h1
                className="people core-section-container__main-title main-title"
                style={{ fontWeight: "400" }}
              >
                Try searching for your co-worker, classmate, professor, or
                friend.
              </h1>

              <div className="people core-section-container__content break-words"></div>
            </section>
          </section>
        </main>
      ) : (
        <main
          id="main-content"
          className="people serp-page__results"
          role="main"
        >
          <section className="people serp-page__results-list">
            <div className="people search-results-header">
              <h1 className="people search-results-header__heading">
                <span className="people search-results-header__count">
                  {searchInfo.people?.length}
                </span>
                Results for &quot;{searchInfo.keyword.trim()}&quot;
              </h1>
            </div>

            <ul>
              {searchInfo.people &&
                searchInfo.people.map((p, index) => (
                  <li
                    key={index}
                    className="people pserp-layout__profile-result-list-item"
                    onClick={() => handleViewProfile(p)}
                  >
                    <a
                      data-tracking-control-name="people-guest_people_search-card"
                      data-tracking-will-navigate=""
                      className="people base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link people-search-card"
                    >
                      <div className="people search-entity-media">
                        <img
                          className="people artdeco-entity-image artdeco-entity-image--circle-4 lazy-loaded"
                          data-ghost-classes="artdeco-entity-image--ghost"
                          data-ghost-url="https://static.licdn.com/aero-v1/sc/h/1c5u578iilxfi4m4dvc4q810q"
                          alt="Nguyen Tu"
                          aria-busy="false"
                          src={p?.avatar?.url}
                        />
                      </div>

                      <div className="people base-search-card__info">
                        <h3 className="people base-search-card__title">
                          {p?.fullName}
                        </h3>

                        <h4 className="people base-search-card__subtitle">
                          {p?.initialEducation
                            ? `Student at ${p?.initialEducation?.university?.name}`
                            : `${p?.initialExperience?.titleJob} at ${p?.initialExperience?.company?.name}`}
                        </h4>

                        <div className="people base-search-card__metadata">
                          <p className="people people-search-card__location">
                            {p?.city}
                          </p>

                          <div className="people entity-list-meta">
                            <span
                              className="people entity-list-meta__icon lazy-loaded"
                              data-svg-class-name="entity-list-meta__icon-svg"
                              aria-hidden="true"
                              aria-busy="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="briefcase-icon"
                                viewBox="0 0 16 16"
                                width="16px"
                                height="16px"
                                x="0"
                                y="0"
                                preserveAspectRatio="xMinYMin meet"
                                focusable="false"
                                className="people entity-list-meta__icon-svg lazy-loaded"
                                aria-busy="false"
                              >
                                <path
                                  d="M14,4H12V3a2,2,0,0,0-2-2H6A2,2,0,0,0,4,3V4H2A1,1,0,0,0,1,5v8a1,1,0,0,0,1,1H14a1,1,0,0,0,1-1V5A1,1,0,0,0,14,4ZM6,3h4V4H6V3Zm7,9H3V9H13v3Zm0-4H3V6H13V8Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                            <span className="people entity-list-meta__entities-list">
                              {p?.country}
                            </span>
                          </div>

                          <div className="people entity-list-meta">
                            <span
                              className="people entity-list-meta__icon lazy-loaded"
                              data-svg-class-name="entity-list-meta__icon-svg"
                              aria-hidden="true"
                              aria-busy="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="school-icon"
                                viewBox="0 0 16 16"
                                width="16px"
                                height="16px"
                                x="0"
                                y="0"
                                preserveAspectRatio="xMinYMin meet"
                                focusable="false"
                                className="people entity-list-meta__icon-svg lazy-loaded"
                                aria-busy="false"
                              >
                                <path
                                  d="M15,8V5.05a1.25,1.25,0,0,0-.72-1.13L8,1,1.72,3.92A1.25,1.25,0,0,0,1,5.05V8H3v2H2a1,1,0,0,0-1,1v4H15V11a1,1,0,0,0-1-1H13V8h2Zm-2,5H3V12H13v1ZM5,10V8H7v2H5Zm4,0V8h2v2H9ZM3,6V5.39L8,3.07l5,2.33V6H3Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                            <span className="people entity-list-meta__entities-list">
                              {p?.initialEducation
                                ? p?.initialEducation?.university?.name
                                : p?.initialExperience?.company?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
            </ul>

            {/* <div className="people see-all-results-cta">
              <h3 className="people see-all-results-cta__header">
                Not seeing who you’re looking for? Join now to see all 1400+
                results.
              </h3>
              <NavLink
                to="/auth/sign-up"
                className="people see-all-results-cta__link"
                data-tracking-control-name="people-guest_see-all-results-cta"
                data-tracking-will-navigate=""
              >
                Join now
              </NavLink>
            </div> */}
          </section>
        </main>
      )}
    </div>
  );
}

export default SearchPeopleResults;
