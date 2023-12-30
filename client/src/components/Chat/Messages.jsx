/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { getMessages, sendMessage } from "../../apis/chat";
import SingleMessage from "./SingleMessage";
import { useAuth } from "../../hooks";

import io from "socket.io-client";

const ENDPOINT = "http://localhost:8000";
let socket;

function Messages({ chatId }) {
  const [messages, setMessages] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [socketConnected, setSocketConnected] = useState(false);

  const { authInfo } = useAuth();

  const inputRef = useRef();

  const fetchMessages = async function () {
    const data = await getMessages(chatId);
    if (data?.error) return;

    setMessages(data);
    socket.emit("join-chat", chatId);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    const { error, newMessage } = await sendMessage({
      chatId,
      content: inputRef.current.textContent,
    });

    if (error) return;

    socket.emit("new-message", newMessage);
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", authInfo?.profile?._id);
    socket.on("connected", () => setSocketConnected(true));
  }, []);

  useEffect(() => {
    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId]);

  useEffect(() => {
    socket.on("message-received", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
  });

  return (
    <div className="main-page msg-overlay-conversation-bubble__content-wrapper relative display-flex flex-column">
      <div className="main-page display-flex flex-column flex-grow-1">
        {/* <div></div> */}

        {/* <div>
        <div className="main-page msg-thread-container msg-thread__thread-actions-tray"></div>
      </div> */}

        {true && (
          <div className="main-page msg-s-message-list-container relative display-flex mbA msg-s-message-list-container--column-reversed">
            <div className="main-page msg-s-message-list msg-s-message-list--scroll-buffer full-width scrollable">
              <ul className="main-page msg-s-message-list-content list-style-none full-width mbA">
                <li className="main-page msg-s-message-list__top-of-list"></li>

                <li className="main-page msg-s-message-list__loader hidden">
                  <div className="main-page artdeco-loader artdeco-loader--small ember-view">
                    <span className="main-page artdeco-loader__bars"></span>
                    <span className="main-page artdeco-loader__bars"></span>
                    <span className="main-page artdeco-loader__bars"></span>
                    <span className="main-page artdeco-loader__bars"></span>
                    <span className="main-page artdeco-loader__bars"></span>
                    <span className="main-page artdeco-loader__bars"></span>
                    <span className="main-page artdeco-loader__bars"></span>
                    <span className="main-page artdeco-loader__bars"></span>
                    <span className="main-page artdeco-loader__bars"></span>
                    <span className="main-page artdeco-loader__bars"></span>
                    <span className="main-page artdeco-loader__bars"></span>
                    <span className="main-page artdeco-loader__bars"></span>
                  </div>
                </li>

                {messages &&
                  messages.map((message, index) => (
                    <SingleMessage key={index} message={message} />
                  ))}

                <li className="main-page msg-s-message-list__typing-indicator-container--without-seen-receipt"></li>
              </ul>
            </div>
          </div>
        )}
        {/* msg-form--is-fully-expanded */}
        <form
          onSubmit={handleSubmit}
          className={`main-page ${
            false && "msg-form--is-fully-expanded"
          } msg-form`}
        >
          <div className="main-page msg-form__attachment-drag-and-drop">
            <div className="main-page msg-form__attachment-drag-and-drop-content display-flex flex-column align-items-center justify-center">
              <div className="main-page msg-form__attachment-drag-and-drop-state-illustration"></div>
              <div className="main-page msg-form__attachment-drag-and-drop-text display-flex flex-column align-items-center justify-center">
                <div className="main-page msg-form__attachment-drag-and-drop-state-text t-16 t-bold">
                  Drag your file here.
                </div>
                <div className="main-page msg-form__attachment-drag-and-drop-discoverability-text text-align-center">
                  <div className="main-page t-16 t-bold">Select your file</div>
                  <div className="main-page t-14">
                    Or drag &amp; drop next time
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-page overflow-auto scrollable">
            {/* <figure className="main-page msg-form__attachment-preview">
              <div className="main-page msg-attachment-preview__image-container">
                <img
                  src="blob:https://www.linkedin.com/cffa6714-0900-4c99-8972-8947512474b1"
                  className="main-page msg-attachment-preview__image EntityPhoto-square-2 evi-image ember-view"
                />
              </div>

              <figcaption className="main-page flex-1 overflow-hidden ph2">
                <div className="main-page display-flex text-body-xsmall t-black--light">
                  <h3 className="main-page text-body-xsmall-bold t-black--light truncate">
                    default.png
                  </h3>
                  <span className="main-page msg-attachment-preview__bytesize flex-shrink-zero">
                    101 KB
                  </span>
                </div>
                <p className="main-page text-body-xsmall t-black--light">
                  Attached
                </p>
              </figcaption>

              <button
                className="main-page msg-attachment-preview__remove-attachment"
                type="button"
              >
                <svg
                  role="img"
                  aria-hidden="false"
                  aria-label="Remove attachment default.png"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  data-test-icon="close-small"
                  className="main-page"
                >
                  <use
                    href="#close-small"
                    width="16"
                    height="16"
                    className="main-page"
                  ></use>
                </svg>
              </button>
            </figure> */}

            {/* <figure className="main-page msg-form__attachment-preview msg-attachment-preview--uploading">
              <div className="main-page text-body-xsmall-bold t-white msg-attachment-preview__attachment-type ui-attachment ui-attachment--doc">
                doc
              </div>

              <figcaption className="main-page flex-1 overflow-hidden ph2">
                <div className="main-page display-flex text-body-xsmall t-black--light">
                  <h3 className="main-page text-body-xsmall-bold t-black--light truncate">
                    20110119_NguyenQuocToan_Report.docx
                  </h3>
                  <span className="main-page msg-attachment-preview__bytesize flex-shrink-zero">
                    8 MB
                  </span>
                </div>
                <p className="main-page msg-attachment-preview__status--uploading text-body-xsmall-bold">
                  Uploading…
                </p>
                <progress
                  className="main-page msg-attachment-preview__upload-progress mt1"
                  max="100"
                  value="100"
                ></progress>
              </figcaption>

              <button
                className="main-page msg-attachment-preview__remove-attachment"
                type="button"
              >
                <svg
                  role="img"
                  aria-hidden="false"
                  aria-label="Remove attachment 20110119_NguyenQuocToan_Report.docx"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  data-test-icon="close-small"
                  className="main-page"
                >
                  <use
                    href="#close-small"
                    width="16"
                    height="16"
                    className="main-page"
                  ></use>
                </svg>
              </button>
            </figure> */}
          </div>

          <div className="main-page msg-form__msg-content-container msg-form__message-texteditor relative flex-grow-1 display-flex">
            <div className="main-page msg-form__msg-content-container--scrollable scrollable relative">
              <div className="main-page flex-grow-1 relative">
                <div
                  className="main-page msg-form__contenteditable t-14 t-black--light t-normal flex-grow-1 full-height notranslate"
                  contentEditable="true"
                  role="textbox"
                  aria-multiline="true"
                  aria-label="Write a message…"
                  suppressContentEditableWarning={true}
                  ref={inputRef}
                ></div>

                <div
                  aria-hidden="true"
                  className={`main-page ${
                    false && "msg-form__placeholder"
                  } t-14 t-black--light t-normal`}
                  data-placeholder="Write a message…"
                ></div>
              </div>

              <div className="main-page msg-form__expand-btn-wrapper">
                <button
                  aria-expanded="false"
                  className="main-page msg-form__expand-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                  type="button"
                >
                  {" "}
                  <svg
                    role="none"
                    aria-hidden="true"
                    className="main-page artdeco-button__icon "
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    data-test-icon="chevron-up-small"
                  >
                    <use
                      href={`#chevron-${true && "up"}-small`} // down
                      width="16"
                      height="16"
                      className="main-page"
                    ></use>
                  </svg>
                  <span className="main-page artdeco-button__text">
                    Maximize compose field
                  </span>
                </button>
              </div>
            </div>
          </div>

          <footer className="main-page msg-form__footer flex-shrink-zero ">
            <div className="main-page msg-form__left-actions display-flex">
              <div className="main-page msg-form__upload-attachment inline-block">
                <input name="persist" value="true" type="hidden" />
                <input name="upload_info" type="hidden" />
                <input
                  className="main-page msg-form__attachment-upload-input hidden"
                  accept="image/*"
                  type="file"
                />
                <button
                  className="main-page msg-form__footer-action artdeco-button artdeco-button--tertiary artdeco-button--circle artdeco-button--muted m0 artdeco-button--1"
                  title="Attach an image to your conversation with Dũng Phan Xuân"
                  aria-label="Attach an image to your conversation with Dũng Phan Xuân"
                  type="button"
                >
                  <span className="main-page visually-hidden">
                    Attach an image to your conversation with Dũng Phan Xuân
                  </span>
                  <svg
                    role="none"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    data-test-icon="image-small"
                    className="main-page"
                  >
                    <use
                      href="#image-small"
                      width="16"
                      height="16"
                      className="main-page"
                    ></use>
                  </svg>
                </button>
              </div>

              <div className="main-page msg-form__upload-attachment inline-block">
                <input
                  className="main-page msg-form__attachment-upload-input hidden"
                  accept="image/*,.ai,.psd,.pdf,.doc,.docx,.csv,.zip,.rar,.ppt,.pptx,.pps,.ppsx,.odt,.rtf,.xls,.xlsx,.txt,.pub,.html,.7z,.eml,.mov,.mp4"
                  type="file"
                />
                <button
                  className="main-page msg-form__footer-action artdeco-button artdeco-button--tertiary artdeco-button--circle artdeco-button--muted m0 artdeco-button--1"
                  title="Attach a file to your conversation with Dũng Phan Xuân"
                  aria-label="Attach a file to your conversation with Dũng Phan Xuân"
                  type="button"
                >
                  <span className="main-page visually-hidden">
                    Attach a file to your conversation with Dũng Phan Xuân
                  </span>
                  <svg
                    role="none"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    data-test-icon="attachment-small"
                    className="main-page"
                  >
                    <use
                      href="#attachment-small"
                      width="16"
                      height="16"
                      className="main-page"
                    ></use>
                  </svg>
                </button>
              </div>
            </div>
            <div className="main-page msg-form__right-actions display-flex align-items-center">
              <div>
                <button
                  className="main-page msg-form__send-button artdeco-button artdeco-button--1"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
}

export default Messages;
