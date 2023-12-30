import { useChat } from "../../hooks";
import SingleChat from "./SingleChat";

/* eslint-disable react/prop-types */
function Chats({ onHandleClickChat, onHandleOpenBoxMessage }) {
  // const [chats, setChats] = useState([]);

  // const fetchChats = async function () {
  //   const data = await getChats();
  //   setChats(data);
  // };

  // useEffect(() => {
  //   fetchChats();
  // }, []);

  const { chats } = useChat();

  return (
    <section className="main-page scrollable msg-overlay-list-bubble__content msg-overlay-list-bubble__content--scrollable">
      {/* <div></div> */}
      <div className="main-page msg-overlay-list-bubble__default-conversation-container">
        {/* <span className="main-page visually-hidden">
          Attention screen reader users, messaging items continuously update.
          Please use the tab and shift + tab keys instead of your up and down
          arrow keys to navigate between messaging items.
        </span> */}

        <div className="main-page msg-overlay-list-bubble__conversations-list">
          {chats &&
            chats.map((chat, index) => (
              <SingleChat
                key={index}
                chat={chat}
                onHandleClickChat={onHandleClickChat}
                onHandleOpenBoxMessage={onHandleOpenBoxMessage}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Chats;
