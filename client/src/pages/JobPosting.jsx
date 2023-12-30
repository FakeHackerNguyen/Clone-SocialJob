import "../styles/Job/9id40zngrk26f2ydh3acunfrn.css";
import React from "react";
import SVG from "../components/SVG";
import { useAuth } from "../hooks/index";
import { useState } from "react";
import InputOfJob from "../components/Jobs/InputOfJob";
import LiveSearchJob from "../components/Jobs/LiveSearchJob";
import SelectOfJob from "../components/Jobs/SelectOfJob";
import { useNavigate } from "react-router-dom";
function JobPosting() {
  const [postInfo, setPostInfo] = useState({
    jobTitle: "",
    companyId: "",
    workplaceType: "",
    jobLocation: "",
    jobType: "",
  });

  console.log(postInfo);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/job-posting/description", { state: postInfo });
  };

  const { authInfo } = useAuth();

  return (
    <React.Fragment>
      <SVG />
      <div className="main-page application-outlet">
        {/* <div className="main-page videoinappalert-inapp-alerts-manager hidden"></div> */}
        <div className="main-page authentication-outlet nav-hidden">
          <div className="main-page global-nav__a11y-menu job-posting-shared-custom-nav__a11y-menu">
            <div className="main-page global-nav__a11y-menu-container">
              <button className="main-page artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view">
                <span className="main-page artdeco-button__text">
                  Skip to main content
                </span>
              </button>

              <button className="main-page global-nav__a11y-menu-close artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view">
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
                  data-test-icon="close-medium"
                >
                  <use
                    href="#close-medium"
                    width="24"
                    height="24"
                    className="main-page"
                  ></use>
                </svg>
                <span className="main-page artdeco-button__text">
                  Close jump menu
                </span>
              </button>
            </div>
          </div>

          <header className="main-page job-posting-shared-custom-nav global-alert-offset-top">
            <div className="main-page job-posting-shared-custom-nav__content">
              <a className="main-page ember-view job-posting-shared-custom-nav__branding-logo">
                {/* <svg
                  role="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  data-supported-dps="34x34"
                  data-test-icon="linkedin-bug-medium"
                  className="main-page"
                >
                  <use
                    href="#linkedin-bug-medium"
                    width="34"
                    height="34"
                    className="main-page"
                  ></use>
                </svg> */}
              </a>

              <div className="main-page display-flex align-items-center full-height">
                <a className="main-page ember-view block mlA">
                  <div className="main-page job-posting-shared-custom-nav__avatar">
                    <img
                      width="24"
                      src={authInfo.profile?.avatar?.url}
                      height="24"
                      alt="Visit profile for Nguyen Toan"
                      className="main-page evi-image ghost-person ember-view job-posting-shared-custom-nav__me-photo"
                    />
                  </div>
                </a>
              </div>
            </div>
          </header>

          <div className="main-page job-posting-wow">
            <section className="main-page job-posting-wow__form artdeco-card">
              <div className="main-page ph5">
                <h1 className="main-page t-24 t-bold pb1 pt5">
                  Post a job for free
                </h1>
                <p className="main-page t-14 pb2">
                  Increase the quality of your hire
                </p>

                <form onSubmit={handleSubmit}>
                  <div>
                    <InputOfJob
                      name="jobTitle"
                      label="Job title"
                      position={{ top: "5.8047px", left: "107.1641px" }}
                      note="Make your job more discoverable to job seekers by selecting a
                  title from the dropdown. You can also choose your own title
                  instead."
                      setPostInfo={setPostInfo}
                      postInfo={postInfo}
                    />
                    <LiveSearchJob
                      init={
                        authInfo?.profile?.initialExperience?.company ||
                        authInfo?.profile?.initialEducation?.university
                      }
                      setPostInfo={setPostInfo}
                      postInfo={postInfo}
                    />
                    <SelectOfJob
                      name="workplaceType"
                      label="Workplace type"
                      options={[
                        ["On-site", "Employees come to work in-person."],
                        ["Hybrid", "Employees work on-site and off-site."],
                        ["Remote", "Employees work off-site."],
                      ]}
                      setPostInfo={setPostInfo}
                      postInfo={postInfo}
                    />
                    <InputOfJob
                      name="jobLocation"
                      label="Job location"
                      position={{ top: "191.582px", left: "134.898px" }}
                      note=" Picking a specific city or metro area can help
                                  make your on-site job more discoverable by job
                                  seekers in those areas, while still remaining
                                  visible to everyone in your country or region."
                      setPostInfo={setPostInfo}
                      postInfo={postInfo}
                    />
                    <SelectOfJob
                      name="jobType"
                      label="Job type"
                      options={[["Full-time"], ["Part-time"], ["Internship"]]}
                      setPostInfo={setPostInfo}
                      postInfo={postInfo}
                    />

                    <span className="full-width" aria-live="polite"></span>

                    <div
                      aria-live="polite"
                      className="main-page job-posting-form-container__segments-section--hidden"
                    ></div>
                  </div>

                  <button
                    className="main-page artdeco-button artdeco-button--4 artdeco-button--primary ember-view job-posting-wow__ai-jd-draft-btn"
                    type="submit"
                  >
                    {" "}
                    <li-icon
                      aria-hidden="true"
                      type="signal-ai"
                      class="main-page artdeco-button__icon"
                      size="large"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        role="none"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="main-page mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M21.5 12c0-.5-.4-1-.9-1-4-.4-7.2-3.6-7.6-7.6-.1-.5-.5-.9-1-.9s-1 .4-1 .9c-.4 4-3.6 7.2-7.6 7.6-.5.1-.9.5-.9 1s.4.9.9 1c4 .4 7.2 3.6 7.6 7.6.1.5.5.9 1 .9s1-.4 1-.9c.4-4 3.6-7.2 7.6-7.6.5-.1.9-.5.9-1z"></path>
                      </svg>
                    </li-icon>
                    <span className="main-page artdeco-button__text">
                      Write Post
                    </span>
                  </button>
                  {/* <button className="main-page artdeco-button artdeco-button--4 artdeco-button--secondary ember-view full-width mt3">
                    <span className="main-page artdeco-button__text">
                      Write on my own
                    </span>
                  </button> */}
                  {/* <p className="main-page job-posting-wow__ai-jd-learn-more-text">
                  If you want help with your job description, we will use the
                  information above and AI to suggest one.{" "}
                  <a
                    rel="noopener noreferrer"
                    className="main-page link-without-visited-state text-body-small-bold"
                  >
                    Learn more
                  </a>
                </p> */}
                </form>
              </div>

              {/* <p className="main-page job-posting-wow__free-limits-disclaimer">
              Limits may apply to free job posts.{" "}
              <a
                rel="noopener noreferrer"
                className="main-page link-without-visited-state text-body-small-bold"
              >
                View our policy
              </a>
            </p> */}
            </section>

            {/* <div className="main-page display-flex justify-center pt4">
            <button
              className="main-page display-flex align-items-center t-14 t-white t-bold"
              type="button"
            >
              Learn how it works
              <span className="main-page job-posting-wow__how-it-works-icon">
                <svg
                  role="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  data-test-icon="chevron-down-small"
                >
                  <use href="#chevron-down-small" width="16" height="16"></use>
                </svg>
              </span>
            </button>
          </div> */}
          </div>

          {/* <div className="main-page display-flex align-items-center flex-column">
          <div className="main-page ember-view full-width">
            <section className="main-page job-posting-sneak-peek">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/dlfmsfzpj4m0vmjwxlx61w0c4"
                alt=""
                role="presentation"
                className="main-page job-posting-sneak-peek__animation"
              />
              <div className="main-page job-posting-sneak-peek__text">
                <h3 className="main-page t-32 t-bold">
                  Posting a job just became easier
                </h3>
                <div className="main-page display-flex pt5">
                  <svg
                    role="none"
                    aria-hidden="true"
                    className="main-page job-posting-sneak-peek__check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    data-test-icon="check-medium"
                  >
                    <use
                      href="#check-medium"
                      width="24"
                      height="24"
                      className="main-page"
                    ></use>
                  </svg>

                  <p className="main-page t-16">
                    Draft your job description in one click using skills
                    insights from LinkedIn’s member base.
                  </p>
                </div>
                <div className="display-flex pt4">
                  <svg
                    role="none"
                    aria-hidden="true"
                    className="main-page job-posting-sneak-peek__check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    data-test-icon="check-medium"
                  >
                    <use
                      href="#check-medium"
                      width="24"
                      height="24"
                      className="main-page"
                    ></use>
                  </svg>

                  <p className="main-page t-16">
                    Target qualified applicants for your role using recommended
                    must-have qualifications.
                  </p>
                </div>
                <div className="main-page display-flex pt4">
                  <svg
                    role="none"
                    aria-hidden="true"
                    className="job-posting-sneak-peek__check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    data-test-icon="check-medium"
                  >
                    <use
                      href="#check-medium"
                      width="24"
                      height="24"
                      className="main-page"
                    ></use>
                  </svg>

                  <p className="main-page t-16">
                    Post a job for free, then decide if you’d like to pay to
                    promote it.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="main-page ember-view job-posting-marketing-content__occludable-area-small   full-width"></div>

          <div className="main-page ember-view job-posting-how-it-works__occludable-area-small   full-width"></div>

          <div className="main-page ember-view job-posting-marketing-content__occludable-area-small   full-width"></div>
        </div> */}

          {/* <footer className="main-page global-footer global-footer--static">
          <div className="main-page ember-view global-footer__occlusion-hint  "></div>
        </footer> */}
        </div>

        {/* <div className="main-page application-outlet__overlay-container">
        <aside
          aria-label="AI-powered assistant to get help with your career, jobs etc"
          className="main-page coach-container coach-container--overlay"
          id="coach-container"
        ></aside>
      </div>

      <div className="main-page ember-view"></div>

      <img
        src="https://px.ads.linkedin.com/collect/?pid=6883&amp;fmt=gif&amp;_t=1702667018560"
        alt=""
        role="none"
        className="main-page third-party-tracking-pixel hidden"
        data-test-third-party-tracking-pixel=""
      /> */}
      </div>
    </React.Fragment>
  );
}

export default JobPosting;
