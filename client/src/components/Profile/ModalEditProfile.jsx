import { useState } from "react";
import { editProfile } from "../../apis/auth";
import { useAuth, useNotification } from "../../hooks";
import SearchInputForCountryCity from "./SearchInputForCountryCity";

/* eslint-disable react/prop-types */
function ModalEditProfile({
  onCloseModalEdit,
  onOpenModalAddEducation,
  onOpenModalAddExperience,
}) {
  const { authInfo, isAuth } = useAuth();
  const [inputInfo, setInputInfo] = useState(authInfo?.profile);

  console.log(inputInfo);

  const { updateNotification } = useNotification();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputInfo({ ...inputInfo, [name]: value });
  };

  const handleChangeOptions = (e) => {
    const { name } = e.target;
    const selectedIndex = e.target.options.selectedIndex;
    const _id = e.target.options[selectedIndex].getAttribute("data-key");

    if (name === "experiences")
      setInputInfo({ ...inputInfo, currentExperience: _id });
    else if (name === "educations")
      setInputInfo({ ...inputInfo, currentEducation: _id });
  };

  const handleSave = async () => {
    const { error, message } = await editProfile({
      firstName: inputInfo?.firstName,
      lastName: inputInfo?.lastName,
      city: inputInfo?.city,
      country: inputInfo?.country,
      currentEducation: inputInfo?.currentEducation,
      currentExperience: inputInfo?.currentExperience,
    });
    if (error) return updateNotification("error", error);

    updateNotification("success", message);
    isAuth();
  };

  return (
    <div className="main-page artdeco-modal-overlay artdeco-modal-overlay--layer-default artdeco-modal-overlay--is-top-layer  ember-view">
      <div
        role="dialog"
        className="main-page artdeco-modal artdeco-modal--layer-default pe-edit-form-page__modal pe-edit-form-page__modal--large width-large"
      >
        <span className="main-page a11y-text">Dialog content start.</span>
        <button
          aria-label="Dismiss"
          className="main-page artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view artdeco-modal__dismiss"
          onClick={onCloseModalEdit}
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
            <use
              href="#close-medium"
              width="24"
              height="24"
              className="main-page"
            ></use>
          </svg>
          <span className="main-page artdeco-button__text"></span>
        </button>
        <div className="main-page artdeco-modal__header ember-view">
          <h2 id="profile-edit-form-page-header">Edit intro</h2>
        </div>
        <div
          id="profile-edit-form-page-content-wrapper"
          className="main-page pe-edit-form-page__content-wrapper"
        >
          <div
            id="profile-edit-form-page-content"
            className="main-page artdeco-modal__content pe-edit-form-page__content  ember-view"
          >
            <section className="main-page pe-profile-top-card-form__basic-info">
              <p className="main-page t-12 t-black--light ph5 pt2">
                * Indicates required
              </p>
              <div className="main-page pb4 ph5">
                <div className="main-page pt5">
                  <div className="main-page fb-dash-form-element-group">
                    <div className="main-page fb-dash-form-element-group-elements fb-dash-form-element-group-elements--horizontal">
                      <div
                        className="main-page fb-dash-form-element"
                        style={{ width: "100%" }}
                      >
                        <div>
                          <div className="main-page artdeco-text-input artdeco-text-input--type-text artdeco-text-input--color-default artdeco-text-input--state-required ember-view">
                            {" "}
                            <div className="main-page artdeco-text-input--container ember-view">
                              {" "}
                              <label
                                htmlFor="single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-firstName"
                                className="main-page artdeco-text-input--label"
                                style={{ fontSize: "1.4rem" }}
                              >
                                First name
                              </label>
                              <input
                                className="main-page artdeco-text-input--input"
                                id="single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-firstName"
                                required=""
                                aria-describedby="single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-firstName-error"
                                type="text"
                                name="firstName"
                                value={inputInfo?.firstName}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div id="single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-firstName-error"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-page fb-dash-form-element-group">
                    <div className="main-page fb-dash-form-element-group-elements fb-dash-form-element-group-elements--horizontal">
                      <div
                        className="main-page fb-dash-form-element"
                        style={{ width: "100%" }}
                      >
                        <div>
                          <div className="main-page artdeco-text-input artdeco-text-input--type-text artdeco-text-input--color-default artdeco-text-input--state-required ember-view">
                            {" "}
                            <div className="main-page artdeco-text-input--container ember-view">
                              {" "}
                              <label
                                htmlFor="main-page single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-lastName"
                                className="main-page artdeco-text-input--label"
                                style={{ fontSize: "1.4rem" }}
                              >
                                Last name
                              </label>
                              <input
                                className="main-page artdeco-text-input--input"
                                id="single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-lastName"
                                required=""
                                type="text"
                                name="lastName"
                                value={inputInfo?.lastName}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          {/* <div id="single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-lastName-error"></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-page pt6">
                  <h4 className="main-page text-heading-large mb1">
                    Current position
                  </h4>
                  <div className="main-page fb-dash-form-element-group">
                    <div className="main-page fb-dash-form-element-group-elements fb-dash-form-element-group-elements--horizontal">
                      <div
                        className="main-page fb-dash-form-element"
                        style={{ width: "100%" }}
                      >
                        {inputInfo?.experiences?.length !== 0 && (
                          <div>
                            <label
                              htmlFor="text-entity-list-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-positions"
                              className="main-page fb-dash-form-element__label fb-dash-form-element__label-title--is-required"
                            >
                              Position{" "}
                            </label>

                            <span className="main-page visually-hidden">
                              Required
                            </span>

                            <select
                              aria-required="true"
                              required=""
                              onChange={handleChangeOptions}
                              name="experiences"
                              className="main-page"
                            >
                              <option value="Please select">
                                Please select
                              </option>

                              {inputInfo.experiences.map((ex) => (
                                <option
                                  key={ex._id}
                                  data-key={ex._id}
                                  value={`${ex.titleJob} at ${ex.company.name}`}
                                  selected={
                                    ex._id === inputInfo.initialExperience._id
                                  }
                                >
                                  {`${ex.titleJob} at ${ex.company.name}`}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    </div>
                    <a
                      onClick={onOpenModalAddExperience}
                      className="main-page app-aware-link fb-navigation-button artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--2 artdeco-button--default mt4"
                    >
                      <svg
                        role="none"
                        aria-hidden="true"
                        className="main-page artdeco-button__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        data-test-icon="add-small"
                      >
                        <use
                          href="#add-small"
                          width="16"
                          height="16"
                          className="main-page"
                        ></use>
                      </svg>

                      <span className="main-page fb-navigation-button__text artdeco-button__text">
                        Add new position
                      </span>
                    </a>
                  </div>
                </div>
                <div className="main-page pt6">
                  <h4 className="main-page text-heading-large mb1">
                    Education
                  </h4>
                  <div className="main-page fb-dash-form-element-group">
                    <div className="main-page fb-dash-form-element-group-elements fb-dash-form-element-group-elements--horizontal">
                      <div
                        className="main-page fb-dash-form-element"
                        style={{ width: "100%" }}
                      >
                        {inputInfo?.educations?.length !== 0 && (
                          <div>
                            <label
                              htmlFor="text-entity-list-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-positions"
                              className="main-page fb-dash-form-element__label fb-dash-form-element__label-title--is-required"
                            >
                              Education{" "}
                            </label>

                            <span className="main-page visually-hidden">
                              Required
                            </span>

                            <select
                              id="text-entity-list-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-positions"
                              aria-required="true"
                              required=""
                              name="educations"
                              onChange={handleChangeOptions}
                              className="main-page"
                            >
                              <option value="Please select">
                                Please select
                              </option>
                              {inputInfo.educations.map((e) => (
                                <option
                                  key={e._id}
                                  data-key={e._id}
                                  value={`Student at ${e.university.name}`}
                                  selected={
                                    e._id === inputInfo.initialEducation._id
                                  }
                                >
                                  {`Student at ${e.university.name}`}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    </div>
                    <a
                      onClick={onOpenModalAddEducation}
                      className="main-page app-aware-link  fb-navigation-button artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--2 artdeco-button--default "
                    >
                      <svg
                        role="none"
                        aria-hidden="true"
                        className="main-page artdeco-button__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        data-test-icon="add-small"
                      >
                        <use
                          href="#add-small"
                          width="16"
                          height="16"
                          className="main-page"
                        ></use>
                      </svg>

                      <span className="main-page fb-navigation-button__text artdeco-button__text">
                        Add new education
                      </span>
                    </a>
                  </div>
                </div>
                <div className="main-page pt6">
                  <h4 className="main-page text-heading-large mb1">Location</h4>
                  <div className="main-page fb-dash-form-element-group">
                    <div className="main-page fb-dash-form-element-group-elements fb-dash-form-element-group-elements--horizontal">
                      <div
                        className="main-page fb-dash-form-element"
                        style={{ width: "100%" }}
                      >
                        <div>
                          <SearchInputForCountryCity
                            label="Country/Region"
                            name="country"
                            inputInfo={inputInfo}
                            onSetInputInfo={setInputInfo}
                          />
                          <SearchInputForCountryCity
                            label="City"
                            name="city"
                            classes="pt6"
                            inputInfo={inputInfo}
                            onSetInputInfo={setInputInfo}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="main-page artdeco-modal__actionbar display-flex justify-space-between flex-row-reverse pv4 ember-view">
          <button
            className="main-page artdeco-button artdeco-button--2 artdeco-button--primary ember-view"
            type="button"
            onClick={handleSave}
          >
            <span className="main-page artdeco-button__text">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalEditProfile;
