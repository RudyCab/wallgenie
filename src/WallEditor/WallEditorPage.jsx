import React, { useState } from "react";
import SettingsPopup from "../Components/SettingsPopup/SettingsPopup";
import SplitPane from "react-split-pane";
import "./WallEditorPage.css";
import "bootstrap/dist/css/bootstrap.css";
import WallComponent from "../Components/Wall/WallComponent";
import { Wall } from "../Structs/Wall";
import { IoIosArrowBack } from "react-icons/io";

function WallEditorPage() {
  const [alertDisplayed, setAlertDisplayed] = useState(false);

  const [topPaneSize, setTopPaneSize] = useState("65%");

  const handleResize = (size) => {
    setTopPaneSize(size);
  };

  const wall = new Wall(
    1,
    { x: 0, y: window.innerHeight * 0.25 },
    { width: window.innerWidth, height: (2 / 3) * window.innerWidth },
    { color: "lightgray", texture: "plain", isTextured: false },
    []
  );

  return (
    <div>
      <div className="split-pane-wrapper" style={{ pointerEvents: "auto" }}>
        {/* this container should contain the following components:
            x - back button
              - project name
            x - settings button
            x - wall component
              - clear all button
              - save button
          */}
        <div>
          <button className="back-button" disabled={alertDisplayed}>
            <IoIosArrowBack />
          </button>
          <SettingsPopup
            alertDisplayed={alertDisplayed}
            setAlertDisplayed={setAlertDisplayed}
          />
        </div>
        <WallComponent wall={wall} />

        {/* <div className="split-pane-wrapper">
          <SplitPane
            split="horizontal"
            size={topPaneSize}
            onChange={(size) => handleResize(size)}
          >
            <div style={{ background: "#F9F9F9", height: "100%" }}></div>
            <div
              style={{
                background: "#215F5F",
                height: "100%",
                overflowY: "auto",
              }}
            >
              <div
                class="row"
                style={{
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <div class="col-8">
                  <div
                    className="left"
                    style={{
                      fontSize: "20px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <p>Wall Decor</p>
                  </div>
                </div>
                <div class="col-4">
                  <button className="rounded" style={{ float: "right" }}>
                    Select
                  </button>
                </div>
              </div>
              <div className="image-container">
                <img
                  src={require("../WallEditorImages/Item1.png")}
                  alt="Item 1"
                  className="image"
                />
                <img
                  src={require("../WallEditorImages/Item2.jpeg")}
                  alt="Item 2"
                  className="image"
                />
                <img
                  src={require("../WallEditorImages/Item3.png")}
                  alt="Item 3"
                  className="image"
                />
                <img
                  src={require("../WallEditorImages/Item4.png")}
                  alt="Item 4"
                  className="image"
                />
                <img
                  src={require("../WallEditorImages/Item5.jpg")}
                  alt="Item 5"
                  className="image"
                />
              </div>
            </div>
          </SplitPane>
        </div> */}
      </div>
    </div>
  );
}

export default WallEditorPage;
