import AsideMainPage from "./AsideMainPage";
import CenterMainPage from "./CenterMainPage";
import SidebarMainPage from "./SidebarMainPage";

/* eslint-disable react/prop-types */
function ContentMainPage({ onOpenModalPost, getAgainPost }) {
  return (
    <div className="main-page authentication-outlet">
      <div
        id="voyager-feed"
        className="main-page feed-container-theme feed-outlet"
      >
        <div className="main-page scaffold-layout scaffold-layout--breakpoint-xl scaffold-layout--sidebar-main-aside scaffold-layout--reflow">
          <div className="main-page scaffold-layout__inner scaffold-layout-container scaffold-layout-container--reflow">
            <div className="main-page scaffold-layout__row scaffold-layout__content scaffold-layout__content--sidebar-main-aside scaffold-layout__content--has-sidebar scaffold-layout__content--has-aside">
              <SidebarMainPage />

              <CenterMainPage
                onOpenModalPost={onOpenModalPost}
                getAgainPost={getAgainPost}
              />

              <AsideMainPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentMainPage;
