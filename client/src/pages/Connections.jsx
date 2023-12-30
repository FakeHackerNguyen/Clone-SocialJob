import "../styles/Connection/48i13z6ygl0xci4e0t0f37dpd.css";
import HeaderMainPage from "../components/MainPage/HeaderMainPage";
import AsideMainPage from "../components/MainPage/AsideMainPage";
import { useAuth } from "../hooks";
import SVG from "../components/SVG";
import { useState } from "react";
import { getConnection } from "../apis/connection";
import { useEffect } from "react";
import SingleConnection from "../components/Network/SingleConnection";
import SearchConnection from "../components/Network/SearchConnection";

function Connections() {
  const [connections, setConnections] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { authInfo } = useAuth();

  const getConnections = async function () {
    const data = await getConnection();
    if (data?.error) return;

    setConnections(data.connections);
  };

  useEffect(() => {
    getConnections();
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
                    <div className="main-page scaffold-layout__row scaffold-layout__content scaffold-layout__content--main-aside scaffold-layout__content--has-aside">
                      <main className="main-page scaffold-layout__main">
                        <div className="main-page self-focused ember-view">
                          <section className="main-page artdeco-card mn-connections mb4">
                            <header className="main-page mn-connections__header">
                              <h1 className="main-page t-18 t-black t-normal">
                                {connections?.length} Connection
                              </h1>
                            </header>

                            <div className="main-page mn-connections__actions-container ph5 pb3">
                              {/* <div className="main-page display-flex align-items-center pt3 pb2 t-14 t-black--light t-normal">
                                <p className="main-page t-14 t-black--light t-normal">
                                  Sort by:
                                </p>
                                <div className="main-page artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view">
                                  <button
                                    aria-expanded="false"
                                    aria-label="Sort by, Recently Added dropdown"
                                    className="main-page artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view t-black--light v-align-top"
                                    type="button"
                                  >
                                    <span className="main-page t-14 t-black--light t-bold pl2 mb1">
                                      Recently added
                                    </span>

                                    <li-icon
                                      aria-hidden="true"
                                      type="caret-filled-down-icon"
                                      class="main-page artdeco-dropdown__trigger-icon"
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
                                        <path
                                          d="M8 11L3 6h10z"
                                          fillRule="evenodd"
                                        ></path>
                                      </svg>
                                    </li-icon>
                                  </button>

                                  <div
                                    aria-hidden="true"
                                    className="main-page artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view"
                                  ></div>
                                </div>
                              </div> */}

                              <div className="main-page display-flex align-items-center relative t-14 t-black--light t-normal">
                                <div className="main-page artdeco-text-input artdeco-text-input--type-search artdeco-text-input--color-default ember-view">
                                  {" "}
                                  <div className="main-page artdeco-text-input--container ember-view">
                                    {" "}
                                    <SearchConnection />
                                  </div>
                                </div>

                                {/* <a className="main-page ember-view mn-connections__search-with-filters link-without-visited-state">
                                  Search with filters
                                </a> */}
                              </div>
                            </div>

                            <hr className="main-page artdeco-divider m0" />

                            <div className="main-page scaffold-finite-scroll scaffold-finite-scroll--infinite">
                              <div className="main-page scaffold-finite-scroll__content">
                                <ul>
                                  {connections &&
                                    connections.map((connection, index) => (
                                      <SingleConnection
                                        key={index}
                                        connection={connection}
                                        onSetRefresh={setRefresh}
                                      />
                                    ))}
                                </ul>
                              </div>
                              {/* <div></div> */}
                            </div>
                          </section>
                        </div>
                      </main>
                      <AsideMainPage />
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

export default Connections;
