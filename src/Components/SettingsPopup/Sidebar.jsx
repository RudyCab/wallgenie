// Sidebar Icons
import { IoShuffle } from "react-icons/io5";
import { LuLassoSelect } from "react-icons/lu";
import { RiImageAddFill } from "react-icons/ri";
// import { FaCamera } from "react-icons/fa";
// import { MdOutlineSaveAlt } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

const Sidebar = ({ alertDisplayed, setAlertDisplayed, setPopupType }) => {
  const types = ["shuffle", "multiselect", "upload", "wall-settings"];
  const icons = [IoShuffle, LuLassoSelect, RiImageAddFill, VscSettings];

  const handleOnClick = (type) => {
    setAlertDisplayed(true);
    setPopupType(types[type]);
  };

  return (
    <>
      <div className="sidebar-container">
        {icons.map((Icon, index) => (
          <button
            key={index}
            className={`sidebar-button ${
              alertDisplayed ? "sidebar-button-disabled" : ""
            }`}
            onClick={() => handleOnClick(index)}
            disabled={alertDisplayed}
          >
            <Icon className="sidebar-icon" />
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
