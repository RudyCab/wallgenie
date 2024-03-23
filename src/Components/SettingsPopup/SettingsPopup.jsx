import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./SettingsPopup.css";
import PopupButtonContainer from "./PopupButtonContainer";
import { GiHamburgerMenu } from "react-icons/gi";

const SettingsPopup = () => {
  const POPUP_WINDOW_SIZE = 53;

  return (
    <>
      <Popup
        trigger={
          <button className="toggle-button">
            <GiHamburgerMenu />
          </button>
        }
        position="bottom"
        contentStyle={{ width: POPUP_WINDOW_SIZE }}
      >
        <PopupButtonContainer />
      </Popup>
    </>
  );
};

export default SettingsPopup;
