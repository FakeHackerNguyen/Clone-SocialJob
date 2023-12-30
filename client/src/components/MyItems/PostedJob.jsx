function PostedJob() {
  return (
    <section className="main-page grid__col grid__col--lg-12 mb6">
      <div className="main-page workflow-results-container artdeco-card pt4">
        <h1 className="main-page t-24 ph5" style={{ fontWeight: 400 }}>
          Posted Jobs
        </h1>

        <div
          id="search-reusables__filters-bar"
          className="main-page search-reusables__filters-bar-grouping mh4 pv2"
        >
          <ul className="main-page search-reusables__filter-list flex-wrap">
            <li className="main-page search-reusables__primary-filter">
              <button
                className="main-page artdeco-pill artdeco-pill--slate artdeco-pill--choice artdeco-pill--2 search-reusables__filter-pill-button artdeco-pill--selected search-reusables__filter-pill-button"
                disabled=""
                aria-pressed="true"
                type="button"
              >
                Open
              </button>
            </li>
            <li className="main-page search-reusables__primary-filter">
              <button
                className="main-page artdeco-pill artdeco-pill--slate artdeco-pill--choice artdeco-pill--2 search-reusables__filter-pill-button search-reusables__filter-pill-button"
                aria-pressed="false"
                type="button"
              >
                Closed
              </button>
            </li>
          </ul>

          <div className="main-page display-flex align-items-center"></div>
        </div>

        <hr className="main-page artdeco-divider mv0" style={{ margin: 0 }} />

        <div>
          <div className="main-page">
            <ul className="main-page reusable-search__entity-result-list list-style-none">
              <li className="main-page reusable-search__result-container">
                <div className="main-page entity-result">
                  <div className="main-page linked-area flex-1 cursor-pointer">
                    <div className="main-page entity-result__item">
                      <div className="main-page entity-result__universal-image">
                        <div className="main-page display-flex align-items-center">
                          <a
                            className="main-page app-aware-link  scale-down "
                            aria-hidden="true"
                            href="https://www.linkedin.com/hiring/jobs/3786188473/detail/"
                          >
                            <div className="main-page ivm-image-view-model   ">
                              <div className="main-page ivm-view-attr__img-wrapper display-flex">
                                <img
                                  width="48"
                                  src="https://media.licdn.com/dms/image/D560BAQEyIQbe6j-yQQ/company-logo_100_100/0/1703184811313/css_club_developer_logo?e=1712188800&amp;v=beta&amp;t=Ix-r392mtidWIZ8gjh83IwU01o4wDg7em5sPOpQS488"
                                  loading="lazy"
                                  height="48"
                                  alt="CSS Club Developer"
                                  className="main-page ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="main-page entity-result__content entity-result__divider pt3 pb3 t-12 t-black--light">
                        <div className="main-page mb1">
                          <div className="main-page t-roman t-sans">
                            <div className="main-page display-flex">
                              <span className="main-page entity-result__title-line entity-result__title-line--2-lines ">
                                <span className="main-page entity-result__title-text t-16">
                                  <a
                                    className="main-page app-aware-link "
                                    href="https://www.linkedin.com/hiring/jobs/3786188473/detail/"
                                  >
                                    <strong style={{ fontWeight: 600 }}>
                                      Full Stack Engineer
                                    </strong>
                                  </a>
                                </span>
                              </span>
                            </div>
                          </div>

                          <div className="main-page entity-result__primary-subtitle t-14 t-black t-normal">
                            CSS Club Developer
                          </div>

                          <div className="main-page entity-result__secondary-subtitle t-14 t-normal">
                            Ho Chi Minh City, Vietnam (On-site)
                          </div>
                        </div>

                        <div className="main-page entity-result__insights t-12">
                          <div className="main-page workflow-posted-jobs__jobs-insight">
                            <div className="main-page mt2">
                              <span className="main-page t-bold">
                                {/* <span className="main-page tvm__text tvm__text--positive">
                              Active
                            </span> */}
                              </span>
                              Posted 5m ago • Free job post
                            </div>

                            <div className="main-page reusable-search-simple-insight">
                              <div className="main-page reusable-search-simple-insight__text-container">
                                <span className="main-page reusable-search-simple-insight__text reusable-search-simple-insight__text--small">
                                  0 applicants
                                  {/* <span className="main-page white-space-pre">
                                {" "}
                              </span>
                              <a
                                className="main-page app-aware-link "
                                target="_self"
                                href="https://www.linkedin.com/job-posting/form/free-trial?jobId=3786188473"
                              >
                                Promote for free
                              </a> */}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main-page entity-result__actions entity-result__divider">
                        <div className="main-page entity-result__actions-overflow-menu-dropdown">
                          <div className="main-page artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view">
                            <button
                              aria-expanded="false"
                              className="main-page artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view entity-result__overflow-actions-trigger-ember325 artdeco-button artdeco-button--2 artdeco-button--tertiary artdeco-button--circle artdeco-button--muted"
                              type="button"
                            >
                              <svg
                                role="img"
                                aria-hidden="false"
                                aria-label="Click to take more actions on Full Stack Engineer"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                data-test-icon="overflow-web-ios-medium"
                                className="main-page"
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
                                true && "artdeco-dropdown__content--is-open"
                              } artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view entity-result__overflow-actions-menu`}
                            >
                              <div className="main-page artdeco-dropdown__content-inner">
                                <div className="main-page artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view entity-result__overflow-actions-menu-item">
                                  <a
                                    className="main-page app-aware-link "
                                    href="https://www.linkedin.com/hiring/jobs/3786188473/detail/"
                                  >
                                    <div className="main-page display-flex align-items-center">
                                      <div className="main-page ivm-image-view-model    flex-shrink-zero align-self-center mr2 ">
                                        <div className="main-page ivm-view-attr__img-wrapper display-flex">
                                          <li-icon
                                            aria-hidden="true"
                                            type="job"
                                            class=" "
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

                                      <span className="main-page image-text-lockup__text ">
                                        Manage job
                                      </span>
                                    </div>
                                  </a>
                                </div>

                                <div
                                  role="button"
                                  className="main-page artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view entity-result__overflow-actions-menu-item"
                                >
                                  <div
                                    className="main-page display-flex align-items-center"
                                    role="presentation"
                                  >
                                    <div className="main-page ivm-image-view-model    flex-shrink-zero align-self-center mr2 ">
                                      <div className="main-page ivm-view-attr__img-wrapper display-flex">
                                        <li-icon
                                          aria-hidden="true"
                                          type="clear"
                                          class=" "
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
                                            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"></path>
                                          </svg>
                                        </li-icon>
                                      </div>
                                    </div>

                                    <span className="main-page image-text-lockup__text ">
                                      Close job
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostedJob;
