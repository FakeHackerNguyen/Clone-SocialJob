/* eslint-disable react/prop-types */
function SingleExperience({ experience }) {
  return (
    <li className="main-page artdeco-list__item XihlOvdhdtHPnomphUsXMRpPqWSZUIjhGiEY oJcYEDOgYkVxHdVhurcCSsAUETyuBpVABA">
      <div className="main-page tPtySJvxOrRnIxUxfFZzkRtJvRclHJMXGf pvs-entity--padded qFfbhTLgmCkysscUeHmrZZQSKJitwHUUk">
        <div>
          <a className="main-page optional-action-target-wrapper display-flex">
            <div className="main-page ivm-image-view-model  pvs-entity__image ">
              <div className="main-page ivm-view-attr__img-wrapper display-flex">
                <img
                  width="48"
                  src={experience?.company?.avatar?.url}
                  loading="lazy"
                  height="48"
                  className="main-page ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
                />
              </div>
            </div>
          </a>
        </div>

        <div className="main-page display-flex flex-column full-width align-self-center">
          <div className="main-page display-flex flex-row justify-space-between">
            <div className="main-page display-flex flex-column full-width">
              <div className="main-page display-flex flex-wrap align-items-center full-height">
                <div className="main-page display-flex ">
                  <div className="main-page display-flex full-width">
                    <div className="main-page display-flex align-items-center mr1 t-bold">
                      <span aria-hidden="true">{experience?.titleJob}</span>
                      <span className="main-page visually-hidden">
                        {experience?.titleJob}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="main-page t-14 t-normal">
                <span aria-hidden="true">
                  {`${experience?.company?.name} · ${experience?.typeEmployment}`}
                </span>
                <span className="main-page visually-hidden">
                  {`${experience?.company?.name} · ${experience?.typeEmployment}`}
                </span>
              </span>
              <span className="main-page t-14 t-normal t-black--light">
                <span
                  className="main-page pvs-entity__caption-wrapper"
                  aria-hidden="true"
                >
                  {experience?.company?.startYear &&
                    experience?.company?.endYear &&
                    `${experience?.company?.startYear} ${experience?.company?.endYear}`}
                </span>
                <span className="main-page visually-hidden">
                  Apr 2022 - Present · 1 yr 9 mos
                </span>
              </span>
              <span className="main-page t-14 t-normal t-black--light">
                <span aria-hidden="true">Ho Chi Minh City, Vietnam</span>
                <span className="main-page visually-hidden">
                  Ho Chi Minh City, Vietnam
                </span>
              </span>
            </div>

            {/* <div className="main-page pvs-entity__action-container"></div> */}
          </div>

          <div className="main-page pvs-list__outer-container pvs-entity__sub-components">
            <ul className="main-page pvs-list">
              <li className="main-page oJcYEDOgYkVxHdVhurcCSsAUETyuBpVABA">
                <div className="main-page pvs-list__outer-container">
                  <ul className="main-page pvs-list">
                    <li className="main-page pvs-list__item--with-top-padding oJcYEDOgYkVxHdVhurcCSsAUETyuBpVABA">
                      <div className="main-page display-flex ">
                        <div className="main-page display-flex full-width">
                          <div className="main-page pv-shared-text-with-see-more full-width t-14 t-normal t-black display-flex align-items-center">
                            <div
                              className="main-page inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp full-width"
                              style={{
                                WebkitLineClamp: "2",
                              }}
                            >
                              {/* <span aria-hidden="true">
                                A social enterprise and non profit Initiative
                                which connects and supports organizations and
                                Vietnamese locals to achieve sustainable
                                development goals in the Digital Era while
                                embracing Vietnamese heritage.
                                <br />
                                <br />
                                Align with WHO 2030 Agenda, we contribute to
                                three sustainable Development Goals&nbsp;(SDGs)
                                including Climate Action (Goal No.13), Good
                                health and Well-being (Goal No.3) and Quality
                                Education (Goal No.4).
                              </span>
                              <span className="main-page visually-hidden">
                                A social enterprise and non profit Initiative
                                which connects and supports organizations and
                                Vietnamese locals to achieve sustainable
                                development goals in the Digital Era while
                                embracing Vietnamese heritage. Align with WHO
                                2030 Agenda, we contribute to three sustainable
                                Development Goals&nbsp;(SDGs) including Climate
                                Action (Goal No.13), Good health and Well-being
                                (Goal No.3) and Quality Education (Goal No.4).
                              </span> */}

                              {/* <span className="main-page inline-show-more-text__link-container-collapsed">
                                <button
                                  className="inline-show-more-text__button inline-show-more-text__button--light link"
                                  aria-expanded="false"
                                  role="button"
                                  type="button"
                                >
                                  …see more
                                </button>
                              </span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li className="main-page oJcYEDOgYkVxHdVhurcCSsAUETyuBpVABA">
                <div className="main-page pvs-list__outer-container">
                  <ul className="main-page pvs-list">
                    <li className="main-page pvs-list__item--with-top-padding oJcYEDOgYkVxHdVhurcCSsAUETyuBpVABA">
                      <div className="main-page display-flex ">
                        <div className="main-page display-flex full-width">
                          <div className="main-page pv-shared-text-with-see-more full-width t-14 t-normal t-black display-flex align-items-center">
                            <div
                              className="main-page inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp full-width"
                              style={{
                                WebkitLineClamp: "2",
                              }}
                            >
                              <span aria-hidden="true">
                                <strong>Skills:</strong>
                                <span className="main-page white-space-pre">
                                  {" "}
                                </span>
                                Fundraising · Corporate Social Responsibility ·
                                Environmental Issues · Nutrition Education ·
                                Soft Skills Training
                              </span>
                              <span className="main-page visually-hidden">
                                <strong>Skills:</strong>
                                <span className="main-page white-space-pre">
                                  {" "}
                                </span>
                                Fundraising · Corporate Social Responsibility ·
                                Environmental Issues · Nutrition Education ·
                                Soft Skills Training
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SingleExperience;
