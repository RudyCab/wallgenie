import React, { useState, useRef } from "react";
import SettingsPopup from "../Components/SettingsPopup/SettingsPopup";
import SplitPane from "react-split-pane";
import Draggable from './Draggable'
import "./WallEditorPage.css";
import "bootstrap/dist/css/bootstrap.css";
import WallComponent from "../Components/Wall/WallComponent";
import { Wall } from "../Structs/Wall";
import { IoIosArrowBack } from "react-icons/io";

function WallEditorPage() {
  const [alertDisplayed, setAlertDisplayed] = useState(false);
  const [topPaneSize, setTopPaneSize] = useState("65%");
  const parentRef = useRef(null);

  const handleResize = (size) => {
    setTopPaneSize(size);
  };

  // Wall Constants
  let PADDING = 20; // left, right padding
  const MAX_WIDTH = 500;

  const wall_width = Math.min(window.innerWidth - 2 * PADDING, MAX_WIDTH);

  let x = PADDING;
  if (wall_width === MAX_WIDTH) {
    // ensures wall is still vertically aligned
    x = (window.innerWidth - MAX_WIDTH) / 2;
    PADDING = (window.innerWidth - MAX_WIDTH) / 2;
  }

  // Create new `Wall` instance
  const wall = new Wall(
    { x: x, y: window.innerHeight * 0.25 - 120},
    {
      width: wall_width,
      height: (3 / 4) * wall_width,
    },
    {
      color: "lightgray",
      borderColor: "black",
      borderWidth: 2,
      texture: "plain",
      isTextured: false,
    },
    [],
    { PADDING: PADDING, MAX_WIDTH: MAX_WIDTH } // constants
  );

  /* this container should contain the following components:
    x - back button
      - project name
    x - settings button
    x - wall component
      - clear all button
      - save button
  */
  return (
    <div className="wallEditor">
      <div
        className="page-container split-pane-wrapper"
        style={{ pointerEvents: "auto" }}
      >
        <div ref={parentRef} className="top-row" id="toprow">
          <button className="back-button" disabled={alertDisplayed}>
            <IoIosArrowBack />
          </button>
        </div>
        <div style={{height: "450px"}}>
        <WallComponent wall={wall} />
        </div>
        <SettingsPopup
            alertDisplayed={alertDisplayed}
            setAlertDisplayed={setAlertDisplayed}
          />
        {/* SPLIT PAGE STUFF */}
        {/* <div className="split-pane-wrapper">
          <SplitPane
            split="horizontal"
            size={topPaneSize}
            onChange={(size) => handleResize(size)}
          > */}
            {/* <div style={{ background: "#F9F9F9", height: "100%" }}></div> */}
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
                 {/* <div>
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
                </div> */}
              </div>
              <div className="image-container">
                
                <Draggable img="./WallEditorImages/Item1.png" alt="Item 1"
                  className="image" x={0}></Draggable>

                <Draggable img="./WallEditorImages/Item2.jpeg" alt="Item 2"
                  className="image" x={150}></Draggable>

                <Draggable img="./WallEditorImages/Item3.png" alt="Item 3"
                  className="image" x={250}></Draggable>

                <Draggable img="./WallEditorImages/Item4.png" alt="Item 4"
                  className="image" x={350}></Draggable>
               
               <Draggable img="./WallEditorImages/Item5.jpg" alt="Item 5"
                  className="image" x={450}></Draggable>
              </div>
            {/* </div>
          </SplitPane> */}
        </div>
      </div>
    </div>
  );
}

export default WallEditorPage;
