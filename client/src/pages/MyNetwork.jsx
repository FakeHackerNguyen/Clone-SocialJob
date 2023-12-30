import "../styles/Connection/622lknnbq4q5ztpkslru2pro7.css";
import SinglePendingConnection from "../components/Network/SinglePendingConnection";
import HeaderMainPage from "../components/MainPage/HeaderMainPage";
import SVG from "../components/SVG";

import { useAuth, useNotification } from "../hooks";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getConnection, getPendingConnection } from "../apis/connection";

function MyNetwork() {
  const [pendingConnections, setPendingConnections] = useState([]);
  const [myConnections, setMyConnections] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { updateNotification } = useNotification();
  const { authInfo } = useAuth();

  const getConnections = async function () {
    const { error, connections } = await getConnection();
    if (error) return updateNotification("error", error);

    setMyConnections(connections);
  };

  const getPendingConnections = async function () {
    const { error, connections } = await getPendingConnection();
    if (error) return updateNotification("error", error);

    setPendingConnections(connections);
  };

  useEffect(() => {
    getConnections();
    getPendingConnections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <div className="main-page application-outlet">
      <SVG />
      <HeaderMainPage user={authInfo.profile} />
      <div className="main-page authentication-outlet">
        <div className="main-page self-focused ember-view">
          <div id="mynetwork" className="main-page extended">
            <div className="main-page body">
              <div className="main-page self-focused ember-view">
                {/* <div className="main-page scaffold-layout__tracking-element"></div> */}

                <div className="main-page scaffold-layout scaffold-layout--breakpoint-xl scaffold-layout--main-aside scaffold-layout--reflow mn-two-column-layout">
                  <div className="main-page scaffold-layout__inner scaffold-layout-container scaffold-layout-container--reflow">
                    <div className="main-page scaffold-layout__row scaffold-layout__content scaffold-layout__content--sidebar-main scaffold-layout__content--has-sidebar">
                      {/* side bar */}
                      <div className="main-page scaffold-layout__sidebar">
                        <div className="main-page scaffold-layout__sticky scaffold-layout__sticky--md mn-left-rail">
                          <div className="main-page scaffold-layout__sticky-content">
                            <div className="main-page artdeco-card">
                              <section className="main-page mn-community-summary">
                                <div className="main-page mn-community-summary__section artdeco-dropdown">
                                  <h2 className="main-page mh4 mv1 t-16 t-black t-normal">
                                    Manage my network
                                  </h2>

                                  <div className="main-page mn-community-summary__sub-section artdeco-dropdown__item">
                                    <NavLink
                                      to="/connections"
                                      className="main-page ember-view mn-community-summary__link link-without-hover-state"
                                    >
                                      <div className="main-page mn-community-summary__info-container t-black t-16 t-normal">
                                        <div className="main-page mn-community-summary__entity-info">
                                          <svg
                                            role="none"
                                            aria-hidden="true"
                                            className="main-page mn-community-summary__entity-info-icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            data-supported-dps="24x24"
                                            data-test-icon="people-medium"
                                          >
                                            <use
                                              href="#people-medium"
                                              width="24"
                                              height="24"
                                              className="main-page"
                                            ></use>
                                          </svg>
                                          Connection
                                        </div>

                                        <div className="main-page pl3">
                                          {myConnections.length}
                                        </div>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>

                      <main className="main-page scaffold-layout__main">
                        <section className="main-page artdeco-card mn-invitations-preview mb4">
                          <header className="main-page artdeco-card__header mn-invitations-preview__header">
                            <h2 className="main-page flex-1 t-16 t-black t-normal">
                              {pendingConnections.length === 0
                                ? "No Invitation"
                                : "Invitations"}
                            </h2>

                            <a className="main-page ember-view mn-invitations-preview__manage-all artdeco-button artdeco-button--tertiary artdeco-button--muted artdeco-button--2">
                              <span className="main-page artdeco-button__text">
                                Manage
                              </span>
                            </a>
                          </header>

                          <ul className="main-page mn-invitation-list artdeco-list">
                            {pendingConnections &&
                              pendingConnections.map(
                                (pendingConnection, index) => (
                                  <SinglePendingConnection
                                    onSetRefresh={setRefresh}
                                    key={index}
                                    pendingConnection={pendingConnection}
                                  />
                                )
                              )}
                          </ul>
                        </section>
                      </main>
                    </div>
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

export default MyNetwork;
