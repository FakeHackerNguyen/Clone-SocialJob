import { useRef } from "react";
import { useState } from "react";
import { createPostWithImage, createPostWithVideo } from "../../apis/post";
import { useAuth, useNotification } from "../../hooks";
import FileSelector from "./FileSelector";

/* eslint-disable react/prop-types */
function ModalPersonalPost({ onCloseModalPost, onSetAgainPost }) {
  const [selectedFileForUI, setSelectedFileForUI] = useState(null);
  const [file, setFile] = useState(null);

  const inputRef = useRef();

  const { authInfo } = useAuth();
  const { updateNotification } = useNotification();

  const updateFileForUI = (uploadFile) => {
    const url = URL.createObjectURL(uploadFile);
    setSelectedFileForUI(url);
    setFile(uploadFile);
  };

  const handleChange = function (e) {
    const { files } = e.target;
    const currentFile = files[0];

    console.log(currentFile);
    updateFileForUI(currentFile);
  };

  const handlePostPersonal = async function () {
    const formData = new FormData();
    if (file.type.includes("image")) {
      formData.append("image", file);
      formData.append("content", inputRef.current.textContent);
      formData.append("owner", authInfo.profile._id);

      const { error, message } = await createPostWithImage(formData);
      if (error) return updateNotification("error", error);

      updateNotification("success", message);
      onCloseModalPost();
      onSetAgainPost((prevState) => !prevState);
    } else if (file.type.includes("video")) {
      formData.append("video", file);
      formData.append("content", inputRef.current.textContent);
      formData.append("owner", authInfo.profile._id);

      const { error, message } = await createPostWithVideo(formData);
      if (error) return updateNotification("error", error);

      updateNotification("success", message);
      onCloseModalPost();
      onSetAgainPost((prevState) => !prevState);
    }
  };

  return (
    <div
      aria-hidden="false"
      className="main-page artdeco-modal-overlay artdeco-modal-overlay--layer-default artdeco-modal-overlay--is-top-layer ember-view"
    >
      <div
        role="dialog"
        className="main-page width-large artdeco-modal artdeco-modal--layer-default share-box-v2__modal share-box-v2__modal-phoenix-redesign"
      >
        <span className="main-page a11y-text">Dialog content start.</span>
        <button
          onClick={onCloseModalPost}
          aria-label="Dismiss"
          className="main-page artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view artdeco-modal__dismiss"
        >
          <li-icon
            aria-hidden="true"
            type="cancel-icon"
            class="main-page artdeco-button__icon width-large"
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
              <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
            </svg>
          </li-icon>
          <span className="main-page artdeco-button__text"></span>
        </button>

        <div className="main-page share-box">
          <div className="main-page artdeco-modal__header ember-view share-box-v2__modal-redesigned-header">
            <div>
              <h2 id="main-page share-to-linkedin-modal__header">
                <button
                  className="main-page share-unified-settings-entry-button"
                  type="button"
                >
                  <div className="main-page relative artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
                    <div
                      className="main-page artdeco-entity-lockup__image artdeco-entity-lockup__image--type-circle ember-view"
                      type="circle"
                    >
                      <img
                        src="https://static.licdn.com/aero-v1/sc/h/1c5u578iilxfi4m4dvc4q810q"
                        loading="lazy"
                        alt="Nguyen Toan"
                        id="ember1533"
                        className="main-page EntityPhoto-circle-2 evi-image lazy-image ghost-person ember-view"
                      />
                    </div>
                    <div className="main-page share-unified-settings-entry-button__lockup-content artdeco-entity-lockup__content ember-view">
                      <div className="main-page display-flex align-items-center artdeco-entity-lockup__title ember-view">
                        <span className="main-page text-body-large-bold truncate">
                          {authInfo?.profile?.fullName}
                        </span>
                        <svg
                          role="none"
                          aria-hidden="true"
                          className="main-page share-unified-settings-entry-button__chevron-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          data-test-icon="caret-medium"
                        >
                          <use
                            href="#caret-medium"
                            width="24"
                            height="24"
                            className="main-page"
                          ></use>
                        </svg>
                      </div>
                      <div className="main-page truncate artdeco-entity-lockup__subtitle ember-view">
                        Post to Anyone
                      </div>
                    </div>
                  </div>
                </button>
              </h2>
            </div>
          </div>
          <div className="main-page artdeco-modal__content p0 ember-view">
            <div className="main-page relative">
              <div className="main-page media-modifiers-drag-and-drop__dropzone">
                <li-icon
                  aria-hidden="true"
                  type="plus"
                  className="main-page media-modifiers-drag-and-drop__dropzone-icon"
                  size="medium"
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
                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                  </svg>
                </li-icon>
                <span className="main-page media-modifiers-drag-and-drop__dropzone-drop">
                  Drop your files here
                </span>
                <span className="main-page media-modifiers-drag-and-drop__dropzone-drag">
                  Drag your files here
                </span>
              </div>

              <div className="main-page share-creation-state share-creation-state__share-box-v2 share-creation-state__share-box-v2--redesigned-detours">
                <div className="main-page share-creation-state__content-scrollable">
                  <div>
                    <div className="main-page share-creation-state__text-editor share-creation-state__text-editor-redesigned">
                      <div>
                        <div className="main-page editor-container relative">
                          <div>
                            <div className="main-page editor-content ql-container">
                              <div
                                className={`main-page ql-editor ${
                                  true && "ql-blank"
                                }`}
                                contentEditable="true"
                                role="textbox"
                                aria-multiline="true"
                                suppressContentEditableWarning={true}
                                ref={inputRef}
                              >
                                <p>
                                  <br />
                                </p>
                              </div>
                              <div
                                className="main-page ql-clipboard"
                                contentEditable="true"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {selectedFileForUI ? (
                    <div className="main-page share-creation-state__preview-container">
                      <div className="main-page share-creation-state__preview-container-controls">
                        {/* <button
                        aria-label="Edit media preview"
                        className="main-page share-creation-state__preview-container-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--primary ember-view"
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
                          data-test-icon="edit-small"
                        >
                          <use
                            href="#edit-small"
                            width="16"
                            height="16"
                            className="main-page"
                          ></use>
                        </svg>
                        <span className="main-page artdeco-button__text"></span>
                      </button> */}
                        <button className="main-page share-creation-state__preview-container-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--primary ember-view">
                          <svg
                            role="none"
                            aria-hidden="true"
                            className="main-page artdeco-button__icon "
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            data-supported-dps="16x16"
                            data-test-icon="close-small"
                          >
                            <use
                              href="#close-small"
                              width="16"
                              height="16"
                              className="main-page"
                            ></use>
                          </svg>
                          <span className="main-page artdeco-button__text">
                            <span className="main-page visually-hidden">
                              Remove media
                            </span>
                          </span>
                        </button>
                      </div>
                      <div className="main-page ember-view update-components-mini-update-v2 share-creaton-state__preview-container--as-box feed-shared-update-v2--minimal-padding">
                        <div className="main-page update-components-image update-components-image--single-image update-components-mini-update-v2__reshared-content ">
                          <div className="main-page relative">
                            <div
                              className="main-page update-components-image__container"
                              style={{ paddingTop: "97.96%" }}
                            >
                              <div className="main-page update-components-image__image-link">
                                <div className="main-page ivm-image-view-model">
                                  <div className="main-page ivm-view-attr__img-wrapper display-flex">
                                    {file.type.includes("image") && (
                                      <img
                                        width="600"
                                        height="587"
                                        loading="lazy"
                                        className="main-page ivm-view-attr__img--centered ivm-view-attr__img ivm-view-attr__img--aspect-fit update-components-image__image update-components-image__image--constrained evi-image lazy-image ember-view"
                                        src={selectedFileForUI}
                                      />
                                    )}
                                    {file.type.includes("video") && (
                                      <video
                                        controls
                                        src={selectedFileForUI}
                                      ></video>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span
                              className="main-page visually-hidden"
                              aria-hidden="true"
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="main-page share-creation-state__bottom">
                  <div className="">
                    <div className="main-page share-creation-state__promoted-detour-btn-container">
                      <section className="main-page artdeco-carousel ember-view">
                        <div className="main-page artdeco-carousel__heading artdeco-carousel__heading--custom">
                          <div className="main-page flex-grow-1 artdeco-carousel__title ember-view">
                            <div className="main-page share-creation-state__additional-toolbar share-creation-state__additional-toolbar--no-padding">
                              <div>
                                {/* <span className="main-page artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top ember-view">
                                  <button
                                    title="Open Emoji Keyboard"
                                    aria-label="Open Emoji Keyboard"
                                    aria-expanded="false"
                                    aria-controls="artdeco-hoverable-share_creation_state_emoji__emoji-hoverable__content"
                                    className="main-page share_creation_state__emoji-picker-trigger emoji-hoverable-trigger artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
                                    type="button"
                                  >
                                    {" "}
                                    <li-icon
                                      aria-hidden="true"
                                      type="emoji-face-icon"
                                      className="main-page artdeco-button__icon"
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
                                        <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
                                      </svg>
                                    </li-icon>
                                    <span className="main-page artdeco-button__text">
                                      Open Emoji Keyboard
                                    </span>
                                  </button>
                                </span> */}

                                <div
                                  id="share_creation_state_emoji__emoji-hoverable__content"
                                  className="main-page ember-view"
                                >
                                  <div className="main-page ember-view"></div>
                                </div>
                              </div>

                              <div className="main-page share-creation-state__msg-wrapper">
                                <div className="main-page full-width display-flex"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="main-page artdeco-carousel__content">
                          <ul
                            className="main-page artdeco-carousel__slider ember-view"
                            style={{ transform: "translateX(0px)" }}
                          >
                            <li
                              style={{ width: "71.2px" }}
                              className="main-page artdeco-carousel__item ember-view share-creation-state__promoted-detour-button-item"
                            >
                              <div
                                data-test-display="display"
                                className="main-page artdeco-carousel__item-container"
                              >
                                <div>
                                  <FileSelector onHandleChange={handleChange} />
                                </div>
                              </div>
                            </li>

                            {/* <li
                              style={{ width: "71.2px" }}
                              className="main-page artdeco-carousel__item ember-view share-creation-state__promoted-detour-button-item"
                            >
                              <div
                                data-test-display="display"
                                className="main-page artdeco-carousel__item-container"
                              >
                                <span className="main-page artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view">
                                  <button
                                    aria-label="More"
                                    aria-describedby="artdeco-hoverable-artdeco-gen-133"
                                    className="main-page share-promoted-detour-button share-promoted-detour-button-legacy"
                                    type="button"
                                  >
                                    <span className="main-page share-promoted-detour-button__icon-container">
                                      <svg
                                        role="none"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        data-supported-dps="24x24"
                                        data-test-icon="overflow-web-ios-medium"
                                      >
                                        <use
                                          href="#overflow-web-ios-medium"
                                          width="24"
                                          height="24"
                                          className="main-page"
                                        ></use>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="main-page ember-view">
                                    <div className="main-page ember-view"></div>
                                  </div>
                                </span>
                              </div>
                            </li> */}
                          </ul>
                        </div>
                      </section>
                    </div>
                  </div>
                  <hr className="main-page artdeco-divider share-creation-state__redesigned-footer-divider" />
                  <div className="main-page share-creation-state__footer justify-flex-end">
                    <div className="main-page share-creation-state__schedule-and-post-container">
                      <div className="main-page display-flex align-items-center">
                        <span className="main-page artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view">
                          <div>
                            <button
                              aria-label="Schedule post"
                              aria-describedby="artdeco-hoverable-artdeco-gen-134"
                              className="main-page share-actions__scheduled-post-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
                            >
                              <li-icon
                                aria-hidden="true"
                                type="clock"
                                className="main-page artdeco-button__icon"
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
                                  <g>
                                    <path d="M2 12A10 10 0 1012 2 10 10 0 002 12zm2 0a8 8 0 118 8 8 8 0 01-8-8z"></path>
                                    <path d="M15.1 12.63L13 11.42V7a1 1 0 00-2 0v5a1 1 0 00.51.85l2.59 1.52a1 1 0 101-1.74z"></path>
                                  </g>
                                </svg>
                              </li-icon>
                              <span className="main-page artdeco-button__text"></span>
                            </button>
                          </div>
                          <div className="main-page ember-view">
                            <div className="main-page ember-view"></div>
                          </div>
                        </span>
                      </div>
                      <div className="main-page share-box_actions">
                        <button
                          disabled=""
                          className={`main-page share-actions__primary-action artdeco-button artdeco-button--2 artdeco-button--primary ${
                            false && "artdeco-button--disabled"
                          } ember-view`}
                          onClick={handlePostPersonal}
                        >
                          <span className="main-page artdeco-button__text">
                            Post
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <div className="main-page ember-view">
                    <div className="main-page ember-view"></div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="main-page a11y-text">Dialog content end.</span>
      </div>
    </div>
  );
}

export default ModalPersonalPost;
