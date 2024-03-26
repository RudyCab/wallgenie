// Sidebar Icons
import { IoShuffle } from "react-icons/io5";
import { LuLassoSelect } from "react-icons/lu";
import { RiImageAddFill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

const Sidebar = ({ alertDisplayed, setAlertDisplayed }) => {
  const handleOnClick = () => {
    setAlertDisplayed(true);
  };

  const icons = [
    { Icon: IoShuffle, onClick: handleOnClick },
    { Icon: LuLassoSelect, onClick: handleOnClick },
    { Icon: RiImageAddFill, onClick: handleOnClick },
    { Icon: FaCamera, onClick: handleOnClick },
    { Icon: MdOutlineSaveAlt, onClick: handleOnClick },
    { Icon: VscSettings, onClick: handleOnClick },
  ];

  return (
    <>
      <div className="sidebar-container">
        {icons.map(({ Icon, onClick }, index) => (
          <button
            key={index}
            className={`sidebar-button ${
              alertDisplayed ? "sidebar-button-disabled" : ""
            }`}
            onClick={onClick}
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
