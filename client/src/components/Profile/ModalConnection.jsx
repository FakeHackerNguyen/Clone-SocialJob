/* eslint-disable react/prop-types */
import { useState } from "react";
import { requestConnection } from "../../apis/connection";
import { useNotification } from "../../hooks";
import SVG from "../SVG";

function ModalConnection({ onCloseModalConnection, user }) {
  const [addNote, setAddNote] = useState(false);
  const [note, setNote] = useState("");

  const { updateNotification } = useNotification();

  const handleAddNote = function () {
    setAddNote((prevState) => !prevState);
  };

  const handleSendRequestConnection = async () => {
    const { error, message } = await requestConnection({
      note: note,
      userId: user._id,
    });

    if (error) updateNotification("error", error);

    updateNotification("success", message);
    onCloseModalConnection();
  };

  const handleChange = (e) => {
    setNote(e.target.value);
  };
  return (
    <div
      aria-hidden="false"
      className="main-page artdeco-modal-overlay artdeco-modal-overlay--layer-default artdeco-modal-overlay--is-top-layer  ember-view"
    >
      <SVG />
      <div
        role="dialog"
        className="main-page artdeco-modal width-medium artdeco-modal--layer-default send-invite"
        aria-labelledby="send-invite-modal"
      >
        <span className="main-page a11y-text">Dialog content start.</span>
        <button
          aria-label="Dismiss"
          className="main-page artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view artdeco-modal__dismiss"
          onClick={onCloseModalConnection}
        >
          {" "}
          <svg
            role="none"
            aria-hidden="true"
            className="main-page artdeco-button__icon "
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            data-test-icon="close-medium"
          >
            <use href="#close-medium" width="24" height="24"></use>
          </svg>
          <span className="main-page artdeco-button__text"></span>
        </button>

        <div className="main-page artdeco-modal__header ember-view">
          <h2 id="send-invite-modal">You can customize this invitation</h2>
        </div>
        <div className="main-page artdeco-modal__content ember-view">
          {addNote && (
            <label
              htmlFor="custom-message"
              style={{ margin: "1.2rem 0 0.3rem", display: "block" }}
            >
              <span className="main-page visually-hidden">
                Please limit personal note to 300 characters.
              </span>
              <p className="main-page t-14 pb2">
                Include a personal message (optional):
              </p>
            </label>
          )}
          {addNote && (
            <div className="main-page relative">
              <textarea
                name="note"
                rows="2"
                placeholder="Ex: We know each other from…"
                maxLength="300"
                id="custom-message"
                className="main-page ember-text-area ember-view connect-button-send-invite__custom-message mb3"
                minLength="1"
                style={{ minHeight: "8rem" }}
                onChange={handleChange}
              ></textarea>
              <div className="main-page display-flex align-items-center">
                <span
                  aria-live="polite"
                  className="main-page t-14 t-black--light flex-1 text-align-right t-black--light"
                >
                  300 / 300
                </span>
              </div>
            </div>
          )}

          {!addNote && (
            <p className="main-page display-flex">
              LinkedIn members are more likely to accept invitations that
              include a personal note.
            </p>
          )}
        </div>
        <div className="main-page artdeco-modal__actionbar ember-view text-align-right">
          <button
            aria-label="Add a note"
            className="main-page artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view mr1"
            onClick={handleAddNote}
          >
            <span className="main-page artdeco-button__text">
              {addNote ? "Cancel" : "Add a note"}
            </span>
          </button>
          <button
            aria-label="Send now"
            className="main-page artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml1"
            disabled={false}
            onClick={handleSendRequestConnection}
          >
            <span className="main-page artdeco-button__text">Send</span>
          </button>
        </div>

        <span className="main-page a11y-text">Dialog content end.</span>
      </div>
    </div>
  );
}

export default ModalConnection;
