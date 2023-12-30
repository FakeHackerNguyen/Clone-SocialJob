import { useEffect, useRef } from "react";
import { useState } from "react";
import {
  commentPost,
  getCommentsOfPost,
  getLikesOfPost,
  doLike,
  removeLike,
} from "../../apis/interaction";

import { checkLikedPost, reportPost } from "../../apis/post";
import { useNotification } from "../../hooks";
import SingleComment from "./SingleComment";

/* eslint-disable react/prop-types */
function SinglePost({ post }) {
  console.log(post);
  const [like, setLike] = useState({});
  const [isLikedPost, setIsLikedPost] = useState(false);
  const [comments, setComments] = useState([]);
  const [listComment, setListComment] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [openReport, setOpenReport] = useState(false);

  const { updateNotification } = useNotification();
  const inputRef = useRef();

  const getLikes = async function () {
    const data = await getLikesOfPost({ postId: post._id });
    if (data?.error) return;

    setLike(data);
  };

  const getComments = async function () {
    const { error, comments } = await getCommentsOfPost({ postId: post._id });
    if (error) return;

    setComments(comments);
  };

  const likedPost = async function () {
    const { error, like } = await checkLikedPost({ postId: post._id });
    if (error) return;

    setIsLikedPost(like);
  };

  const handleListComment = function () {
    setListComment((prevState) => !prevState);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    const { error } = await commentPost({
      postId: post._id,
      content: inputRef.current.textContent,
    });

    if (error) return;

    setRefresh((prevState) => !prevState);
  };

  const handleClickLike = async function () {
    if (!isLikedPost) {
      const { error } = await doLike({ postId: post._id, like: true });
      if (error) return;

      setRefresh((prevState) => !prevState);
    } else {
      const { error } = await removeLike({ postId: post._id });
      if (error) return;

      setRefresh((prevState) => !prevState);
    }
  };

  const handleReport = async function () {
    const { error, message } = await reportPost({ postId: post._id });
    if (error) return updateNotification("error", error);

    updateNotification("success", message);
  };

  useEffect(() => {
    getLikes();
    getComments();
    likedPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <div>
      <div className="main-page relative">
        <div className="main-page full-height">
          <div className="main-page feed-shared-update-v2 feed-shared-update-v2--minimal-padding full-height relative artdeco-card">
            <div>
              <div className="main-page update-components-actor display-flex update-components-actor--with-control-menu">
                <div className="main-page update-components-actor__container display-flex flex-grow-1">
                  <div className="main-page avatar-poster">
                    <img
                      src={post?.owner?.avatar?.url}
                      className="main-page EntityPhoto-circle-3 evi-image ghost-person ember-view"
                    />
                  </div>
                  <div className="main-page update-components-actor__meta relative">
                    <a className="main-page app-aware-link  update-components-actor__meta-link">
                      <span className="main-page update-components-actor__title">
                        <span className="main-page update-components-actor__name t-14 t-bold hoverable-link-text t-black">
                          <span aria-hidden="true">
                            {/* <span dir="ltr">{"Hello54242"}</span> */}
                            <span dir="ltr">{post?.owner?.fullName}</span>
                          </span>
                        </span>
                      </span>

                      <span className="main-page update-components-actor__description t-black--light t-12 t-normal">
                        {/* <span aria-hidden="true">Nguyen Toan • You</span> */}
                        <span aria-hidden="true">
                          {post?.owner?.initialEducation
                            ? `Student at ${post?.owner?.initialEducation?.university?.name}`
                            : `${post?.owner?.initialExperience?.titleJob} at ${post?.owner?.initialExperience?.company?.name}`}
                        </span>
                      </span>
                    </a>
                    <a className="main-page app-aware-link  update-components-actor__sub-description-link">
                      <span className="main-page update-components-actor__sub-description t-black--light t-12 t-normal">
                        <div className="main-page update-components-text-view break-words ">
                          <span>
                            <span aria-hidden="true">
                              today •{" "}
                              <li-icon
                                aria-hidden="true"
                                type="group"
                                class="v-align-bottom"
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
                                  <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                                  <circle cx="8" cy="4" r="2"></circle>
                                  <circle cx="12.5" cy="5.5" r="1.5"></circle>
                                  <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                                  <circle cx="3.5" cy="5.5" r="1.5"></circle>
                                </svg>
                              </li-icon>{" "}
                            </span>
                            <span className="main-page visually-hidden">
                              now •{" "}
                            </span>
                          </span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="main-page feed-shared-control-menu display-flex feed-shared-update-v2__control-menu absolute text-align-right">
                <div className="main-page artdeco-dropdown artdeco-dropdown--is-open artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view">
                  <button
                    aria-expanded="true"
                    className="main-page feed-shared-control-menu__trigger artdeco-button artdeco-button--tertiary artdeco-button--muted artdeco-button--1 artdeco-button--circle artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view"
                    type="button"
                    onClick={() => setOpenReport((prevState) => !prevState)}
                  >
                    <svg
                      role="none"
                      aria-hidden="true"
                      className="main-page artdeco-button__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                    >
                      <use
                        href="#overflow-web-ios-medium"
                        width="24"
                        height="24"
                        className="main-page"
                      ></use>
                    </svg>
                  </button>
                  {openReport && (
                    <div
                      aria-hidden="false"
                      className="main-page feed-shared-control-menu__content artdeco-dropdown__content artdeco-dropdown__content--is-open artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"
                    >
                      <div className="main-page artdeco-dropdown__content-inner">
                        <ul>
                          <li className="main-page feed-shared-control-menu__item option-save">
                            <div
                              role="button"
                              className="main-page feed-shared-control-menu__dropdown-item tap-target artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view"
                            >
                              <div className="main-page ivm-image-view-model    flex-shrink-zero mr2">
                                <div className="main-page ivm-view-attr__img-wrapper display-flex">
                                  <li-icon
                                    aria-hidden="true"
                                    type="bookmark-outline"
                                    class="main-page"
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
                                      <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
                                    </svg>
                                  </li-icon>
                                </div>
                              </div>

                              <div className="main-page flex-grow-1 text-align-left">
                                <h5
                                  className="main-page feed-shared-control-menu__headline t-14 t-black t-bold"
                                  role="none"
                                >
                                  Save
                                </h5>
                                <p className="main-page feed-shared-control-menu__sub-headline t-12 t-black t-black--light"></p>
                              </div>
                            </div>
                          </li>

                          <li
                            className="main-page feed-shared-control-menu__item option-disinterest"
                            onClick={handleReport}
                          >
                            <div
                              role="button"
                              className="main-page feed-shared-control-menu__dropdown-item tap-target artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view"
                            >
                              <div className="main-page ivm-image-view-model    flex-shrink-zero mr2">
                                <div className="main-page ivm-view-attr__img-wrapper display-flex">
                                  <li-icon
                                    aria-hidden="true"
                                    type="visibility-off"
                                    class="main-page"
                                    size="medium"
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
                                      <path d="M2 2.71l3.88 3.87A12 12 0 001 12a11.74 11.74 0 0011 7 12.4 12.4 0 005.18-1.12L21.29 22l.71-.71L2.71 2zm6.15 6.14l1.42 1.43A2.93 2.93 0 009 12a3 3 0 003 3 2.93 2.93 0 001.72-.57l1.43 1.42A4.93 4.93 0 0112 17a5 5 0 01-5-5 4.93 4.93 0 011.15-3.15zM23 12a12.1 12.1 0 01-4 4.87l-2.58-2.57A5 5 0 009.7 7.58L7.82 5.7A12.64 12.64 0 0112 5a11.76 11.76 0 0111 7zm-8 0a3.25 3.25 0 01-.11.77l-3.66-3.66A3.25 3.25 0 0112 9a3 3 0 013 3z"></path>
                                    </svg>
                                  </li-icon>
                                </div>
                              </div>

                              <div className="main-page flex-grow-1 text-align-left">
                                <h5
                                  className="main-page feed-shared-control-menu__headline t-14 t-black t-bold"
                                  role="none"
                                >
                                  Report
                                </h5>
                                <p className="main-page feed-shared-control-menu__sub-headline t-12 t-black t-black--light"></p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="main-page feed-shared-update-v2__description-wrapper mr2">
                <div className="main-page feed-shared-inline-show-more-text feed-shared-update-v2__description feed-shared-inline-show-more-text--minimal-padding">
                  <div
                    className="main-page update-components-text relative update-components-update-v2__commentary "
                    dir="ltr"
                  >
                    <span className="main-page break-words">
                      <span dir="ltr">{post?.content}</span>
                    </span>
                  </div>
                </div>
              </div>
              {post?.image?.url && (
                <div className="main-page update-components-image update-components-image--single-image feed-shared-update-v2__content">
                  <div className="main-page relative">
                    <div
                      className="main-page update-components-image__container"
                      style={{ paddingTop: "48.04%" }}
                    >
                      <div className="main-page update-components-image__image-link">
                        <div className="main-page ivm-image-view-model   ">
                          <div className="main-page ivm-view-attr__img-wrapper display-flex">
                            <img
                              width="600"
                              src={post?.image?.url}
                              loading="lazy"
                              height="288"
                              alt="Image preview"
                              className="main-page ivm-view-attr__img--centered  update-components-image__image evi-image lazy-image ember-view"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      className="main-page visually-hidden"
                      id="update-components-image-ember2563"
                      aria-hidden="true"
                    ></span>
                  </div>
                </div>
              )}

              {post?.video?.url && (
                <div className="main-page update-components-image update-components-image--single-image feed-shared-update-v2__content">
                  <div className="main-page relative">
                    <div
                      className="main-page update-components-image__container"
                      style={{ paddingTop: "48.04%" }}
                    >
                      <div className="main-page update-components-image__image-link">
                        <div className="main-page ivm-image-view-model   ">
                          <div className="main-page ivm-view-attr__img-wrapper display-flex">
                            <video
                              width="600"
                              src={post?.video?.url}
                              loading="lazy"
                              height="288"
                              controls
                              className="main-page ivm-view-attr__img--centered  update-components-image__image evi-image lazy-image ember-view"
                            ></video>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      className="main-page visually-hidden"
                      id="update-components-image-ember2563"
                      aria-hidden="true"
                    ></span>
                  </div>
                </div>
              )}

              <div className="main-page social-details-social-activity update-v2-social-activity">
                <ul className="main-page social-details-social-counts">
                  <li className="main-page social-details-social-counts__item social-details-social-counts__reactions social-details-social-counts__reactions--right-aligned">
                    <button
                      aria-label="1 reaction"
                      className="main-page t-black--light display-flex align-items-center social-details-social-counts__count-value t-12 hoverable-link-text"
                      type="button"
                    >
                      <img
                        className="main-page reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
                        src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                        alt="like"
                      />
                      <span
                        aria-hidden="true"
                        className="main-page social-details-social-counts__reactions-count"
                      >
                        {like.amountLike}{" "}
                      </span>
                    </button>
                  </li>
                </ul>
                {/* <div>
              <div className="main-page ember-view"></div>
            </div> */}

                <div className="main-page feed-shared-social-actions feed-shared-social-action-bar social-detail-base-social-actions feed-shared-social-action-bar--full-width">
                  <span className="main-page reactions-react-button feed-shared-social-action-bar__action-button">
                    <button
                      aria-pressed="false"
                      aria-label="React Like"
                      className="main-page artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button react-button__trigger"
                      onClick={handleClickLike}
                    >
                      <span className="main-page artdeco-button__text">
                        <div className="main-page flex-wrap justify-center artdeco-button__text align-items-center">
                          {!isLikedPost && (
                            <svg
                              role="none"
                              aria-hidden="true"
                              className="main-page artdeco-button__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              data-supported-dps="24x24"
                              data-test-icon="thumbs-up-outline-medium"
                            >
                              <use
                                href="#thumbs-up-outline-medium"
                                width="24"
                                height="24"
                                className="main-page"
                              ></use>
                            </svg>
                          )}
                          {isLikedPost && (
                            <img
                              className="main-page reactions-icon artdeco-button__icon reactions-react-button__icon reactions-icon__creation--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
                              src="https://static.licdn.com/aero-v1/sc/h/5zhd32fqi5pxwzsz78iui643e"
                              alt="like"
                              data-test-reactions-icon-type="LIKE"
                              data-test-reactions-icon-theme="light"
                            />
                          )}
                          <span
                            aria-hidden="true"
                            className={`main-page artdeco-button__text react-button__text social-action-button__text ${
                              isLikedPost && "react-button__text--like"
                            }`}
                          >
                            Like
                          </span>
                        </div>
                      </span>
                    </button>

                    <button
                      aria-label="Open reactions menu"
                      aria-expanded="false"
                      className="main-page artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view reactions-menu__trigger"
                    >
                      <span className="main-page artdeco-button__text">
                        <svg
                          role="none"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          data-test-icon="caret-small"
                        >
                          <use
                            href="#caret-small"
                            width="16"
                            height="16"
                            className="main-page "
                          ></use>
                        </svg>
                      </span>
                    </button>
                  </span>

                  <span className="main-page artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view feed-shared-social-action-bar__action-button">
                    <div>
                      <button
                        role="button"
                        aria-label="Comment"
                        className="main-page artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button comment-button flex-wrap "
                        onClick={handleListComment}
                      >
                        {" "}
                        <li-icon
                          aria-hidden="true"
                          type="comment"
                          class="main-page artdeco-button__icon"
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
                            <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                          </svg>
                        </li-icon>
                        <span className="main-page artdeco-button__text">
                          Comment
                        </span>
                      </button>
                    </div>
                    <div id="artdeco-gen-245" className="main-page ember-view">
                      <div className="main-page ember-view"></div>
                    </div>
                  </span>
                </div>

                <span
                  aria-live="polite"
                  role="alert"
                  className="main-page visually-hidden"
                  aria-label=""
                ></span>
                {/* comment */}
                {listComment && (
                  <div className="main-page feed-shared-update-v2__comments-container display-flex flex-column">
                    <div
                      className="main-page comments-comment-box comments-comment-box--has-avatar"
                      data-scroll-name="true"
                    >
                      <div className="main-page feed-shared-avatar-image b0 member comments-comment-box__avatar-image ml0 mt1">
                        <img
                          src="https://static.licdn.com/aero-v1/sc/h/1c5u578iilxfi4m4dvc4q810q"
                          alt="Nguyen Toan"
                          className="main-page avatar member EntityPhoto-circle-2 evi-image ghost-person ember-view"
                        />
                      </div>
                      <div className="main-page comments-comment-box__form-container flex-grow-1">
                        <form
                          onSubmit={handleSubmit}
                          className="main-page comments-comment-box__form"
                        >
                          <div className="main-page comments-comment-texteditor">
                            <div className="main-page display-flex flex-wrap">
                              <div className="main-page comments-comment-box-comment__text-editor">
                                <div>
                                  <div className="main-page editor-container relative">
                                    <div>
                                      <div className="main-page editor-content ql-container">
                                        <div
                                          className="main-page ql-editor ql-blank"
                                          contentEditable="true"
                                          suppressContentEditableWarning={true}
                                          ref={inputRef}
                                        >
                                          <p>
                                            <br />
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="main-page display-flex mlA">
                                <div>
                                  <span className="main-page artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top ember-view">
                                    <button
                                      title="Open Emoji Keyboard"
                                      aria-label="Open Emoji Keyboard"
                                      aria-expanded="false"
                                      aria-controls="artdeco-hoverable-comments_overlay_emoji__emoji-hoverable__content"
                                      id="ember4699"
                                      className="main-page comments-comment-box__emoji-picker-trigger emoji-hoverable-trigger artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
                                      type="button"
                                    >
                                      {" "}
                                      <li-icon
                                        aria-hidden="true"
                                        type="emoji-face-icon"
                                        class="main-page artdeco-button__icon"
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
                                  </span>

                                  <div
                                    id="comments_overlay_emoji__emoji-hoverable__content"
                                    className="main-page ember-view"
                                  >
                                    <div className="main-page ember-view"></div>
                                  </div>
                                </div>

                                <div className="main-page comments-comment-box__button-group">
                                  <div className="main-page comments-comment-box__detour-container">
                                    <button
                                      aria-label="Add a photo"
                                      className="main-page comments-comment-box__detour-icons artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
                                      type="button"
                                    >
                                      <li-icon
                                        aria-hidden="true"
                                        type="image"
                                        class="main-page artdeco-button__icon"
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
                                          <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                        </svg>
                                      </li-icon>

                                      <span className="main-page artdeco-button__text"></span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button
                              type="submit"
                              className="main-page comments-comment-box__submit-button mt3 artdeco-button artdeco-button--1 artdeco-button--primary ember-view"
                            >
                              <span className="main-page artdeco-button__text">
                                Post
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="main-page comments-sort-order-toggle mr2 ml3 mb2">
                      <div className="main-page comments-sort-order-toggle__dropdown artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view">
                        <button
                          aria-expanded="false"
                          className="main-page comments-sort-order-toggle__trigger artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view"
                          type="button"
                        >
                          <span className="main-page visually-hidden">
                            Current selected sort order is Most relevant
                          </span>
                          <span
                            aria-hidden="true"
                            className="main-page display-flex align-items-center t-black--light t-bold"
                          >
                            Most relevant
                            <svg
                              role="none"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              data-supported-dps="16x16"
                              data-test-icon="caret-small"
                            >
                              <use
                                href="#caret-small"
                                width="16"
                                height="16"
                                className="main-page"
                              ></use>
                            </svg>
                          </span>
                        </button>
                        <div
                          aria-hidden="true"
                          className={`main-page dropdown-options comments-sort-order-toggle__content artdeco-dropdown__content ${
                            false && "artdeco-dropdown__content--is-open"
                          } artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view`}
                        >
                          {true && (
                            <div className="main-page artdeco-dropdown__content-inner">
                              <ul role="listbox" className="main-page">
                                <div
                                  aria-label="Most relevant. See the most relevant comments"
                                  role="option"
                                  className="main-page tap-target artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view"
                                  aria-selected="true"
                                >
                                  <li className="main-page single-line display-flex align-items-center">
                                    <svg
                                      role="none"
                                      aria-hidden="true"
                                      className="main-page flex-shrink-zero mr2 mt1 align-self-flex-start"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      data-supported-dps="24x24"
                                      data-test-icon="rocket-medium"
                                    >
                                      <use
                                        href="#rocket-medium"
                                        width="24"
                                        height="24"
                                        className="main-page"
                                      ></use>
                                    </svg>

                                    <div className="main-page comments-sort-order-toggle-option flex-grow-1 text-align-left">
                                      <h5
                                        className="main-page comment-sort-order-toggle__main-text t-14 t-black t-bold"
                                        aria-hidden="true"
                                      >
                                        Most relevant
                                      </h5>
                                      <p
                                        className="main-page t-12 t-black t-black--light"
                                        aria-hidden="true"
                                      >
                                        See the most relevant comments
                                      </p>
                                    </div>
                                  </li>
                                </div>
                                <div
                                  aria-label="Most recent. See all comments, the most recent comments are first"
                                  role="option"
                                  className="main-page tap-target artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view"
                                  aria-selected="false"
                                >
                                  <li className="main-page single-line display-flex align-items-center">
                                    <svg
                                      role="none"
                                      aria-hidden="true"
                                      className="main-page flex-shrink-zero mr2 mt1 align-self-flex-start"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      data-supported-dps="24x24"
                                      data-test-icon="clock-medium"
                                    >
                                      <use
                                        href="#clock-medium"
                                        width="24"
                                        height="24"
                                        className="main-page"
                                      ></use>
                                    </svg>

                                    <div className="main-page comments-sort-order-toggle-option flex-grow-1 text-align-left">
                                      <h5
                                        className="main-page comment-sort-order-toggle__main-text t-14 t-black t-bold"
                                        aria-hidden="true"
                                      >
                                        Most recent
                                      </h5>
                                      <p
                                        className="main-page t-12 t-black t-black--light"
                                        aria-hidden="true"
                                      >
                                        See all comments, the most recent
                                        comments are first
                                      </p>
                                    </div>
                                  </li>
                                </div>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="main-page comments-comments-list">
                      <div>
                        {comments &&
                          comments.map((comment, index) => (
                            <SingleComment
                              comment={comment}
                              key={index}
                              post={post}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
