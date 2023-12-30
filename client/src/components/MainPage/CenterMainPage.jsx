import { useEffect, useState } from "react";
import { getPostOfConnections } from "../../apis/post";
import SinglePost from "./SinglePost";

/* eslint-disable react/prop-types */
function CenterMainPage({ onOpenModalPost, getAgainPost }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async function () {
    const { error, posts } = await getPostOfConnections();
    if (error) return;

    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, [getAgainPost]);

  return (
    <main className="main-page scaffold-layout__main" aria-label="Main Feed">
      <div>
        {/* <div></div> */}
        <div className="main-page share-box-feed-entry__closed-share-box artdeco-card">
          <div className="main-page media-modifiers-drag-and-drop__dropzone">
            <li-icon
              aria-hidden="true"
              type="plus"
              class="main-page media-modifiers-drag-and-drop__dropzone-icon"
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

          <div className="main-page share-box-feed-entry__top-bar">
            <a className="main-page ember-view">
              <div className="main-page share-box-feed-entry__avatar">
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/1c5u578iilxfi4m4dvc4q810q"
                  alt="Visit profile for Nguyen Toan"
                  className="main-page EntityPhoto-circle-3 evi-image ghost-person ember-view"
                />
              </div>
            </a>
            <button
              onClick={onOpenModalPost}
              className="main-page artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view share-box-feed-entry__trigger"
            >
              <span className="main-page artdeco-button__text">
                <span className="main-page display-flex align-items-center">
                  Start a post
                </span>
              </span>
            </button>
          </div>

          <span></span>
        </div>
      </div>
      <div className="main-page mb2 artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view">
        <button
          aria-expanded="false"
          className="main-page display-flex full-width artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view"
          type="button"
        >
          <hr className="main-page flex-grow-1 mr2 mvA feed-index-sort-border" />
          <div className="main-page display-flex t-black">
            <span className="main-page t-12 t-black--light t-normal">
              Sort by:
            </span>
            <span className="main-page t-12 t-bold mh1">Top</span>
            <svg
              role="img"
              aria-hidden="false"
              aria-label="Sort order dropdown button"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              data-test-icon="caret-small"
            >
              <use href="#caret-small" width="16" height="16"></use>
            </svg>
          </div>
        </button>
        <div
          aria-hidden="true"
          className="main-page artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"
        ></div>
      </div>
      <div>
        <div className="main-page scaffold-finite-scroll scaffold-finite-scroll--infinite">
          <div className="main-page scaffold-finite-scroll__content">
            {posts &&
              posts.map((post, index) => (
                <SinglePost key={index} post={post} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CenterMainPage;
