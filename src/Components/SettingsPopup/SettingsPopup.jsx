import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import "./SettingsPopup.css";

const SettingsPopup = () => {
  const [alertDisplayed, setAlertDisplayed] = useState(false);

  const Alert = ({ setAlertDisplayed }) => {
    const alertStyle = {
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
      <div className="alert" style={alertStyle}>
        <h1 style={{ fontSize: "xx-large" }}>This is an alert!</h1>
        <button
          onClick={() => {
            setAlertDisplayed(false);
          }}
          style={buttonStyle}
        >
          Close
        </button>
      </div>
    );
  };

  return (
    <>
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
        />
        {alertDisplayed && <Alert setAlertDisplayed={setAlertDisplayed} />}
      </Popup>
    </>
  );
};

export default SettingsPopup;
