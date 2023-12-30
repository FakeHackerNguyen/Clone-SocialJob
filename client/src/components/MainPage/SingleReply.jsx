/* eslint-disable react/prop-types */
const handleTime = function (date) {
  const distance = Math.abs(new Date(date) - new Date());
  const day = distance / (1000 * 60 * 60 * 24);
  if (day < 1) {
    return `${Math.floor(distance / (1000 * 60 * 60))}h`;
  }

  return `${Math.floor(day)}d`;
};

function SingleReply({ reply, post }) {
  return (
    <article className="main-page comments-comment-item comments-reply-item reply-item">
      <div className="main-page comments-post-meta comments-reply-item__post-meta">
        <a className="main-page app-aware-link  tap-target comments-post-meta__actor-link">
          <div className="main-page ivm-image-view-model">
            <div className="main-page ivm-view-attr__img-wrapper display-flex">
              <img
                width="32"
                src={reply?.owner?.avatar}
                loading="lazy"
                height="32"
                className="main-page ivm-view-attr__img--centered EntityPhoto-circle-1   evi-image lazy-image ember-view"
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
                    <span aria-hidden="true">{`${reply?.owner?.firstName} ${reply?.owner?.lastName}`}</span>
                    <span className="main-page visually-hidden">
                      View Nam Phùng’s profile
                    </span>
                  </span>
                </span>

                {reply?.owner?._id === post?.owner?._id && (
                  <span className="main-page comments-post-meta__author-badge label-neutral">
                    Author
                  </span>
                )}
              </span>
              <span className="main-page comments-post-meta__headline t-12 t-normal t-black--light">
                {reply?.owner?.isStudent
                  ? `Student at ${reply?.owner?.university}`
                  : `${reply?.owner?.titleJob} at ${reply?.owner?.company}`}
              </span>
            </h3>
          </a>
        </div>
      </div>

      <div className="main-page comments-comment-item__options">
        <time className="main-page comments-comment-item__timestamp t-12 t-black--light t-normal mr1">
          {handleTime(reply?.updatedAt)}
        </time>
      </div>
      <div className="main-page comments-reply-item-content-body break-words">
        <div>
          <div className="main-page feed-shared-inline-show-more-text comments-comment-item__inline-show-more-text">
            <span className="main-page comments-comment-item__main-content feed-shared-main-content--comment t-14 t-black t-normal">
              <div
                dir="ltr"
                className="main-page update-components-text relative"
              >
                <span dir="ltr">
                  <a className="main-page app-aware-link ">
                    <span>
                      {`${reply?.comment?.owner?.firstName} ${reply?.comment?.owner?.lastName}`}
                    </span>
                  </a>
                  <span className="main-page white-space-pre"> </span>
                  {reply?.content}
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="main-page social-details-social-activity comment-social-activity comment-social-activity--is-reply">
        <div>
          <div className="main-page ember-view"></div>
        </div>
        <div className="main-page comments-comment-item__social-actions comments-comment-item__social-actions--is-reply">
          <div className="main-page comments-comment-social-bar display-flex">
            <div className="main-page comments-comment-social-bar__action-group">
              <span className="main-page reactions-react-button comments-comment-social-bar__reaction-action-button">
                <button
                  aria-pressed="false"
                  aria-label="React Like to Nam Phùng’s comment"
                  className="main-page artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button react-button__trigger"
                >
                  <span className="main-page artdeco-button__text">
                    <div className="main-page flex-wrap justify-center artdeco-button__text align-items-center">
                      <span
                        aria-hidden="true"
                        className="main-page artdeco-button__text react-button__text social-action-button__text"
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
                        className="main-page"
                      ></use>
                    </svg>
                  </span>
                </button>
              </span>
            </div>
            <div className="main-page comments-comment-social-bar__vertical-divider"></div>
            <div className="main-page comments-comment-social-bar__action-group">
              <button
                aria-label="Reply to Nam Phùng’s comment"
                className="main-page artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view comments-comment-social-bar__reply-action-button comments-comment-social-bar__action-button button reply"
              >
                <span className="artdeco-button__text">
                  <span aria-hidden="true">Reply</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="main-page comments-comment-item__nested-items"></div>
      </div>
      <div className="main-page ember-view">
        <div className="main-page ember-view"></div>
      </div>
      <div className="main-page ember-view"></div>
    </article>
  );
}
export default SingleReply;
