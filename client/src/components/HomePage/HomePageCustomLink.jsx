import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function HomePageCustomLink({ to }) {
  return (
    <li>
      <NavLink
        to={to}
        className="homepage top-nav-link flex justify-center items-center h-[52px] hover:text-color-text visited:hover:text-color-text hover:no-underline w-[64px] flex-col mx-1 text-color-text-secondary visited:text-color-text-secondary"
      >
        {to === "/people" ? <IconPeople /> : <IconJobs />}
        <span className="homepage top-nav-link__label-text font-sans text-xs leading-regular text-center font-regular">
          {to === "/people" ? "People" : "Jobs"}
        </span>
      </NavLink>
    </li>
  );
}

function IconPeople() {
  return (
    <span
      className="homepage top-nav-link__icon flex h-3 w-3 flex-shrink-0 lazy-loaded"
      aria-hidden="true"
      aria-busy="false"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="20"
        fill="none"
        focusable="false"
        className="homepage lazy-loaded"
        aria-busy="false"
      >
        <path
          d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
  );
}

function IconJobs() {
  return (
    <span
      className="homepage top-nav-link__icon flex h-3 w-3 flex-shrink-0 lazy-loaded"
      aria-hidden="true"
      aria-busy="false"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        fill="none"
        focusable="false"
        className="homepage lazy-loaded"
        aria-busy="false"
      >
        <path
          d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
  );
}
export default HomePageCustomLink;
