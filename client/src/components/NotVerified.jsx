function AuthenticationNotification() {
  return (
    <div id="artdeco-global-alert-container" className="main-page ember-view">
      <style>
        {`
        #artdeco-global-alert-container {
        height: 72px;
        }
        #artdeco-global-alert-container {
        z-index: 100;
        }
        .global-alert-offset,
        .global-alert-offset-top {
        top: 72px !important;
        }
        .global-alert-offset-translate {
        transform: translateY(72px) !important;
        }
        .global-alert-offset-margin {
        margin-top: 72px !important;
        }
        .global-alert-offset,
        .global-alert-offset-top,
        .global-alert-offset-translate,
        .global-alert-offset-margin,
        #artdeco-global-alert-container,
        #artdeco-global-alert-container .dismissed {
            transition-duration: 467.53246753246754ms;
            transition-timing-function: cubic-bezier(0,0,.2,1);
        }
        `}
      </style>

      <div
        className="main-page artdeco-global-alert artdeco-global-alert--yield artdeco-global-alert--email_status ember-view"
        style={{ zIndex: "0" }}
      >
        {" "}
        <section
          className="main-page artdeco-global-alert__body"
          data-test-global-alert-body="0"
        >
          <li-icon
            aria-hidden="true"
            type="yield-pebble-icon"
            className="main-page artdeco-global-alert__icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="none"
              data-supported-dps="24x24"
              fill="currentColor"
              className="main-page mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M14.17 1.9a3.07 3.07 0 00-4.34 0L1.9 9.83a3.07 3.07 0 000 4.34l7.93 7.93a3.07 3.07 0 004.34 0l7.93-7.93a3.07 3.07 0 000-4.34zM11 6h2v8h-2zm1 12.25A1.25 1.25 0 1113.25 17 1.25 1.25 0 0112 18.25z"></path>
            </svg>
          </li-icon>

          <div className="main-page artdeco-global-alert__content t-14">
            <div id="ember153" className="main-page attributed-text ember-view">
              <p>
                We’re almost there! We just need you to confirm your email
                address. Check your ducthanhnguyend@gmail.com account or{" "}
                <a className="main-page ember-view">
                  request a new confirmation link
                </a>
                .{" "}
              </p>
            </div>
          </div>

          <button
            style={{ color: "black" }}
            data-test-global-alert-dismiss="0"
            className="main-page artdeco-global-alert__dismiss artdeco-button artdeco-button--circle artdeco-button--inverse artdeco-button--1 artdeco-button--tertiary ember-view"
          >
            {" "}
            <li-icon
              aria-hidden="true"
              type="cancel-icon"
              className="main-page artdeco-button__icon"
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
                <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
              </svg>
            </li-icon>
            <span className="main-page artdeco-button__text">Dismiss</span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default AuthenticationNotification;
