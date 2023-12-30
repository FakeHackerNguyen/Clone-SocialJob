import ReactDOM from "react-dom";
import "../styles/MainPage/2whlkg0dq4i86ps7e7cel7fs7.css";
import "../styles/MainPage/975u9yfcck32dq610a9cdv285.css";
import "../styles/MainPage/7huaixm1d3hj4yne9fvuz8fpn.css";
import "../styles/MainPage/5sz08kz0t2ywcxn2337wraun3.css";
import "../styles/MainPage/7go4gjhpokuv1r9rsjrxqr23d.css";
import "../styles/MainPage/5u7ee6wsrvwj6gns6esmqpol.css";
import "../styles/MainPage/cynzgdguygdkabrx69qj5ma6z.css";
import "../styles/MainPage/4gi53e3oiq7eo4pbdvdn6yu7l.css";
import "../styles/MainPage/4yhr1i6t2irln8esrab14trxv.css";
import "../styles/MainPage/1ni5n9rmq9sqhp71rur77sf5k.css";
import "../styles/MainPage/27aoxwmkt4qetsrlq9nx74rxn.css";
import "../styles/MainPage/1ge8k5gbadet4gbiymaz5mqk1.css";
import "../styles/MainPage/1ii8h9aohfxjzyfj9a0d7fpb4.css";

import React from "react";
import NotVerified from "../components/NotVerified";
import SVG from "../components/SVG";
import HeaderMainPage from "../components/MainPage/HeaderMainPage";
import ContentMainPage from "../components/MainPage/ContentMainPage";
import BoxChat from "../components/Chat/BoxChat";
import BoxMessage from "../components/Chat/BoxMessage";
import { useState } from "react";
import ModalPersonalPost from "../components/PersonalPost/ModalPersonalPost";

function MainPage() {
  const [closeBoxMessage, setCloseBoxMessage] = useState(true);
  const [openModalPost, setOpenModalPost] = useState(false);
  const [getAgainPost, setGetAgainPost] = useState(false);
  const [chatId, setChatId] = useState();

  const handleCloseBoxMessage = function () {
    setCloseBoxMessage(true);
  };

  const handleOpenModalPost = function () {
    setOpenModalPost(true);
  };

  const handleCloseModalPost = function () {
    setOpenModalPost(false);
  };

  const handleClickChat = function (chatId) {
    setChatId(chatId);
    setCloseBoxMessage(false);
  };

  return (
    <React.Fragment>
      <SVG />
      {false && <NotVerified />}
      <div
        className={`main-page application-outlet ${
          false && "alert-authentication"
        }`}
      >
        {openModalPost &&
          ReactDOM.createPortal(
            <ModalPersonalPost
              onCloseModalPost={handleCloseModalPost}
              onSetAgainPost={setGetAgainPost}
            />,
            document.getElementById("artdeco-modal-outlet")
          )}
        <HeaderMainPage />

        <ContentMainPage
          onOpenModalPost={handleOpenModalPost}
          getAgainPost={getAgainPost}
        />

        <div className="main-page application-outlet__overlay-container">
          <aside
            id="main-page msg-overlay"
            className="main-page msg-overlay-container msg-overlay-container-reflow"
          >
            <BoxChat onHandleClickChat={handleClickChat} />
            {!closeBoxMessage && (
              <BoxMessage
                onHandleCloseBoxMessage={handleCloseBoxMessage}
                chatId={chatId}
              />
            )}
          </aside>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainPage;
