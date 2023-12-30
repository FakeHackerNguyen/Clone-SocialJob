/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useState } from "react";
import { applyJob } from "../../apis/job";
import { useAuth, useNotification } from "../../hooks";
import SVG from "../SVG";

function ModalApplyJob({ currentJob, onHandleCloseModal }) {
  const [file, setFile] = useState(null);
  const [userInfo, setUserInfo] = useState({
    phoneCountry: "",
    phone: "",
    email: "",
  });

  console.log(userInfo);

  const fileInput = useRef();
  const { authInfo } = useAuth();
  const { updateNotification } = useNotification();

  const handleChange = function (e) {
    const { name, value } = e.target;

    if (name === "file") {
      const { files } = e.target;
      const file = files[0];

      setFile(file);
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  const handleApplyJob = async function (e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("jobId", currentJob._id);
    formData.append("phone", userInfo.phone);
    formData.append("email", userInfo.email);
    formData.append("phoneCountry", userInfo.phoneCountry);

    const { error, message } = await applyJob(formData);
    if (error) return updateNotification("error", error);

    updateNotification("success", message);
  };

  const handleCloseFile = () => {
    fileInput.current.value = "";
    setFile(null);
  };

  const handleSelectFile = function () {
    fileInput.current.click();
  };

  return (
    <React.Fragment>
      <SVG />
      <div className="main-page artdeco-modal-overlay artdeco-modal-overlay--layer-default artdeco-modal-overlay--is-top-layer  ember-view">
        <div
          role="dialog"
          className="main-page artdeco-modal artdeco-modal--layer-default jobs-easy-apply-modal width-large"
        >
          <span className="main-page a11y-text">Dialog content start.</span>
          <button
            aria-label="Dismiss"
            className="main-page artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view artdeco-modal__dismiss"
            onClick={onHandleCloseModal}
          >
            {" "}
            <svg
              role="none"
              aria-hidden="true"
              className="main-page artdeco-button__icon"
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
            <h2 id="jobs-apply-header">Apply to {currentJob?.company?.name}</h2>
          </div>
          <div className="main-page artdeco-modal__content jobs-easy-apply-modal__content p0 ember-view">
            <div className="main-page jobs-easy-apply-content" role="region">
              <div className="main-page mt3">
                <form className="main-page pt4">
                  <div className="main-page ph5">
                    <div className="main-page pb4">
                      <h3 className="main-page t-16 t-bold">Contact info</h3>
                      <div className="main-page mt3 flex-wrap artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
                        <div
                          className="main-page artdeco-entity-lockup__image artdeco-entity-lockup__image--type-circle ember-view"
                          type="circle"
                        >
                          <img
                            width="56"
                            title="Nguyen Toan"
                            src={authInfo.profile?.avatar?.url}
                            loading="lazy"
                            height="56"
                            className="main-page evi-image lazy-image ghost-person ember-view"
                          />
                        </div>
                        <div className="main-page artdeco-entity-lockup__content ember-view">
                          <div className="main-page artdeco-entity-lockup__title ember-view">
                            {authInfo.profile?.fullName}
                          </div>
                          <div className="main-page artdeco-entity-lockup__subtitle ember-view">
                            {authInfo.profile?.initialExperience
                              ? `${authInfo.profile?.initialExperience?.titleJob} - ${authInfo.profile?.initialExperience?.company?.name}`
                              : `Student at ${authInfo.profile?.initialEducation?.name}`}
                          </div>
                          <div className="main-page artdeco-entity-lockup__metadata ember-view">
                            {`${authInfo.profile?.city}, ${authInfo.profile?.country}`}
                          </div>
                        </div>
                      </div>
                      <div className="main-page jobs-easy-apply-form-section__grouping">
                        <div
                          className="main-page fb-dash-form-element jobs-easy-apply-form-element mt1"
                          style={{ width: "100%" }}
                        >
                          <div>
                            <label
                              htmlFor="text-entity-list-form-component-formElement-urn-li-jobs-applyformcommon-easyApplyFormElement-13775086-5-multipleChoice"
                              className="main-page fb-dash-form-element__label fb-dash-form-element__label-title--is-required"
                              style={{ fontSize: "1.4rem" }}
                            >
                              <span aria-hidden="true">Email</span>{" "}
                              <span className="main-page visually-hidden">
                                Email
                              </span>
                            </label>

                            <span className="main-page visually-hidden">
                              Required
                            </span>

                            <select
                              id="text-entity-list-form-component-formElement-urn-li-jobs-applyformcommon-easyApplyFormElement-13775086-5-multipleChoice"
                              required=""
                              name="email"
                              onChange={handleChange}
                            >
                              <option value="Select an option">
                                Select an option
                              </option>
                              <option value={authInfo.profile?.email}>
                                {authInfo.profile?.email}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="main-page jobs-easy-apply-form-section__grouping">
                        <div
                          className="main-page fb-dash-form-element jobs-easy-apply-form-element mt4"
                          style={{ width: "100%" }}
                        >
                          <div>
                            <label
                              htmlFor="text-entity-list-form-component-formElement-urn-li-jobs-applyformcommon-easyApplyFormElement-13775086-9-phoneNumber-country"
                              className="main-page fb-dash-form-element__label fb-dash-form-element__label-title--is-required"
                              style={{ fontSize: "1.4rem" }}
                            >
                              <span aria-hidden="true">Phone country code</span>{" "}
                              <span className="main-page visually-hidden">
                                Phone country code
                              </span>
                            </label>

                            <span className="main-page visually-hidden">
                              Required
                            </span>

                            <select
                              id="text-entity-list-form-component-formElement-urn-li-jobs-applyformcommon-easyApplyFormElement-13775086-9-phoneNumber-country"
                              required=""
                              name="phoneCountry"
                              onChange={handleChange}
                            >
                              <option value="Select an option">
                                Select an option
                              </option>
                              <option value="Vietnam (+84)">
                                Vietnam (+84)
                              </option>
                              <option value="Afghanistan (+93)">
                                Afghanistan (+93)
                              </option>
                              <option value="Aland Islands (+358)">
                                Aland Islands (+358)
                              </option>
                              <option value="Albania (+355)">
                                Albania (+355)
                              </option>
                              <option value="Algeria (+213)">
                                Algeria (+213)
                              </option>
                              <option value="American Samoa (+1)">
                                American Samoa (+1)
                              </option>
                              <option value="Andorra (+376)">
                                Andorra (+376)
                              </option>
                              <option value="Angola (+244)">
                                Angola (+244)
                              </option>
                              <option value="Anguilla (+1)">
                                Anguilla (+1)
                              </option>
                              <option value="Antarctica (+0)">
                                Antarctica (+0)
                              </option>
                              <option value="Antigua and Barbuda (+1)">
                                Antigua and Barbuda (+1)
                              </option>
                              <option value="Argentina (+54)">
                                Argentina (+54)
                              </option>
                              <option value="Armenia (+374)">
                                Armenia (+374)
                              </option>
                              <option value="Aruba (+297)">Aruba (+297)</option>
                              <option value="Australia (+61)">
                                Australia (+61)
                              </option>
                              <option value="Austria (+43)">
                                Austria (+43)
                              </option>
                              <option value="Azerbaijan (+994)">
                                Azerbaijan (+994)
                              </option>
                              <option value="Bahamas (+1)">Bahamas (+1)</option>
                              <option value="Bahrain (+973)">
                                Bahrain (+973)
                              </option>
                              <option value="Bangladesh (+880)">
                                Bangladesh (+880)
                              </option>
                              <option value="Barbados (+1)">
                                Barbados (+1)
                              </option>
                              <option value="Belarus (+375)">
                                Belarus (+375)
                              </option>
                              <option value="Belgium (+32)">
                                Belgium (+32)
                              </option>
                              <option value="Belize (+501)">
                                Belize (+501)
                              </option>
                              <option value="Benin (+229)">Benin (+229)</option>
                              <option value="Bermuda (+1)">Bermuda (+1)</option>
                              <option value="Bhutan (+975)">
                                Bhutan (+975)
                              </option>
                              <option value="Bolivia (+591)">
                                Bolivia (+591)
                              </option>
                              <option value="Bosnia and Herzegovina (+387)">
                                Bosnia and Herzegovina (+387)
                              </option>
                              <option value="Botswana (+267)">
                                Botswana (+267)
                              </option>
                              <option value="Bouvet Island (+0)">
                                Bouvet Island (+0)
                              </option>
                              <option value="Brazil (+55)">Brazil (+55)</option>
                              <option value="British Indian Ocean Territory (+246)">
                                British Indian Ocean Territory (+246)
                              </option>
                              <option value="Brunei Darussalam (+673)">
                                Brunei Darussalam (+673)
                              </option>
                              <option value="Bulgaria (+359)">
                                Bulgaria (+359)
                              </option>
                              <option value="Burkina Faso (+226)">
                                Burkina Faso (+226)
                              </option>
                              <option value="Burundi (+257)">
                                Burundi (+257)
                              </option>
                              <option value="Cambodia (+855)">
                                Cambodia (+855)
                              </option>
                              <option value="Cameroon (+237)">
                                Cameroon (+237)
                              </option>
                              <option value="Canada (+1)">Canada (+1)</option>
                              <option value="Cape Verde (+238)">
                                Cape Verde (+238)
                              </option>
                              <option value="Caribbean Nations (+0)">
                                Caribbean Nations (+0)
                              </option>
                              <option value="Cayman Islands (+1)">
                                Cayman Islands (+1)
                              </option>
                              <option value="Central African Republic (+236)">
                                Central African Republic (+236)
                              </option>
                              <option value="Chad (+235)">Chad (+235)</option>
                              <option value="Chile (+56)">Chile (+56)</option>
                              <option value="China (+86)">China (+86)</option>
                              <option value="Christmas Island (+61)">
                                Christmas Island (+61)
                              </option>
                              <option value="Cocos (Keeling) Islands (+61)">
                                Cocos (Keeling) Islands (+61)
                              </option>
                              <option value="Colombia (+57)">
                                Colombia (+57)
                              </option>
                              <option value="Comoros (+269)">
                                Comoros (+269)
                              </option>
                              <option value="Congo (+242)">Congo (+242)</option>
                              <option value="Cook Islands (+682)">
                                Cook Islands (+682)
                              </option>
                              <option value="Costa Rica (+506)">
                                Costa Rica (+506)
                              </option>
                              <option value="Cote D’Ivoire (Ivory Coast) (+225)">
                                Cote D’Ivoire (Ivory Coast) (+225)
                              </option>
                              <option value="Croatia (+385)">
                                Croatia (+385)
                              </option>
                              <option value="Cuba (+53)">Cuba (+53)</option>
                              <option value="Cyprus (+357)">
                                Cyprus (+357)
                              </option>
                              <option value="Czech Republic (+420)">
                                Czech Republic (+420)
                              </option>
                              <option value="Democratic Republic of the Congo (+243)">
                                Democratic Republic of the Congo (+243)
                              </option>
                              <option value="Denmark (+45)">
                                Denmark (+45)
                              </option>
                              <option value="Djibouti (+253)">
                                Djibouti (+253)
                              </option>
                              <option value="Dominica (+1)">
                                Dominica (+1)
                              </option>
                              <option value="Dominican Republic (+1)">
                                Dominican Republic (+1)
                              </option>
                              <option value="Ecuador (+593)">
                                Ecuador (+593)
                              </option>
                              <option value="Egypt (+20)">Egypt (+20)</option>
                              <option value="El Salvador (+503)">
                                El Salvador (+503)
                              </option>
                              <option value="Equatorial Guinea (+240)">
                                Equatorial Guinea (+240)
                              </option>
                              <option value="Eritrea (+291)">
                                Eritrea (+291)
                              </option>
                              <option value="Estonia (+372)">
                                Estonia (+372)
                              </option>
                              <option value="Ethiopia (+251)">
                                Ethiopia (+251)
                              </option>
                              <option value="Falkland Islands (Malvinas) (+500)">
                                Falkland Islands (Malvinas) (+500)
                              </option>
                              <option value="Faroe Islands (+298)">
                                Faroe Islands (+298)
                              </option>
                              <option value="Federated States of Micronesia (+691)">
                                Federated States of Micronesia (+691)
                              </option>
                              <option value="Fiji (+679)">Fiji (+679)</option>
                              <option value="Finland (+358)">
                                Finland (+358)
                              </option>
                              <option value="France (+33)">France (+33)</option>
                              <option value="French Guiana (+594)">
                                French Guiana (+594)
                              </option>
                              <option value="French Polynesia (+689)">
                                French Polynesia (+689)
                              </option>
                              <option value="French Southern Territories (+0)">
                                French Southern Territories (+0)
                              </option>
                              <option value="Gabon (+241)">Gabon (+241)</option>
                              <option value="Gambia (+220)">
                                Gambia (+220)
                              </option>
                              <option value="Georgia (+995)">
                                Georgia (+995)
                              </option>
                              <option value="Germany (+49)">
                                Germany (+49)
                              </option>
                              <option value="Ghana (+233)">Ghana (+233)</option>
                              <option value="Gibraltar (+350)">
                                Gibraltar (+350)
                              </option>
                              <option value="Greece (+30)">Greece (+30)</option>
                              <option value="Greenland (+299)">
                                Greenland (+299)
                              </option>
                              <option value="Grenada (+1)">Grenada (+1)</option>
                              <option value="Guadeloupe (+590)">
                                Guadeloupe (+590)
                              </option>
                              <option value="Guam (+1)">Guam (+1)</option>
                              <option value="Guatemala (+502)">
                                Guatemala (+502)
                              </option>
                              <option value="Guernsey (+44)">
                                Guernsey (+44)
                              </option>
                              <option value="Guinea (+224)">
                                Guinea (+224)
                              </option>
                              <option value="Guinea-Bissau (+245)">
                                Guinea-Bissau (+245)
                              </option>
                              <option value="Guyana (+592)">
                                Guyana (+592)
                              </option>
                              <option value="Haiti (+509)">Haiti (+509)</option>
                              <option value="Heard Island and McDonald Islands (+0)">
                                Heard Island and McDonald Islands (+0)
                              </option>
                              <option value="Honduras (+504)">
                                Honduras (+504)
                              </option>
                              <option value="Hong Kong (+852)">
                                Hong Kong (+852)
                              </option>
                              <option value="Hungary (+36)">
                                Hungary (+36)
                              </option>
                              <option value="Iceland (+354)">
                                Iceland (+354)
                              </option>
                              <option value="India (+91)">India (+91)</option>
                              <option value="Indonesia (+62)">
                                Indonesia (+62)
                              </option>
                              <option value="Iran (+98)">Iran (+98)</option>
                              <option value="Iraq (+964)">Iraq (+964)</option>
                              <option value="Ireland (+353)">
                                Ireland (+353)
                              </option>
                              <option value="Isle of Man (+44)">
                                Isle of Man (+44)
                              </option>
                              <option value="Israel (+972)">
                                Israel (+972)
                              </option>
                              <option value="Italy (+39)">Italy (+39)</option>
                              <option value="Jamaica (+1)">Jamaica (+1)</option>
                              <option value="Japan (+81)">Japan (+81)</option>
                              <option value="Jersey (+44)">Jersey (+44)</option>
                              <option value="Jordan (+962)">
                                Jordan (+962)
                              </option>
                              <option value="Kazakhstan (+7)">
                                Kazakhstan (+7)
                              </option>
                              <option value="Kenya (+254)">Kenya (+254)</option>
                              <option value="Kiribati (+686)">
                                Kiribati (+686)
                              </option>
                              <option value="Korea (+82)">Korea (+82)</option>
                              <option value="Korea (North) (+850)">
                                Korea (North) (+850)
                              </option>
                              <option value="Kosovo (+383)">
                                Kosovo (+383)
                              </option>
                              <option value="Kuwait (+965)">
                                Kuwait (+965)
                              </option>
                              <option value="Kyrgyzstan (+996)">
                                Kyrgyzstan (+996)
                              </option>
                              <option value="Laos (+856)">Laos (+856)</option>
                              <option value="Latvia (+371)">
                                Latvia (+371)
                              </option>
                              <option value="Lebanon (+961)">
                                Lebanon (+961)
                              </option>
                              <option value="Lesotho (+266)">
                                Lesotho (+266)
                              </option>
                              <option value="Liberia (+231)">
                                Liberia (+231)
                              </option>
                              <option value="Libya (+218)">Libya (+218)</option>
                              <option value="Liechtenstein (+423)">
                                Liechtenstein (+423)
                              </option>
                              <option value="Lithuania (+370)">
                                Lithuania (+370)
                              </option>
                              <option value="Luxembourg (+352)">
                                Luxembourg (+352)
                              </option>
                              <option value="Macao (+853)">Macao (+853)</option>
                              <option value="Macedonia (+389)">
                                Macedonia (+389)
                              </option>
                              <option value="Madagascar (+261)">
                                Madagascar (+261)
                              </option>
                              <option value="Malawi (+265)">
                                Malawi (+265)
                              </option>
                              <option value="Malaysia (+60)">
                                Malaysia (+60)
                              </option>
                              <option value="Maldives (+960)">
                                Maldives (+960)
                              </option>
                              <option value="Mali (+223)">Mali (+223)</option>
                              <option value="Malta (+356)">Malta (+356)</option>
                              <option value="Marshall Islands (+692)">
                                Marshall Islands (+692)
                              </option>
                              <option value="Martinique (+596)">
                                Martinique (+596)
                              </option>
                              <option value="Mauritania (+222)">
                                Mauritania (+222)
                              </option>
                              <option value="Mauritius (+230)">
                                Mauritius (+230)
                              </option>
                              <option value="Mayotte (+262)">
                                Mayotte (+262)
                              </option>
                              <option value="Mexico (+52)">Mexico (+52)</option>
                              <option value="Moldova (+373)">
                                Moldova (+373)
                              </option>
                              <option value="Monaco (+377)">
                                Monaco (+377)
                              </option>
                              <option value="Mongolia (+976)">
                                Mongolia (+976)
                              </option>
                              <option value="Montenegro (+382)">
                                Montenegro (+382)
                              </option>
                              <option value="Montserrat (+1)">
                                Montserrat (+1)
                              </option>
                              <option value="Morocco (+212)">
                                Morocco (+212)
                              </option>
                              <option value="Mozambique (+258)">
                                Mozambique (+258)
                              </option>
                              <option value="Myanmar (+95)">
                                Myanmar (+95)
                              </option>
                              <option value="Namibia (+264)">
                                Namibia (+264)
                              </option>
                              <option value="Nauru (+674)">Nauru (+674)</option>
                              <option value="Nepal (+977)">Nepal (+977)</option>
                              <option value="Netherlands (+31)">
                                Netherlands (+31)
                              </option>
                              <option value="Netherlands Antilles (+0)">
                                Netherlands Antilles (+0)
                              </option>
                              <option value="New Caledonia (+687)">
                                New Caledonia (+687)
                              </option>
                              <option value="New Zealand (+64)">
                                New Zealand (+64)
                              </option>
                              <option value="Nicaragua (+505)">
                                Nicaragua (+505)
                              </option>
                              <option value="Niger (+227)">Niger (+227)</option>
                              <option value="Nigeria (+234)">
                                Nigeria (+234)
                              </option>
                              <option value="Niue (+683)">Niue (+683)</option>
                              <option value="Norfolk Island (+672)">
                                Norfolk Island (+672)
                              </option>
                              <option value="Northern Mariana Islands (+1)">
                                Northern Mariana Islands (+1)
                              </option>
                              <option value="Norway (+47)">Norway (+47)</option>
                              <option value="Pakistan (+92)">
                                Pakistan (+92)
                              </option>
                              <option value="Palau (+680)">Palau (+680)</option>
                              <option value="Palestinian Territory (+970)">
                                Palestinian Territory (+970)
                              </option>
                              <option value="Panama (+507)">
                                Panama (+507)
                              </option>
                              <option value="Papua New Guinea (+675)">
                                Papua New Guinea (+675)
                              </option>
                              <option value="Paraguay (+595)">
                                Paraguay (+595)
                              </option>
                              <option value="Peru (+51)">Peru (+51)</option>
                              <option value="Philippines (+63)">
                                Philippines (+63)
                              </option>
                              <option value="Pitcairn (+0)">
                                Pitcairn (+0)
                              </option>
                              <option value="Poland (+48)">Poland (+48)</option>
                              <option value="Portugal (+351)">
                                Portugal (+351)
                              </option>
                              <option value="Puerto Rico (+1)">
                                Puerto Rico (+1)
                              </option>
                              <option value="Qatar (+974)">Qatar (+974)</option>
                              <option value="Reunion (+262)">
                                Reunion (+262)
                              </option>
                              <option value="Romania (+40)">
                                Romania (+40)
                              </option>
                              <option value="Russian Federation (+7)">
                                Russian Federation (+7)
                              </option>
                              <option value="Rwanda (+250)">
                                Rwanda (+250)
                              </option>
                              <option value="S. Georgia and S. Sandwich Islands (+0)">
                                S. Georgia and S. Sandwich Islands (+0)
                              </option>
                              <option value="Saint Helena (+290)">
                                Saint Helena (+290)
                              </option>
                              <option value="Saint Kitts and Nevis (+1)">
                                Saint Kitts and Nevis (+1)
                              </option>
                              <option value="Saint Lucia (+1)">
                                Saint Lucia (+1)
                              </option>
                              <option value="Saint Pierre and Miquelon (+508)">
                                Saint Pierre and Miquelon (+508)
                              </option>
                              <option value="Saint Vincent and the Grenadines (+1)">
                                Saint Vincent and the Grenadines (+1)
                              </option>
                              <option value="Samoa (+685)">Samoa (+685)</option>
                              <option value="San Marino (+378)">
                                San Marino (+378)
                              </option>
                              <option value="Sao Tome and Principe (+239)">
                                Sao Tome and Principe (+239)
                              </option>
                              <option value="Saudi Arabia (+966)">
                                Saudi Arabia (+966)
                              </option>
                              <option value="Senegal (+221)">
                                Senegal (+221)
                              </option>
                              <option value="Serbia (+381)">
                                Serbia (+381)
                              </option>
                              <option value="Serbia and Montenegro (+0)">
                                Serbia and Montenegro (+0)
                              </option>
                              <option value="Seychelles (+248)">
                                Seychelles (+248)
                              </option>
                              <option value="Sierra Leone (+232)">
                                Sierra Leone (+232)
                              </option>
                              <option value="Singapore (+65)">
                                Singapore (+65)
                              </option>
                              <option value="Slovak Republic (+421)">
                                Slovak Republic (+421)
                              </option>
                              <option value="Slovenia (+386)">
                                Slovenia (+386)
                              </option>
                              <option value="Solomon Islands (+677)">
                                Solomon Islands (+677)
                              </option>
                              <option value="Somalia (+252)">
                                Somalia (+252)
                              </option>
                              <option value="South Africa (+27)">
                                South Africa (+27)
                              </option>
                              <option value="South Sudan (+211)">
                                South Sudan (+211)
                              </option>
                              <option value="Spain (+34)">Spain (+34)</option>
                              <option value="Sri Lanka (+94)">
                                Sri Lanka (+94)
                              </option>
                              <option value="Sudan (+249)">Sudan (+249)</option>
                              <option value="Sultanate of Oman (+968)">
                                Sultanate of Oman (+968)
                              </option>
                              <option value="Suriname (+597)">
                                Suriname (+597)
                              </option>
                              <option value="Svalbard and Jan Mayen (+47)">
                                Svalbard and Jan Mayen (+47)
                              </option>
                              <option value="Swaziland (+268)">
                                Swaziland (+268)
                              </option>
                              <option value="Sweden (+46)">Sweden (+46)</option>
                              <option value="Switzerland (+41)">
                                Switzerland (+41)
                              </option>
                              <option value="Syria (+963)">Syria (+963)</option>
                              <option value="Taiwan (+886)">
                                Taiwan (+886)
                              </option>
                              <option value="Tajikistan (+992)">
                                Tajikistan (+992)
                              </option>
                              <option value="Tanzania (+255)">
                                Tanzania (+255)
                              </option>
                              <option value="Thailand (+66)">
                                Thailand (+66)
                              </option>
                              <option value="Timor-Leste (+670)">
                                Timor-Leste (+670)
                              </option>
                              <option value="Togo (+228)">Togo (+228)</option>
                              <option value="Tokelau (+690)">
                                Tokelau (+690)
                              </option>
                              <option value="Tonga (+676)">Tonga (+676)</option>
                              <option value="Trinidad and Tobago (+1)">
                                Trinidad and Tobago (+1)
                              </option>
                              <option value="Tunisia (+216)">
                                Tunisia (+216)
                              </option>
                              <option value="Turkey (+90)">Turkey (+90)</option>
                              <option value="Turkmenistan (+993)">
                                Turkmenistan (+993)
                              </option>
                              <option value="Turks and Caicos Islands (+1)">
                                Turks and Caicos Islands (+1)
                              </option>
                              <option value="Tuvalu (+688)">
                                Tuvalu (+688)
                              </option>
                              <option value="Uganda (+256)">
                                Uganda (+256)
                              </option>
                              <option value="Ukraine (+380)">
                                Ukraine (+380)
                              </option>
                              <option value="United Arab Emirates (+971)">
                                United Arab Emirates (+971)
                              </option>
                              <option value="United Kingdom (+44)">
                                United Kingdom (+44)
                              </option>
                              <option value="United States (+1)">
                                United States (+1)
                              </option>
                              <option value="Uruguay (+598)">
                                Uruguay (+598)
                              </option>
                              <option value="Uzbekistan (+998)">
                                Uzbekistan (+998)
                              </option>
                              <option value="Vanuatu (+678)">
                                Vanuatu (+678)
                              </option>
                              <option value="Vatican City State (Holy See) (+39)">
                                Vatican City State (Holy See) (+39)
                              </option>
                              <option value="Venezuela (+58)">
                                Venezuela (+58)
                              </option>
                              <option value="Virgin Islands (British) (+1)">
                                Virgin Islands (British) (+1)
                              </option>
                              <option value="Virgin Islands (U.S.) (+1)">
                                Virgin Islands (U.S.) (+1)
                              </option>
                              <option value="Wallis and Futuna (+681)">
                                Wallis and Futuna (+681)
                              </option>
                              <option value="Western Sahara (+212)">
                                Western Sahara (+212)
                              </option>
                              <option value="Yemen (+967)">Yemen (+967)</option>
                              <option value="Zambia (+260)">
                                Zambia (+260)
                              </option>
                              <option value="Zimbabwe (+263)">
                                Zimbabwe (+263)
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="main-page jobs-easy-apply-form-section__grouping">
                        <div
                          className="main-page fb-dash-form-element jobs-easy-apply-form-element mt4"
                          style={{ width: "100%" }}
                        >
                          <div>
                            <div className="main-page artdeco-text-input artdeco-text-input--type-text artdeco-text-input--color-default artdeco-text-input--state-required ember-view">
                              <div className="main-page artdeco-text-input--container ember-view">
                                <label
                                  htmlFor="single-line-text-form-component-formElement-urn-li-jobs-applyformcommon-easyApplyFormElement-13775086-9-phoneNumber-nationalNumber"
                                  className="main-page artdeco-text-input--label"
                                  style={{ fontSize: "1.4rem" }}
                                >
                                  Phone
                                </label>
                                <input
                                  name="phone"
                                  className="main-page artdeco-text-input--input"
                                  id="single-line-text-form-component-formElement-urn-li-jobs-applyformcommon-easyApplyFormElement-13775086-9-phoneNumber-nationalNumber"
                                  required=""
                                  type="text"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div id="single-line-text-form-component-formElement-urn-li-jobs-applyformcommon-easyApplyFormElement-13775086-9-phoneNumber-nationalNumber-error"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="main-page pb4">
                      <div className="main-page full-width mt1 full-width display-flex flex-column">
                        <span className="main-page t-14">
                          Be sure to include an updated resume
                        </span>
                        {file && (
                          <div className="main-page mt2">
                            <div className="main-page ui-attachment jobs-document-upload-redesign-card__container jobs-document-upload-redesign-card__container--cursor-pointer jobs-document-upload-redesign-card__container--error ui-attachment--pdf">
                              <div className="main-page jobs-document-upload-redesign-card__header truncate">
                                <h3 className="main-page t-12 t-bold jobs-document-upload-redesign-card__file-name t-black--light truncate">
                                  {file.name}
                                </h3>
                                <p className="main-page pt1 t-12 t-black--light">
                                  {`Uploaded on ${new Date().getDate()}/${
                                    new Date().getMonth() + 1
                                  }/${new Date().getFullYear()}`}
                                </p>
                              </div>

                              <div className="main-page display-flex flex-direction-row">
                                <button
                                  disabled=""
                                  className="main-page artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary artdeco-button--disabled ember-view jobs-document-upload-redesign-card__download-button jobs-document-upload-redesign-card__action-button"
                                  type="button"
                                >
                                  <svg
                                    role="none"
                                    aria-hidden="true"
                                    className="artdeco-button__icon "
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    data-supported-dps="24x24"
                                    data-test-icon="download-medium"
                                  >
                                    <use
                                      href="#download-medium"
                                      width="24"
                                      height="24"
                                      className="main-page"
                                    ></use>
                                  </svg>
                                  <span className="main-page artdeco-button__text"></span>
                                </button>

                                <div className="main-page jobs-document-upload-redesign-card__divider"></div>
                                <button
                                  className="main-page artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view jobs-document-upload-redesign-card__clear-button jobs-document-upload-redesign-card__action-button"
                                  type="button"
                                  onClick={handleCloseFile}
                                >
                                  <svg
                                    role="none"
                                    aria-hidden="true"
                                    className="artdeco-button__icon "
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
                              </div>
                            </div>
                            {/* <div className="main-page jobs-document-upload-redesign-card__error">
                              <div
                                className="main-page artdeco-inline-feedback artdeco-inline-feedback--error ember-view"
                                role="alert"
                              >
                                <li-icon
                                  aria-hidden="true"
                                  type="error-pebble-icon"
                                  animate="true"
                                  class="main-page artdeco-inline-feedback__icon"
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
                                    <path d="M10.8 1H5.2L1 5.2v5.6L5.2 15h5.6l4.2-4.2V5.2zM12 9H4V7h8z"></path>
                                  </svg>
                                </li-icon>
                                <span className="main-page artdeco-inline-feedback__message">
                                  <span>
                                    Please upload a smaller file (5 MB or less).
                                    <label className="main-page jobs-document-upload-redesign-card__change-file-link t-bold">
                                      Change file
                                    </label>
                                  </span>
                                </span>
                              </div>

                              <input
                                name="file"
                                className="main-page hidden"
                                id="jobs-document-upload-redesign-card-change-file-input"
                                accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
                                type="file"
                              />
                            </div> */}
                          </div>
                        )}
                        <div className="main-page display-flex flex-row justify-space-between align-items-center">
                          <div className="main-page js-jobs-document-upload__container display-flex flex-wrap">
                            <label
                              className="main-page jobs-document-upload__upload-button artdeco-button artdeco-button--secondary artdeco-button--2 mt2"
                              htmlFor="main-page jobs-document-upload-file-input-upload-resume-urn:li:fsu_jobApplicationFileUploadFormElement:urn:li:jobs_applyformcommon_easyApplyFormElement:(13775086,33,document)"
                            >
                              <span role="button" onClick={handleSelectFile}>
                                Upload resume
                              </span>
                            </label>
                            <input
                              name="file"
                              className="main-page hidden"
                              id="jobs-document-upload-file-input-upload-resume-urn:li:fsu_jobApplicationFileUploadFormElement:urn:li:jobs_applyformcommon_easyApplyFormElement:(13775086,33,document)"
                              accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
                              type="file"
                              onChange={handleChange}
                              ref={fileInput}
                            />
                            <p
                              className="main-page jobs-document-upload__format-text t-12 t-black--light full-width"
                              aria-hidden="true"
                            >
                              DOC, DOCX, PDF (5 MB)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="main-page artdeco-divider mt5 mb2" />
                  </div>

                  <footer role="presentation">
                    {/* <div className="main-page job-details-easy-apply-footer__section">
                    <input
                      id="follow-company-checkbox"
                      className="main-page ember-checkbox ember-view visually-hidden"
                      type="checkbox"
                    />
                    <label
                      htmlFor="follow-company-checkbox"
                      className="main-page t-14 t-black--light"
                    >
                      Follow{" "}
                      <span className="main-page t-bold t-black">
                        Terran Systems
                      </span>{" "}
                      to stay up to date with their page.
                    </label>
                  </div>
                  <div className="main-page jobs-easy-apply-footer__info">
                    <p className="main-page t-12 t-black--light">
                      We will automatically save your answers and resume to
                      pre-fill future applications and improve your experience
                      on LinkedIn. You can control this in your{" "}
                      <a className="main-page link-without-visited-state">
                        Application Settings
                      </a>
                      .{" "}
                      <a
                        rel="noopener noreferrer"
                        className="main-page link-without-visited-state"
                      >
                        Learn more
                      </a>
                    </p>
                  </div> */}
                    <div className="main-page display-flex justify-flex-end ph5 pv4">
                      <button
                        aria-label="Submit application"
                        className="main-page artdeco-button artdeco-button--2 artdeco-button--primary ember-view"
                        type="button"
                        onClick={handleApplyJob}
                      >
                        <span className="main-page artdeco-button__text">
                          Submit application
                        </span>
                      </button>
                    </div>
                  </footer>
                </form>
              </div>
            </div>
          </div>

          <span className="main-page a11y-text">Dialog content end.</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModalApplyJob;
