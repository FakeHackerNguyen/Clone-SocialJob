/* eslint-disable react/prop-types */
import { useState } from "react";
import HeaderBoxMessage from "./HeaderBoxMessage";
import Messages from "./Messages";

function BoxMessage({ onHandleCloseBoxMessage, chatId }) {
  const [minimizedWindow, setMinimizedWindow] = useState(false);

  const handleMinimizedWindow = function () {
    setMinimizedWindow(!minimizedWindow);
  };

  return (
    <div
      className={`main-page msg-convo-wrapper msg-overlay-conversation-bubble msg-overlay-conversation-bubble--default-inactive ml4 ${
        minimizedWindow
          ? "msg-overlay-conversation-bubble--is-minimized"
          : "msg-overlay-conversation-bubble--is-active"
      } msg-overlay-conversation-bubble--petite`}
      role="dialog"
      aria-label="Messaging"
      data-view-name="message-overlay-conversation-bubble-item"
    >
      <div className="main-page relative display-flex flex-column flex-grow-1">
        {/* <div></div> */}

        <HeaderBoxMessage
          minimizedWindow={minimizedWindow}
          onHandleMinimizedWindow={handleMinimizedWindow}
          onHandleCloseBoxMessage={onHandleCloseBoxMessage}
        />

        <Messages chatId={chatId} />
      </div>
    </div>
  );
}

export default BoxMessage;
