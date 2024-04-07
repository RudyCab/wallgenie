import React, { useState, useRef } from "react";
import SettingsPopup from "../Components/SettingsPopup/SettingsPopup";
import WallComponent from "../Components/Wall/WallComponent";
import Draggable from "./Draggable";
import "./WallEditorPage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Wall } from "../Structs/Wall";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function WallEditorPage() {
  const [alertDisplayed, setAlertDisplayed] = useState(false);
  const parentRef = useRef(null);

  // for debugging purposess
  const __DISPLAY_SLIDER = false;

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
  const VERTICAL_OFFSET = -60;
  const wall = new Wall(
    { x: x, y: window.innerHeight * 0.25 + VERTICAL_OFFSET },
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

  // back button navigation
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };

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
          <button
            className="back-button"
            disabled={alertDisplayed}
            onClick={handleBackButtonClick}
          >
            <IoIosArrowBack />
          </button>
          <SettingsPopup
            alertDisplayed={alertDisplayed}
            setAlertDisplayed={setAlertDisplayed}
          />
        </div>
        <div style={{ height: "450px" }}>
          <WallComponent wall={wall} />
        </div>
        
        {__DISPLAY_SLIDER && (
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
            />
            <div className="image-container">
              <Draggable
                img="./WallEditorImages/Item1.png"
                alt="Item 1"
                className="image"
                x={0}
              />
              <Draggable
                img="./WallEditorImages/Item2.jpeg"
                alt="Item 2"
                className="image"
                x={150}
              />
              <Draggable
                img="./WallEditorImages/Item3.png"
                alt="Item 3"
                className="image"
                x={250}
              />
              <Draggable
                img="./WallEditorImages/Item4.png"
                alt="Item 4"
                className="image"
                x={350}
              />
              <Draggable
                img="./WallEditorImages/Item5.jpg"
                alt="Item 5"
                className="image"
                x={450}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WallEditorPage;
