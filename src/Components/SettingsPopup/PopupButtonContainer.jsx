import React, { useState } from "react";

// react icons
import { IoShuffle } from "react-icons/io5";
import { LuLassoSelect } from "react-icons/lu";
import { RiImageAddFill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

const PopupButtonContainer = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleOnClick = () => {};

  const handleWallSettingsClick = () => {
    setShowAlert(true);
  };

  const icons = [
    { Icon: IoShuffle, onClick: handleOnClick },
    { Icon: LuLassoSelect, onClick: handleOnClick },
    { Icon: RiImageAddFill, onClick: handleOnClick },
    { Icon: FaCamera, onClick: handleOnClick },
    { Icon: MdOutlineSaveAlt, onClick: handleOnClick },
    { Icon: VscSettings, onClick: handleWallSettingsClick },
  ];

//   const Alert = () => {
//     return (
//       <div className="alert">
//         <p>Icon clicked!</p>
//         <button onClick={() => setShowAlert(false)}>Close</button>
//       </div>
//     );
//   };

  return (
    <>
      <div className="popup-button-container">
        {icons.map(({ Icon, onClick }, index) => (
          <button key={index} className="popup-button" onClick={onClick}>
            <Icon className="icon" />
          </button>
        ))}
      </div>
      {/* {showAlert && <Alert />} */}
    </>
  );
};

export default PopupButtonContainer;
