import React, { useState } from "react";
import SVG from "../components/SVG";
import { useAuth, useNotification } from "../hooks/index";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "font-awesome/css/font-awesome.css";
import FroalaEditor from "react-froala-wysiwyg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getSingleCompany } from "../apis/company";
import { postJob } from "../apis/job";

const defaultDescription =
  "<p>A Silicon Valley-based company, renowned for its innovative approach and dynamic work environment, is seeking a Web Back-End Developer. This company is at the forefront of technological advancements, consistently pushing boundaries and setting new industry standards. The successful candidate will play a pivotal role in the development and maintenance of various applications, contributing to the company's ongoing success and growth.</p><p><br/></p><p><strong>Job Responsibilities</strong>:</p><p><br></p> <ul><li>Developing and maintaining robust back-end systems using GraphQL, React, and Spring Boot</li><li>Collaborating with a team of skilled developers to design, build, and implement scalable applications</li><li>Debugging, testing, and troubleshooting applications to ensure optimal performance and user experience</li><li>Keeping abreast of the latest industry trends and technologies to ensure our applications remain current and competitive</li><li>Contributing to the overall success of the team through active participation in team meetings and collaborative projects</li><li>Continuously improving code quality through writing unit tests, automation, and performing code reviews</li></ul><p><br></p><p><strong>Job Requirements</strong>:</p><p><br></p><ul><li>Bachelor’s/Master’s degree in Engineering, Computer Science (or equivalent experience)</li><li>A minimum of 6-7 years of overall experience in the field of Web Back-End Development</li><li>At least 2+ years of experience with GraphQL and React, and 6+ years of experience with Spring Boot</li><li>Proven experience in developing and maintaining robust back-end systems</li><li>Strong understanding of software development life cycle (SDLC) and agile methodologies</li><li>Excellent problem-solving skills and attention to detail</li><li>Must be fluent in English and possess strong communication skills</li></ul><p><br></p>";

