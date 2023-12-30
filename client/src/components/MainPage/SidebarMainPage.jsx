import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { uploadAvatar } from "../../apis/auth";
import { useAuth, useNotification } from "../../hooks";

/* eslint-disable react/prop-types */
function SidebarMainPage() {
  const { authInfo } = useAuth();
  console.log(authInfo)

  const fileInput = useRef();

  const { updateNotification } = useNotification();
  const { isAuth } = useAuth();

  const handleSelectImage = () => {
    fileInput.current.click();
  };

  const handleChange = async (e) => {
    const { files } = e.target;
    const image = files[0];

    const formData = new FormData();
    formData.append("avatar", image);

    const { error, message } = await uploadAvatar(formData);
    if (error) return updateNotification("error", error);

    updateNotification("success", message);
    isAuth();
  };

  return (
    <div className="main-page scaffold-layout__sidebar">
      <div role="region" aria-label="Side Bar">
        <div className="main-page feed-identity-module artdeco-card overflow-hidden mb2">
          <div className="main-page feed-identity-module__actor-meta break-words">
            <div className="main-page feed-identity-module__member-bg-image feed-identity-module__default-bg"></div>

            <a className="main-page ember-view block">
              <div>
                <img
                  width="64"
                  src={authInfo.profile?.avatar?.url}
                  loading="lazy"
                  height="64"
                  alt=""
                  className="main-page feed-identity-module__member-photo EntityPhoto-circle-5 evi-image lazy-image ghost-person ember-view"
                />
              </div>
              <div className="main-page t-16 t-black t-bold">
                Welcome, {authInfo.profile?.fullName}!
              </div>
            </a>

            <a className="main-page ember-view feed-identity-module__action">
              <div className="main-page ember-view t-12 t-normal mt1">
                <input
                  accept="image/*"
                  className="main-page hidden"
                  id="image-selector__file-upload-input"
                  type="file"
                  ref={fileInput}
                  onChange={handleChange}
                ></input>
                <span onClick={handleSelectImage}>Add a photo</span>{" "}
              </div>
            </a>
          </div>
          <div className="main-page feed-identity-module__widgets pv3">
            <div className="main-page entity-list-wrapper ">
              <ul className="main-page entity-list row">
                <li className="main-page feed-identity-module__entity-list-item entity-list-item">
                  <NavLink
                    to="/my-network"
                    className="main-page ember-view full-width"
                  >
                    <div className="main-page display-flex align-items-baseline">
                      <div className="main-page text-align-left">
                        <div className="main-page ember-view t-12 t-black--light t-bold mr2">
                          <span>Connection</span>{" "}
                        </div>

                        <div className="main-page ember-view t-12 t-black t-bold">
                          <span>Grow your network</span>{" "}
                        </div>
                      </div>
                      <div className="main-page feed-identity-widget-item__icon-stat t-12 t-black t-bold flex-1">
                        <span className="main-page feed-identity-widget-item__stat">
                          <strong>
                            {authInfo.profile?.connections?.length !== 0
                              ? authInfo.profile?.connections?.length
                              : 0}
                          </strong>
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <NavLink
            to="/my-items"
            className="main-page ember-view feed-identity-module__anchored-widget link-without-hover-state p3 text-align-left"
          >
            <span className="main-page t-12 t-black t-bold v-align-middle display-flex">
              <span className="main-page t-black--light mr2 inline-flex">
                <svg
                  role="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  data-test-icon="bookmark-fill-small"
                  className="main-page"
                >
                  <use
                    href="#bookmark-fill-small"
                    width="16"
                    height="16"
                    className="main-page"
                  ></use>
                </svg>
              </span>
              My items
            </span>
          </NavLink>
        </div>

        {/* <div className="main-page scaffold-layout__sticky scaffold-layout__sticky--is-active scaffold-layout__sticky--md">
        <div className="main-page scaffold-layout__sticky-content">
          <div className="main-page community-panel artdeco-card mb2">
            <div className="main-page community-panel-interest-package community-panel-interest-package--expanded">
              <section className="main-page community-panel-interest-package__section-header">
                <header className="main-page community-panel-interest-package__header-container">
                  <h2
                    className="main-page community-panel-interest-package__header t-12 pv1"
                    id="ember170-label"
                  >
                    <a className="main-page app-aware-link  community-panel-interest-package__header-link community-panel-interest-package--hoverable t-black t-bold block pv1">
                      <span aria-hidden="true">Groups</span>
                      <span className="main-page visually-hidden">
                        See all Groups
                      </span>
                    </a>
                  </h2>
                </header>
                <div className="main-page community-panel-interest-package__actions">
                  <button
                    aria-expanded="true"
                    className="main-page community-panel-interest-package__expand-collapse-cta-icon community-panel-interest-package--hoverable artdeco-button artdeco-button--circle artdeco-button--1 artdeco-button--tertiary ember-view"
                  >
                    {" "}
                    <li-icon
                      aria-hidden="true"
                      type="chevron-up"
                      class="main-page artdeco-button__icon"
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
                        <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                      </svg>
                    </li-icon>
                    <span className="main-page artdeco-button__text"></span>
                  </button>
                </div>
              </section>

              <ul className="main-page community-panel-interest-package__section-expanded">
                <li className="main-page community-panel-interest-package__entity-item truncate">
                  <a className="main-page app-aware-link community-panel-interest-package__entity-link t-12 t-black--light community-panel-interest-package--hoverable link-without-visited-state pv1 block full-width">
                    <div className="main-page truncate align-items-center">
                      <svg
                        role="none"
                        aria-hidden="true"
                        className="main-page community-panel-interest-package__entity-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        data-test-icon="group-small"
                      >
                        <use
                          href="#group-small"
                          width="16"
                          height="16"
                          className="main-page"
                        ></use>
                      </svg>
                      Hello54242
                    </div>
                  </a>
                </li>
              </ul>
              <a className="main-page app-aware-link community-panel-interest-package__cta community-panel-interest-package--hoverable full-width t-12 t-bold t-black--light">
                <span aria-hidden="true">See all</span>
                <span className="main-page visually-hidden">
                  See all Groups
                </span>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default SidebarMainPage;
