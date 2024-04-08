import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import "./SettingsPopup.css";

const SettingsPopup = ({
  alertDisplayed,
  setAlertDisplayed,
  setWallOptions,
}) => {
  const [popupType, setPopupType] = useState(""); // shuffle, multiselect, upload, wall-settings

  return (
    <Popup
      trigger={
        <button className="settings-button" disabled={alertDisplayed}>
          <GiHamburgerMenu />
        </button>
      }
      position="bottom"
      closeOnDocumentClick={false}
      contentStyle={{ width: 53 }}
    >
      <Sidebar
        alertDisplayed={alertDisplayed}
        setAlertDisplayed={setAlertDisplayed}
        setPopupType={setPopupType}
      />
      {alertDisplayed && (
        <Alert
          setAlertDisplayed={setAlertDisplayed}
          setWallOptions={setWallOptions}
          popupType={popupType}
        />
      )}
    </Popup>
  );
};

/* 
Keep Alert subcomponents in this file, or their styling gets messed up
*/
const Alert = ({ setAlertDisplayed, setWallOptions, popupType }) => {
  const alertContainerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(254, 253, 249, 0.9)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    padding: "30px 20px",
    width: "75%",
    borderRadius: "20px",
    textAlign: "center",
  };

  const buttonStyle = {
    backgroundColor: "#2A7676",
    color: "white",
    fontSize: "medium",
    marginTop: "7.5px",
    borderRadius: "10px",
  };

  return (
    <div className="alert" style={alertContainerStyle}>
      <AlertContent setWallOptions={setWallOptions} popupType={popupType} />
      <button style={buttonStyle} onClick={() => setAlertDisplayed(false)}>
        Close
      </button>
    </div>
  );
};

const AlertContent = ({ setWallOptions, popupType }) => {
  switch (popupType) {
    case "shuffle":
      break;
    case "multiselect":
      break;
    case "upload":
      break;
    case "wall-settings":
      setWallOptions((prevWallOptions) => ({
        ...prevWallOptions,
        wallColor: "red",
      }));
      break;
    default:
      break;
  }

  return <></>;
};

export default SettingsPopup;
