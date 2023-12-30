import { useState } from "react";

// eslint-disable-next-line react/prop-types
function HomePageInputForm({ type, name, inputInfo, onSetInputInfo }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    onSetInputInfo({ ...inputInfo, [name]: value });
  };

  return (
    <div className="homepage mt-1.5">
      <div className="homepage flex flex-col">
        <label className="homepage input-label mb-1">
          {name === "email" ? "Email" : "Password"}
        </label>
        <div className="homepage text-input flex">
          <input
            className="homepage text-color-text font-sans text-md outline-0 bg-color-transparent grow"
            type={showPassword ? `text` : `${type}`}
            onChange={handleChange}
            name={name}
          />
          {type === "password" && (
            <button
              onClick={handleShowPassword}
              className="homepage font-sans text-md font-bold text-color-action z-10 ml-[12px] hover:cursor-pointer"
              type="button"
            >
              Show
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default HomePageInputForm;
