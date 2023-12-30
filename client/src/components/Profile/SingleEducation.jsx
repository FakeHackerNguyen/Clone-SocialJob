/* eslint-disable react/prop-types */
function SingleEducation({ education }) {
  console.log(education);
  return (
    <li className="main-page artdeco-list__item XihlOvdhdtHPnomphUsXMRpPqWSZUIjhGiEY oJcYEDOgYkVxHdVhurcCSsAUETyuBpVABA">
      <div className="main-page tPtySJvxOrRnIxUxfFZzkRtJvRclHJMXGf pvs-entity--padded qFfbhTLgmCkysscUeHmrZZQSKJitwHUUk">
        <div>
          <a className="main-page optional-action-target-wrapper display-flex">
            <div className="main-page ivm-image-view-model  pvs-entity__image ">
              <div className="main-page ivm-view-attr__img-wrapper display-flex">
                <img
                  width="48"
                  src={education?.university?.avatar?.url}
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
            <a className="main-page optional-action-target-wrapper display-flex flex-column full-width">
              <div className="main-page display-flex flex-wrap align-items-center full-height">
                <div className="main-page display-flex ">
                  <div className="main-page display-flex full-width">
                    <div className="main-page display-flex align-items-center mr1 hoverable-link-text t-bold">
                      <span aria-hidden="true">
                        {education?.university?.name}
                      </span>
                      <span className="main-page visually-hidden">
                        {education?.university?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="main-page t-14 t-normal">
                <span aria-hidden="true">
                  {`${education?.degree}, ${education?.fieldOfStudy}`}
                  <span className="main-page white-space-pre"> </span>
                </span>
                <span className="main-page visually-hidden">
                  {`${education?.degree}, ${education?.fieldOfStudy}`}
                  <span className="main-page white-space-pre"> </span>
                </span>
              </span>
              <span className="main-page t-14 t-normal t-black--light">
                <span
                  className="main-page pvs-entity__caption-wrapper"
                  aria-hidden="true"
                >
                  {`${new Date(
                    education?.startDate
                  ).getFullYear()} - ${new Date(
                    education?.endDate
                  ).getFullYear()}`}
                </span>
                <span className="main-page visually-hidden">2017 - 2020</span>
              </span>
            </a>

            <div className="main-page pvs-entity__action-container"></div>
          </div>

          {/* <div className="main-page pvs-list__outer-container pvs-entity__sub-components">
            <ul className="main-page pvs-list">
              <li className="main-page oJcYEDOgYkVxHdVhurcCSsAUETyuBpVABA">
                <div className="main-page mv1 display-flex align-items-center">
                  <div className="main-page display-flex link-without-hover-visited">
                    <div className="main-page display-flex ">
                      <div className="main-page display-flex full-width">
                        <div className="main-page pv-shared-text-with-see-more full-width t-14 t-normal t-black display-flex align-items-center">
                          <div
                            className="main-page inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp full-width"
                            style={{ WebkitLineClamp: "2" }}
                          >
                            <span aria-hidden="true">
                              Grade: First Class Honour.
                              <span className="main-page white-space-pre">
                                {" "}
                              </span>
                            </span>
                            <span className="main-page visually-hidden">
                              Grade: First Class Honour.
                              <span className="main-page white-space-pre">
                                {" "}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </li>
  );
}

export default SingleEducation;
