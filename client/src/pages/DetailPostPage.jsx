import { useEffect, useState } from "react";
import { getPostOfConnections } from "../apis/post";
import HeaderMainPage from "../components/MainPage/HeaderMainPage";
import SinglePost from "../components/MainPage/SinglePost";
import SVG from "../components/SVG";
import { useAuth } from "../hooks";

function DetailPostPage() {
  const { authInfo } = useAuth();

  const [posts, setPosts] = useState([]);
  console.log(posts);

  const getPosts = async function () {
    const { error, posts } = await getPostOfConnections();
    if (error) return;

    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="main-page application-outlet">
      <SVG />
      <HeaderMainPage user={authInfo?.profile} />
      <div className="main-page authentication-outlet">
        <div
          id="voyager-feed"
          className="main-page feed-container-theme feed-outlet"
        >
          <div
            id="voyager-feed"
            className="main-page feed-container-theme feed-outlet"
          >
            <div className="main-page self-focused ember-view">
              <div className="main-page scaffold-layout__tracking-element"></div>

              <div className="main-page scaffold-layout scaffold-layout--breakpoint-xl scaffold-layout--sidebar-main-aside scaffold-layout--reflow">
                <div className="main-page scaffold-layout__inner scaffold-layout-container scaffold-layout-container--reflow">
                  <div className="main-page scaffold-layout__row scaffold-layout__content scaffold-layout__content--sidebar-main-aside scaffold-layout__content--has-sidebar scaffold-layout__content--has-aside">
                    <div className="main-page scaffold-layout__sidebar">
                      <div className="main-page scaffold-layout__sticky scaffold-layout__sticky--is-active scaffold-layout__sticky--md">
                        <div className="main-page scaffold-layout__sticky-content">
                          <div className="main-page feed-profile-rail-card profile-rail-card artdeco-card overflow-hidden full-width">
                            <div
                              className="main-page profile-rail-card__premium-bar premium-accent-bar"
                              role="presentation"
                            ></div>

                            <div className="main-page pt3 ph3 pb4 break-words">
                              <div
                                style={{
                                  backgroundImage: `url("https://media.licdn.com/dms/image/D5616AQHnp6JIw0Xllw/profile-displaybackgroundimage-shrink_200_800/0/1686312447084?e=1709164800&v=beta&t=uEDKbFDbYHUJx3eUxaKdL0iXN41ULDZFwmaUfD_WBoU")`,
                                }}
                                className="main-page profile-rail-card__member-bg-image ember-view"
                              ></div>

                              <a
                                className="main-page app-aware-link  profile-rail-card__profile-link t-16 t-black t-bold tap-target"
                                href="https://www.linkedin.com/in/seema-yadav-211508112?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABwyEy0BDob-zn_MYBmocZKmwM3tDQHGvZU"
                              >
                                <div className="main-page ivm-image-view-model   ">
                                  <div className="main-page ivm-view-attr__img-wrapper display-flex">
                                    <img
                                      width="72"
                                      src={authInfo.profile?.avatar?.url}
                                      loading="lazy"
                                      height="72"
                                      className="main-page ivm-view-attr__img--centered EntityPhoto-circle-5  profile-rail-card__member-photo  evi-image lazy-image ember-view"
                                    />
                                  </div>
                                </div>
                              </a>

                              <div
                                className="main-page link-without-hover-visited"
                                style={{ textAlign: "center" }}
                              >
                                <p className="main-page single-line-truncate t-16 t-black t-bold mt2 profile-rail-card__name">
                                  <span aria-hidden="true">
                                    <span dir="ltr">SEEMA YADAV</span>
                                  </span>
                                  <span className="main-page visually-hidden">
                                    SEEMA YADAV
                                  </span>
                                </p>
                              </div>

                              <p
                                style={{ textAlign: "center" }}
                                className="main-page profile-rail-card__description t-12 t-black--light t-normal mt1"
                              >
                                <span aria-hidden="true">
                                  ✨ Science Educator✨🎉
                                </span>
                                <span className="main-page visually-hidden">
                                  ✨ Science Educator✨🎉
                                </span>
                              </p>
                              {/* <button
                                className="main-page follow   profile-rail-card__follow-button artdeco-button artdeco-button--secondary"
                                aria-label="Follow"
                                aria-live="polite"
                                type="button"
                              >
                                <svg
                                  role="none"
                                  aria-hidden="true"
                                  className="artdeco-button__icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  data-test-icon="add-small"
                                >
                                  <use
                                    href="#add-small"
                                    width="16"
                                    height="16"
                                  ></use>
                                </svg>

                                <span aria-hidden="true">Follow</span>
                              </button> */}

                              <a
                                style={{ textAlign: "center" }}
                                className="main-page app-aware-link  profile-rail-card__profile-link t-16 t-black t-bold tap-target"
                                href="https://www.linkedin.com/in/seema-yadav-211508112?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABwyEy0BDob-zn_MYBmocZKmwM3tDQHGvZU"
                              >
                                <div className="main-page single-line-truncate t-16 t-black t-bold mt2">
                                  View full profile
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <main className="main-page scaffold-layout__main">
                      <div
                        className="main-page update-outlet"
                        aria-label="Update container"
                      >
                        <section className="main-page fixed-full">
                          <SinglePost post={posts[0]} />
                        </section>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPostPage;
