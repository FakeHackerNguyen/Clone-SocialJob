import { useState } from "react";
import { addExperience } from "../../apis/auth";
import { useAuth, useNotification } from "../../hooks";
import LiveSearchInput from "./LiveSearchInput";

/* eslint-disable react/prop-types */
function ModalAddExperience({ onCloseModalAddExperience }) {
  const [inputInfo, setInputInfo] = useState({
    titleJob: "",
    typeEmployment: "",
    companyId: "",
    typeLocation: "",
    description: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  });
  const [checked, setChecked] = useState(false);

  const handleCheckInput = () => {
    setChecked((prevState) => !prevState);
  };

  const { updateNotification } = useNotification();
  const { isAuth } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputInfo({ ...inputInfo, [name]: value });
  };

  const handleSave = async () => {
    const { error, message } = await addExperience({
      titleJob: inputInfo.titleJob,
      typeEmployment: inputInfo.typeEmployment,
      companyId: inputInfo.companyId,
      typeLocation: inputInfo.typeLocation,
      description: inputInfo.description,
      startMonth: inputInfo.startMonth,
      startYear: inputInfo.startYear,
      endMonth: inputInfo.endMonth,
      endYear: inputInfo.endYear,
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
          onClick={onCloseModalAddExperience}
        >
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
          <h2 id="profile-edit-form-page-header">Add experience</h2>
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
                                Title
                              </label>
                              <input
                                className="main-page artdeco-text-input--input"
                                id="single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-firstName"
                                required=""
                                type="text"
                                name="titleJob"
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
                          <label
                            htmlFor="text-entity-list-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-positions"
                            className="main-page fb-dash-form-element__label"
                          >
                            Employment type{" "}
                          </label>

                          <span className="main-page visually-hidden">
                            Required
                          </span>

                          <select
                            id="text-entity-list-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-positions"
                            aria-required="true"
                            required=""
                            name="typeEmployment"
                            onChange={handleChange}
                            className="main-page"
                          >
                            <option value="Please select">Please select</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Full-time">Part-time</option>
                            <option value="Full-time">Internship</option>
                          </select>
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
                        <LiveSearchInput
                          name="company"
                          label="Company name"
                          type="company"
                          inputInfo={inputInfo}
                          onSetInputInfo={setInputInfo}
                        />

                        {/* <div id="single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-lastName-error"></div> */}
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
                          <label
                            htmlFor="text-entity-list-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-positions"
                            className="main-page fb-dash-form-element__label"
                          >
                            Location type{" "}
                          </label>

                          <span className="main-page visually-hidden">
                            Required
                          </span>

                          <select
                            id="text-entity-list-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-positions"
                            aria-describedby="text-entity-list-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEhYuBEBw-MpZ5VPq1Krhp8Xh7tMXIIqZRs-positions-error"
                            aria-required="true"
                            required=""
                            name="typeLocation"
                            onChange={handleChange}
                            className="main-page"
                          >
                            <option value="Please select">Please select</option>
                            <option value="On-site">On-site</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                          </select>
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
                        <fieldset>
                          <div className="main-page fb-text-selectable__option display-flex">
                            <input
                              className="main-page fb-form-element__checkbox"
                              aria-required="false"
                              type="checkbox"
                              style={{
                                margin: "4px",
                                zIndex: "1000",
                                pointerEvents: "auto",
                              }}
                              onChange={handleCheckInput}
                            />
                            <label className="main-page t-14">
                              I am currently working in this role
                            </label>
                          </div>
                        </fieldset>
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
                          <span className="main-page visually-hidden">
                            Required
                          </span>

                          <div>
                            <fieldset className="main-page fb-date-range__date-select full-width pb6">
                              <legend className="main-page fb-dash-form-element__label fb-dash-form-element__label-title--is-required">
                                Start date{" "}
                              </legend>

                              <span className="main-page visually-hidden">
                                Required
                              </span>

                              <div className="main-page display-flex">
                                <label className="main-page visually-hidden">
                                  Month of Start date
                                </label>
                                <span className="main-page fb-date-dropdown__select pr2">
                                  <select
                                    name="startMonth"
                                    aria-required="false"
                                    className="main-page"
                                    onChange={handleChange}
                                  >
                                    <option value="">Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                  </select>
                                </span>

                                <label className="main-page visually-hidden">
                                  Year of Start date
                                </label>

                                <span className="main-page fb-date-dropdown__select">
                                  <select
                                    aria-required="true"
                                    required=""
                                    name="startYear"
                                    onChange={handleChange}
                                    className="main-page"
                                  >
                                    <option value="">Year</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                    <option value="1963">1963</option>
                                    <option value="1962">1962</option>
                                    <option value="1961">1961</option>
                                    <option value="1960">1960</option>
                                    <option value="1959">1959</option>
                                    <option value="1958">1958</option>
                                    <option value="1957">1957</option>
                                    <option value="1956">1956</option>
                                    <option value="1955">1955</option>
                                    <option value="1954">1954</option>
                                    <option value="1953">1953</option>
                                    <option value="1952">1952</option>
                                    <option value="1951">1951</option>
                                    <option value="1950">1950</option>
                                    <option value="1949">1949</option>
                                    <option value="1948">1948</option>
                                    <option value="1947">1947</option>
                                    <option value="1946">1946</option>
                                    <option value="1945">1945</option>
                                    <option value="1944">1944</option>
                                    <option value="1943">1943</option>
                                    <option value="1942">1942</option>
                                    <option value="1941">1941</option>
                                    <option value="1940">1940</option>
                                    <option value="1939">1939</option>
                                    <option value="1938">1938</option>
                                    <option value="1937">1937</option>
                                    <option value="1936">1936</option>
                                    <option value="1935">1935</option>
                                    <option value="1934">1934</option>
                                    <option value="1933">1933</option>
                                    <option value="1932">1932</option>
                                    <option value="1931">1931</option>
                                    <option value="1930">1930</option>
                                    <option value="1929">1929</option>
                                    <option value="1928">1928</option>
                                    <option value="1927">1927</option>
                                    <option value="1926">1926</option>
                                    <option value="1925">1925</option>
                                    <option value="1924">1924</option>
                                    <option value="1923">1923</option>
                                  </select>
                                </span>
                              </div>
                            </fieldset>

                            <fieldset className="main-page fb-date-range__date-select full-width">
                              <legend className="main-page fb-dash-form-element__label fb-dash-form-element__label-title--is-required">
                                End date{" "}
                              </legend>

                              <span className="main-page visually-hidden">
                                Required
                              </span>

                              <div className="main-page display-flex">
                                <label className="main-page visually-hidden">
                                  Month of End date
                                </label>
                                <span className="main-page fb-date-dropdown__select pr2">
                                  <select
                                    aria-required="false"
                                    disabled={checked}
                                    className="main-page"
                                    name="endMonth"
                                    onChange={handleChange}
                                  >
                                    <option value="">Month</option>

                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                  </select>
                                </span>

                                <label className="main-page visually-hidden">
                                  Year of End date
                                </label>

                                <span className="main-page fb-date-dropdown__select">
                                  <select
                                    disabled={checked}
                                    id="date-range-form-component-profileEditFormElement-POSITION-profilePosition-ACoAAEnFTxQBium4RNlNy3kTTu0RutQrQAcqkYc-1-dateRange-end-date-year-select"
                                    name="endYear"
                                    onChange={handleChange}
                                    className="main-page"
                                  >
                                    <option value="">Year</option>

                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                  </select>
                                </span>
                              </div>
                            </fieldset>
                          </div>

                          <div id="date-range-form-component-profileEditFormElement-POSITION-profilePosition-ACoAAEnFTxQBium4RNlNy3kTTu0RutQrQAcqkYc-1-dateRange-error"></div>
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
                          <div className="main-page artdeco-text-input artdeco-text-input--type-multiline artdeco-text-input--color-default ember-view">
                            <div className="main-page ember-view">
                              <label
                                className="main-page artdeco-text-input--label"
                                style={{ fontSize: "1.4rem" }}
                              >
                                Description
                              </label>
                              <textarea
                                onChange={handleChange}
                                className="main-page fb-multiline-text  artdeco-text-input--input artdeco-text-input__textarea artdeco-text-input__textarea--align-top"
                                rows="3"
                                name="description"
                              ></textarea>
                            </div>
                            <p className="main-page artdeco-text-input--helper-box">
                              <span className="main-page artdeco-text-input--counter">
                                0/2,000
                              </span>
                              <span className="main-page a11y-text">
                                2000 maximum characters allowed.
                              </span>
                            </p>
                          </div>

                          {/* <div id="multiline-text-form-component-profileEditFormElement-POSITION-profilePosition-ACoAAEnFTxQBium4RNlNy3kTTu0RutQrQAcqkYc-1-description-error"></div> */}
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

export default ModalAddExperience;
