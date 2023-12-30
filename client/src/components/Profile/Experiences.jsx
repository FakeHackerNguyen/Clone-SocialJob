/* eslint-disable react/prop-types */
import React from "react";
import { useAuth } from "../../hooks";
import SingleExperience from "./SingleExperience";

function Experiences({ people }) {
  const { authInfo } = useAuth();

  if (!people) people = authInfo.profile;
  if (people && people._id === authInfo.profile?._id) people = authInfo.profile;

  return (
    <React.Fragment>
      {authInfo.profile?.experiences.length !== 0 && (
        <section
          className="main-page artdeco-card relative break-words pb3 mt2"
          data-view-name="profile-card"
        >
          <div
            id="experience"
            className="main-page pv-profile-card__anchor"
          ></div>
          <div className="main-page pvs-header__container">
            <div className="main-page pvs-header__top-container--no-stack">
              <div className="main-page pvs-header__left-container--stack">
                <div className="main-page pvs-header__title-container">
                  <h2 className="main-page pvs-header__title text-heading-large">
                    <span aria-hidden="true">Experience</span>
                    <span className="main-page visually-hidden">
                      Experience
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="main-page pvs-list__outer-container">
            <ul className="main-page pvs-list">
              {people?.experiences.map((experience, index) => (
                <SingleExperience key={index} experience={experience} />
              ))}
            </ul>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

export default Experiences;
