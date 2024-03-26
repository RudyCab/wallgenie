import React, { useState } from "react";
import SettingsPopup from "../Components/SettingsPopup/SettingsPopup";
import SplitPane from "react-split-pane";
import "./WallEditorPage.css";
import "bootstrap/dist/css/bootstrap.css";

function WallEditorPage() {
  const [topPaneSize, setTopPaneSize] = useState("65%");

  const handleResize = (size) => {
    setTopPaneSize(size);
  };

  return (
    <div>
      <div className="split-pane-wrapper" style={{ pointerEvents: "auto" }}>
        <h1>Wall Editor Page</h1>
        <SettingsPopup />

        <div className="split-pane-wrapper">
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
        </div>
      </div>
    </div>
  );
}

export default WallEditorPage;
