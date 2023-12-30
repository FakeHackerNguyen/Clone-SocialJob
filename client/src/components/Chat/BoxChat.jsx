/* eslint-disable react/prop-types */
import { useState } from "react";
import Chats from "./Chats";
import HeaderBoxChat from "./HeaderBoxChat";
import SearchChat from "./SearchChat";

function BoxChat({ onHandleClickChat, onHandleOpenBoxMessage }) {
  const [minimizedWindow, setMinimizedWindow] = useState(true);

  const handleMinimizedWindow = function () {
    setMinimizedWindow(!minimizedWindow);
  };

  return (
    <div
      className={`main-page msg-overlay-list-bubble ${
        minimizedWindow && "msg-overlay-list-bubble--is-minimized"
      } ml4`}
    >
      <HeaderBoxChat
        minimizedWindow={minimizedWindow}
        onHandleMinimizedWindow={handleMinimizedWindow}
      />

      <SearchChat />

      <Chats
        onHandleClickChat={onHandleClickChat}
        onHandleOpenBoxMessage={onHandleOpenBoxMessage}
      />
    </div>
  );
}

export default BoxChat;