function JobDescription() {
  const { authInfo } = useAuth();
  const [description, setDescription] = useState(defaultDescription);
  const [company, setCompany] = useState({});

  const { state } = useLocation();
  const { updateNotification } = useNotification();
  const navigate = useNavigate();

  const handleDescriptionChange = (event) => {
    setDescription(event);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, message } = await postJob({ ...state, description });
    if (error) return updateNotification("error", error);

    updateNotification("success", message);
  };

  const getInfoCompany = async () => {
    const { error, data } = await getSingleCompany({
      companyId: state.companyId,
    });
    if (error) return updateNotification("error", error);

    setCompany(data);
  };

  const handleBack = () => {
    navigate("/job-posting", { replace: true });
  };

  useEffect(() => {
    getInfoCompany();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <SVG />
      <div className="main-page application-outlet">
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
                {/* <svg
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
                </svg> */}
                <span className="main-page artdeco-button__text">
                  Close jump menu
                </span>
              </button>
            </div>
          </div>

          <header className="main-page job-posting-shared-custom-nav global-alert-offset-top">
            <div className="main-page job-posting-shared-custom-nav__content">
              <a className="main-page ember-view job-posting-shared-custom-nav__branding-logo">
                <svg
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
                </svg>
              </a>

              <div className="main-page display-flex align-items-center full-height">
                <a className="main-page ember-view job-posting-shared-custom-nav__mgmt-link">
                  Manage Job Posts
                </a>
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

          <div className="main-page scaffold-layout scaffold-layout--breakpoint-xl scaffold-layout--main-aside scaffold-layout--reflow">
            <div className="main-page scaffold-layout__inner scaffold-layout-container scaffold-layout-container--reflow">
              <div className="main-page scaffold-layout__row scaffold-layout__content scaffold-layout__content--main-aside scaffold-layout__content--has-aside">
                <main className="main-page scaffold-layout__main">
                  <section className="main-page artdeco-card">
                    <form onSubmit={handleSubmit}>
                      <header className="main-page job-posting-header ph5 pv3">
                        <div>
                          <h1
                            id="job-posting-header-title"
                            className="main-page job-posting-header__title "
                          >
                            <span>Tell us about the role</span>
                          </h1>
                        </div>
                      </header>
                      <div className="main-page ph5 mb5">
                        <div className="main-page t-12 t-black--light pv2">
                          * Indicates required
                        </div>
                        <label
                          htmlFor="job-description-ember609"
                          className="main-page t-20 t-black t-bold mb2 required"
                          style={{
                            margin: "1.2rem 0 0.3rem",
                            display: "block",
                          }}
                        >
                          Description{" "}
                        </label>
                        {/* <div
                          className="main-page job-posting-shared-rich-text-editor job-posting-shared-rich-text-editor--full-flow"
                        > */}
                        <FroalaEditor
                          tag="textarea"
                          config={{
                            placeholderText: "Edit Your Content Here!",
                            charCounterCount: false,
                          }}
                          model={description}
                          onModelChange={handleDescriptionChange}
                        />
                        {/* <div className="main-page job-posting-shared-rich-text-editor__toolbar">
                            <div
                              role="toolbar"
                              className="main-page job-posting-shared-rich-text-editor__toolbar-buttons ql-toolbar"
                            >
                              <button
                                className="main-page job-posting-shared-rich-text-editor__toolbar-button t-20 ql-bold ql-active"
                                aria-label="Bold"
                                type="button"
                              >
                                <svg
                                  role="none"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  data-test-icon="text-bold-small"
                                  className="main-page"
                                >
                                  <use
                                    href="#text-bold-small"
                                    width="16"
                                    height="16"
                                    className="main-page"
                                  ></use>
                                </svg>
                              </button>
                              <button
                                className="main-page job-posting-shared-rich-text-editor__toolbar-button t-20 ql-italic"
                                aria-label="Italic"
                                type="button"
                              >
                                <svg
                                  role="none"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  data-test-icon="text-italic-small"
                                  className="main-page"
                                >
                                  <use
                                    href="#text-italic-small"
                                    width="16"
                                    height="16"
                                    className="main-page"
                                  ></use>
                                </svg>
                              </button>
                              <button
                                className="main-page job-posting-shared-rich-text-editor__toolbar-button t-20 ql-list"
                                aria-label="Bulleted list"
                                value="bullet"
                                type="button"
                              >
                                <svg
                                  role="none"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  data-test-icon="text-bulleted-list-small"
                                  className="main-page rtl-flip"
                                >
                                  <use
                                    href="#text-bulleted-list-small"
                                    width="16"
                                    height="16"
                                    className="main-page"
                                  ></use>
                                </svg>
                              </button>
                              <button
                                className="main-page job-posting-shared-rich-text-editor__toolbar-button t-20 ql-list"
                                aria-label="Numbered list"
                                value="ordered"
                                type="button"
                              >
                                <svg
                                  role="none"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  data-test-icon="text-numbered-list-small"
                                  className="main-page rtl-flip"
                                >
                                  <use
                                    href="#text-numbered-list-small"
                                    width="16"
                                    height="16"
                                    className="main-page"
                                  ></use>
                                </svg>
                              </button>
                            </div>
                          </div> */}

                        {/* <div
                            name="job-posting-rich-text-editor"
                            className="main-page job-posting-shared-rich-text-editor__editor job-posting-shared-rich-text-editor__editor--large-full-flow ql-container"
                            style={{ position: "relative", overflow: "hidden" }}
                          >
                            <div
                              className="main-page ql-editor"
                              data-gramm="false"
                              contentEditable="true"
                              aria-required="true"
                              role="textbox"
                              aria-multiline="true"
                              aria-label="Description"
                              suppressContentEditableWarning={true}
                            >
                              <p>
                                Tips: Provide a summary of the role, what
                                success in the position looks like, and how this
                                role fits into the organization overall.
                              </p>
                              <p>
                                <br />
                              </p>
                              <p>
                                <strong>Responsibilities</strong>
                              </p>
                              <p>
                                [Be specific when describing each of the
                                responsibilities. Use gender-neutral, inclusive
                                language.]
                              </p>
                              <p>
                                Example: Determine and develop user requirements
                                for systems in production, to ensure maximum
                                usability
                              </p>
                              <p>
                                <br />
                              </p>
                              <p>
                                <strong>Qualifications</strong>
                              </p>
                              <p>
                                [Some qualifications you may want to include are
                                Skills, Education, Experience, or
                                Certifications.]
                              </p>
                              <p>
                                Example: Excellent verbal and written
                                communication skills
                              </p>
                            </div>
                            <div
                              className="main-page ql-clipboard"
                              contentEditable="true"
                              suppressContentEditableWarning={true}
                            ></div>
                            <div className="main-page ql-cursors"></div>
                          </div> */}
                        {/* </div> */}
                        {/* <div className="main-page display-flex justify-space-between">
                          <div className="main-page job-posting-shared-rich-text-editor__char-count">
                            520/10,000
                          </div>
                        </div> */}
                      </div>
                      <footer className="main-page job-posting-footer ">
                        {/* <div className="main-page mr2 ">
                          <button
                            className="main-page artdeco-button artdeco-button--2 artdeco-button--tertiary ember-view mr2"
                            type="button"
                          >
                            <span className="main-page artdeco-button__text">
                              Preview
                            </span>
                          </button>

                          <div className="main-page ember-view"></div>
                        </div> */}
                        <div>
                          <div className="main-page display-flex align-items-flex-end">
                            <button
                              className="main-page job-posting-footer__secondary-cta artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"
                              type="button"
                              onClick={handleBack}
                            >
                              <span className="main-page artdeco-button__text">
                                Back
                              </span>
                            </button>

                            <button
                              className="main-page artdeco-button artdeco-button--2 artdeco-button--primary ember-view"
                              type="submit"
                            >
                              <span className="main-page artdeco-button__text">
                                Create
                              </span>
                            </button>
                          </div>
                        </div>
                      </footer>
                    </form>
                  </section>
                </main>
                <aside className="main-page scaffold-layout__aside">
                  <section className="main-page display-flex flex-column">
                    <section className="main-page artdeco-card ph2 pt2">
                      <div className="main-page job-card-container relative job-card-list">
                        <div className="main-page job-card-list__entity-lockup artdeco-entity-lockup artdeco-entity-lockup--size-3 ember-view">
                          <div
                            className="main-page mr1 artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view"
                            type="square"
                          >
                            <div className="main-page ivm-image-view-model">
                              <div className="main-page ivm-view-attr__img-wrapper display-flex">
                                <img
                                  width="56"
                                  src={company?.avatar?.url}
                                  loading="lazy"
                                  height="56"
                                  className="main-page ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="main-page flex-grow-1 artdeco-entity-lockup__content ember-view">
                            <div className="main-page full-width artdeco-entity-lockup__title ember-view">
                              {state.jobTitle}
                            </div>
                            <div className="main-page artdeco-entity-lockup__subtitle ember-view">
                              <div className="main-page job-card-container__company-name">
                                {company?.name}
                              </div>
                            </div>

                            <div className="main-page artdeco-entity-lockup__caption ember-view">
                              <ul className="main-page job-card-container__metadata-wrapper">
                                <li className="main-page job-card-container__metadata-item">
                                  {state?.jobLocation}
                                </li>
                                <li className="main-page job-card-container__metadata-item job-card-container__metadata-item--workplace-type">
                                  {state?.workplaceType}
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="main-page job-card-container__action-container flex-shrink-zero display-flex"></div>
                        </div>

                        {/* <div className="main-page job-card-list__info">
                          <span className="main-page t-black--light t-14">
                            Saved as{" "}
                            <span className="main-page t-bold">Draft</span>
                          </span>
                        </div>

                        <ul className="main-page job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman"></ul>
                        <span
                          className="main-page visually-hidden"
                          aria-live="polite"
                        ></span> */}
                      </div>
                    </section>
                  </section>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default JobDescription;
