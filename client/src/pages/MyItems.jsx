import "../styles/MyItems/4jkihoxcje43vt933mjh2cz6j.css";
import "../styles/MyItems/bliwldt21wzrfz4sh3lx0v3f4.css";

import HeaderMainPage from "../components/MainPage/HeaderMainPage";
import SVG from "../components/SVG";
import { useAuth } from "../hooks";
import PostedJob from "../components/MyItems/PostedJob";
import MyJob from "../components/MyItems/MyJob";
import SavedPost from "../components/MyItems/SavedPost";

function MyItems() {
  const { authInfo } = useAuth();
  return (
    <div className="main-page application-outlet">
      <SVG />
      <HeaderMainPage user={authInfo.profile} />
      <div className="main-page authentication-outlet">
        <div className="main-page pv5 ">
          <main className="main-page grid">
            <aside className="main-page workflow__left-rail grid__col grid__col--lg-5">
              <section className="main-page artdeco-card">
                <h2 className="main-page display-flex align-items-center p3 t-16 t-bold t-black--light">
                  <svg
                    role="none"
                    aria-hidden="true"
                    className="main-page mr2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    data-test-icon="bookmark-fill-small"
                  >
                    <use
                      href="#bookmark-fill-small"
                      width="16"
                      height="16"
                      className="main-page"
                    ></use>
                  </svg>
                  My items
                </h2>

                <div className="main-page workflow-navigation__item">
                  <a
                    href="/my-items/posted-jobs/"
                    className="main-page active ember-view workflow-navigation__link link-without-hover-visited t-14"
                  >
                    <div className="main-page workflow-navigation__item-name t-bold t-black--light truncate">
                      Posted jobs
                    </div>
                    <div className="main-page flex-0 pl1 t-black t-normal">
                      2
                    </div>
                  </a>
                </div>

                <div className="main-page workflow-navigation__item">
                  <a
                    href="/my-items/saved-jobs/"
                    className="main-page ember-view workflow-navigation__link link-without-hover-visited t-14"
                  >
                    <div className="main-page workflow-navigation__item-name t-bold t-black--light truncate">
                      My jobs
                    </div>
                    <div className="main-page flex-0 pl1 t-black t-normal">
                      1
                    </div>
                  </a>
                </div>

                <div className="main-page workflow-navigation__item">
                  <a
                    href="/my-items/saved-posts/"
                    className="main-page ember-view workflow-navigation__link link-without-hover-visited t-14"
                  >
                    <div className="main-page workflow-navigation__item-name t-bold t-black--light truncate">
                      Saved posts and articles
                    </div>
                    <div className="main-page flex-0 pl1 t-black t-normal">
                      1
                    </div>
                  </a>
                </div>
              </section>
            </aside>
            {/* <PostedJob /> */}
            {/* <MyJob /> */}
            <SavedPost />
          </main>
        </div>
      </div>
    </div>
  );
}

export default MyItems;
