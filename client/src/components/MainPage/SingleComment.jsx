import React, { useEffect, useRef, useState } from "react";
import {
  checkLikedComment,
  doLike,
  getLikesOfPost,
  getRepliesOfComment,
  removeLike,
  replyComment,
} from "../../apis/interaction";
import SingleReply from "./SingleReply";
import SVG from "../../components/SVG";

const handleTime = function (date) {
  const distance = Math.abs(new Date(date) - new Date());
  const day = distance / (1000 * 60 * 60 * 24);
  if (day < 1) {
    return `${Math.floor(distance / (1000 * 60 * 60))}h`;
  }

  return `${Math.floor(day)}d`;
};

/* eslint-disable react/prop-types */
function SingleComment({ comment, post }) {
  const [like, setLike] = useState({});
  const [isLikedComment, setIsLikedComment] = useState(false);
  const [replies, setReplies] = useState([]);
  const [hideInputReply, setHideInputReply] = useState(true);
  const [refresh, setRefresh] = useState(false);

  console.log(comment)
  const inputRef = useRef();
  const exceptionRef = useRef();

  const getLikes = async function () {
    const data = await getLikesOfPost({ commentId: comment._id });
    if (data?.error) return;

    setLike(data);
  };

  const getReplies = async function () {
    const data = await getRepliesOfComment({ commentId: comment._id });
    if (data?.error) return;

    setReplies(data.replies);
  };

  const likedComment = async function () {
    const data = await checkLikedComment({ commentId: comment._id });
    if (data?.error) return;

    setIsLikedComment(data.like);
  };

  const handleHideInputReply = function () {
    setHideInputReply((prevState) => !prevState);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    const content = inputRef.current.textContent.slice(
      exceptionRef.current.textContent.length
    );

    const data = await replyComment({
      commentId: comment._id,
      content,
    });

    if (data?.error) return;

    setRefresh((prevState) => !prevState);
  };

  const handleClickLike = async function () {
    if (!isLikedComment) {
      const data = await doLike({ commentId: comment._id, like: true });
      if (data?.error) return;

      setRefresh((prevState) => !prevState);
    } else {
      const data = await removeLike({ commentId: comment._id });
      if (data?.error) return;

      setRefresh((prevState) => !prevState);
    }
  };

  useEffect(() => {
    getLikes();
    getReplies();
    likedComment();
  }, [refresh]);

  return (
    <React.Fragment>
      <SVG />
      <article className="main-page comments-comment-item comments-comments-list__comment-item">
        <div className="main-page comments-post-meta comments-comment-item__post-meta">
          <a className="main-page app-aware-link  tap-target comments-post-meta__actor-link">
            <div className="main-page ivm-image-view-model">
              <div className="main-page ivm-view-attr__img-wrapper display-flex">
                <img
                  width="40"
                  src={comment?.owner?.avatar?.url}
                  loading="lazy"
                  height="40"
                  alt=""
                  className="main-page ivm-view-attr__img--centered EntityPhoto-circle-2   evi-image lazy-image ember-view"
                />
              </div>
            </div>
          </a>

          <div className="main-page comments-post-meta__profile-info-wrapper display-flex">
            <a className="main-page app-aware-link  inline-flex overflow-hidden t-16 t-black t-bold tap-target">
              <h3 className="main-page comments-post-meta__actor display-flex flex-column overflow-hidden t-12 t-normal t-black--light">
                <span className="main-page comments-post-meta__name text-body-small-open t-black">
                  <span className="main-page comments-post-meta__name-text hoverable-link-text mr1">
                    <span dir="ltr">
                      <span aria-hidden="true">{`${comment?.owner?.firstName} ${comment?.owner?.lastName}`}</span>
                      <span className="main-page visually-hidden">
                        View Jason Goh’s profile
                      </span>
                    </span>
                  </span>

                  {/* <span className="main-page mr1 t-normal t-black--light">
                  <span className="main-page white-space-pre"> </span>
                  (He/Him) • 3rd+
                </span> */}
                </span>
                <span className="main-page comments-post-meta__headline t-12 t-normal t-black--light">
                  {comment?.owner?.initialEducation
                    ? `Student at ${comment?.owner?.initialEducation?.university?.name}`
                    : `${comment?.owner?.initialExperience?.titleJob} at ${comment?.owner?.initialExperience?.company?.name}`}
                </span>
              </h3>
            </a>
          </div>
        </div>
        <div className="main-page comments-comment-item__options">
          <time className="main-page comments-comment-item__timestamp t-12 t-black--light t-normal mr1">
            {handleTime(comment?.updatedAt)}
          </time>
        </div>

        <div className="main-page comments-comment-item-content-body break-words">
          <div>
            <div className="main-page feed-shared-inline-show-more-text comments-comment-item__inline-show-more-text">
              <span className="main-page comments-comment-item__main-content feed-shared-main-content--comment t-14 t-black t-normal">
                <div
                  dir="ltr"
                  className="main-page update-components-text relative"
                >
                  <span dir="ltr">{comment?.content}</span>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="main-page social-details-social-activity comment-social-activity">
          {/* <div>
          <div className="main-page ember-view"></div>
        </div> */}
          <div className="main-page comments-comment-item__social-actions">
            <div className="main-page comments-comment-social-bar display-flex">
              <div className="main-page comments-comment-social-bar__action-group">
                <span className="main-page reactions-react-button comments-comment-social-bar__reaction-action-button">
                  <button
                    aria-pressed="false"
                    aria-label="React Like to Jason Goh’s comment"
                    className="main-page artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button react-button__trigger"
                    onClick={handleClickLike}
                  >
                    <span className="main-page artdeco-button__text">
                      <div className="main-page flex-wrap justify-center artdeco-button__text align-items-center">
                        <span
                          aria-hidden="true"
                          className={`main-page artdeco-button__text react-button__text social-action-button__text ${
                            isLikedComment && "react-button__text--like"
                          }`}
                        >
                          Like
                        </span>
                      </div>
                    </span>
                  </button>
                </span>
                <span className="main-page comments-comment-social-bar__social-counts-separator t-12 t-black--light t-normal pl1 pr2"></span>
                <button
                  className="main-page comments-comment-social-bar__reactions-count t-12 t-black--light t-normal hoverable-link-text display-flex"
                  aria-label="2 Reactions on Jason Goh’s comment"
                  type="button"
                >
                  <img
                    className="main-page reactions-icon comments-comment-social-bar__count-icon reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
                    src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                    alt="like"
                    data-test-reactions-icon-type="LIKE"
                    data-test-reactions-icon-theme="light"
                  />
                  <span
                    aria-hidden="true"
                    className="main-page v-align-middle pl1"
                  >
                    {like.amountLike}
                  </span>
                </button>
              </div>
              <div className="main-page comments-comment-social-bar__vertical-divider"></div>
              <div className="main-page comments-comment-social-bar__action-group">
                <button
                  onClick={handleHideInputReply}
                  className="main-page artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view comments-comment-social-bar__reply-action-button comments-comment-social-bar__action-button button reply"
                >
                  <span className="main-page artdeco-button__text">
                    <span aria-hidden="true">Reply</span>
                  </span>
                </button>
                <span className="main-page comments-comment-social-bar__social-counts-separator t-12 t-black--light t-normal ph2"></span>
                <span
                  aria-hidden="true"
                  className="main-page comments-comment-social-bar__replies-count"
                >
                  {replies.length} Reply
                </span>
                <span className="main-page visually-hidden">
                  1 Comment on Jason Goh’s comment
                </span>{" "}
              </div>
            </div>
          </div>

          <div className="main-page comments-comment-item__nested-items">
            <div className="main-page replies-list comments-list comments-comment-item__replies-list">
              {replies &&
                replies.map((reply, index) => (
                  <SingleReply key={index} reply={reply} post={post} />
                ))}
            </div>
            {!hideInputReply && (
              <div
                className="main-page comments-comment-box comments-comment-box--has-avatar comments-comment-item__comment-box"
                data-scroll-name="true"
              >
                <div className="main-page feed-shared-avatar-image b0 member comments-comment-box__avatar-image ml0 mt2">
                  <img
                    src="https://static.licdn.com/aero-v1/sc/h/1c5u578iilxfi4m4dvc4q810q"
                    alt="Nguyen Toan"
                    className="main-page avatar member EntityPhoto-circle-1 evi-image ghost-person ember-view"
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
                                    aria-placeholder="Add a reply…"
                                    aria-label="Text editor for creating content"
                                    role="textbox"
                                    aria-multiline="true"
                                    suppressContentEditableWarning={true}
                                    ref={inputRef}
                                  >
                                    <p>
                                      <a
                                        className="main-page ql-mention"
                                        href="#"
                                        ref={exceptionRef}
                                      >
                                        {`${comment?.owner?.firstName} ${comment?.owner?.lastName} `}
                                      </a>
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
                        <div className="main-page display-flex mlA">
                          <div>
                            <span className="main-page artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top ember-view">
                              <button
                                title="Open Emoji Keyboard"
                                aria-label="Open Emoji Keyboard"
                                aria-expanded="false"
                                aria-controls="artdeco-hoverable-comments_overlay_emoji__emoji-hoverable__content"
                                className="main-page comments-comment-box__emoji-picker-trigger emoji-hoverable-trigger artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
                                type="button"
                              >
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
                                  data-test-icon="emoji-medium"
                                >
                                  <use
                                    href="#emoji-medium"
                                    width="24"
                                    height="24"
                                    className="main-page"
                                  ></use>
                                </svg>
                                <span className="main-page artdeco-button__text">
                                  Open Emoji Keyboard
                                </span>
                              </button>
                            </span>
                          </div>

                          <div className="main-page comments-comment-box__button-group">
                            <div className="main-page comments-comment-box__detour-container">
                              <button
                                aria-label="Add a photo"
                                className="main-page comments-comment-box__detour-icons artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
                                type="button"
                              >
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
                                  data-test-icon="image-medium"
                                >
                                  <use
                                    href="#image-medium"
                                    width="24"
                                    height="24"
                                    className="main-page"
                                  ></use>
                                </svg>
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
                          Reply
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="main-page ember-view">
          <div className="main-page ember-view"></div>
        </div>
        <div className="main-page ember-view"></div>
      </article>
    </React.Fragment>
  );
}

export default SingleComment;
