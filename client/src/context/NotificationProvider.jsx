/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import ReactDOM from "react-dom";
import SVG from "../components/SVG";

export const NotificationContext = createContext();

let timeoutId;
export default function NotificationProvider({ children }) {
  const [notification, setNotification] = useState("");
  const [classes, setClasses] = useState("");

  const updateNotification = (type, value) => {
    if (timeoutId) clearTimeout(timeoutId);

    switch (type) {
      case "error":
        setClasses("artdeco-toast-item__icon--error");
        break;
      case "success":
        setClasses("artdeco-toast-item__icon--success");
        break;
      default:
        setClasses("artdeco-toast-item__icon--error");
    }
    setNotification(value);

    timeoutId = setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ updateNotification }}>
      {children}
      {notification &&
        ReactDOM.createPortal(
          <section
            id="artdeco-toasts"
            className="main-page artdeco-toasts"
            aria-label="Toast message"
          >
            {/* <header className="main-page artdeco-toasts__header">
              <h2 className="main-page artdeco-toasts__title">
                1 notification total
              </h2>
            </header> */}

            <div className="main-page artdeco-toasts_toasts">
              <div className="main-page artdeco-toast-item artdeco-toast-item--visible ember-view">
                <div className="main-page artdeco-toast-item__content">
                  <li-icon
                    aria-hidden="true"
                    type="success-pebble-icon"
                    class={`main-page artdeco-toast-item__icon ${classes} `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="main-page mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1.25 15L7 13.25l1.41-1.41L10.59 14l4.84-6H18z"></path>
                    </svg>
                  </li-icon>
                  <p
                    className="main-page artdeco-toast-item__message"
                    role="alert"
                  >
                    <span>{notification}</span>
                  </p>
                </div>

                <button className="main-page artdeco-toast-item__dismiss artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view">
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
                    data-test-icon="close-small"
                  >
                    <use
                      href="#close-small"
                      width="16"
                      height="16"
                      className="main-page"
                    ></use>
                  </svg>
                  <span className="main-page artdeco-button__text">
                    Dismiss
                  </span>
                </button>
              </div>
            </div>
          </section>,
          document.getElementById("artdeco-toasts__wormhole")
        )}
    </NotificationContext.Provider>
  );
}
