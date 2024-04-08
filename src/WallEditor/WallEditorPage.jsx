import React, { useState, useRef } from "react";
import SettingsPopup from "../Components/SettingsPopup/SettingsPopup";
import WallComponent from "../Components/Wall/WallComponent";
import ProjectTitle from "../Components/ProjectTitle/ProjectTitle";
import Draggable from "./Draggable";
import "./WallEditorPage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Wall } from "../Structs/Wall";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaCircle } from "react-icons/fa";
import Colors from "./Colors";

function WallEditorPage() {
  const [alertDisplayed, setAlertDisplayed] = useState(false);
  const parentRef = useRef(null);

  // back button navigation
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  // for debugging purposess
  const __DISPLAY_SLIDER = false;

  // Wall Constants
  let PADDING = 15; // left, right padding
  const MAX_WIDTH = 500;

  const wall_width = Math.min(window.innerWidth - 2 * PADDING, MAX_WIDTH);

  let x = PADDING; // assume phone screen, therefore place wall x-val @ 20px
  if (wall_width === MAX_WIDTH) {
    // laptop screen, ensures wall is still vertically aligned
    x = (window.innerWidth - MAX_WIDTH) / 2;
    PADDING = (window.innerWidth - MAX_WIDTH) / 2;
  }

  /*
  Create new `Wall` instance
  */
  const VERTICAL_OFFSET = wall_width !== MAX_WIDTH ? -60 : -15; // adjust offset based on if user's on phone vs laptop
  const wall = new Wall(
    { x: x, y: window.innerHeight * 0.25 + VERTICAL_OFFSET },
    {
      width: wall_width,
      height: (3 / 4) * wall_width,
    },
    {
      borderColor: "black",
      borderWidth: 2,
    },
    [],
    { PADDING: PADDING, MAX_WIDTH: MAX_WIDTH } // constants
  );

  const [wallColor, setWallColor] = useState("lightgrey");
  const [wallTexture, setWallTexture] = useState("plain");
  const [isTextured, setIsTextured] = useState(false);

  const ColorDropdownItem = ({ color }) => {
    return (
      <Dropdown.Item
        as="button"
        onClick={() => setWallColor(color)}
        style={{ backgroundColor: color }}
      >
        <FaCircle style={{ color }} />
      </Dropdown.Item>
    );
  };

  return (
    <div className="wallEditor">
      <div
        className="page-container split-pane-wrapper"
        style={{ pointerEvents: "auto" }}
      >
        <div ref={parentRef} className="top-row">
          <button
            className="back-button"
            disabled={alertDisplayed}
            onClick={handleBackButtonClick}
          >
            <IoIosArrowBack />
          </button>
          <ProjectTitle alertDisplayed={alertDisplayed} />
          <SettingsPopup
            alertDisplayed={alertDisplayed}
            setAlertDisplayed={setAlertDisplayed}
          />
        </div>
        <div style={{ height: "450px" }}>
          <WallComponent wall={wall} wallColor={wallColor} />
        </div>

        {/* WALL COLOR DROPDOWN */}
        <div className="dropdown-container">
          <DropdownButton drop="down-centered" title="Wall Color" variant="n/a">
            <div className="dropdown-grid">
              <ColorDropdownItem color={Colors.RED} />
              <ColorDropdownItem color={Colors.ORANGE} />
              <ColorDropdownItem color={Colors.YELLOW} />
              <ColorDropdownItem color={Colors.GREEN} />
              <ColorDropdownItem color={Colors.BLUE} />
              <ColorDropdownItem color={Colors.PURPLE} />
              <ColorDropdownItem color={Colors.WHITE} />
              <ColorDropdownItem color={Colors.LIGHTGRAY} />
              <ColorDropdownItem color={Colors.GRAY} />
              <ColorDropdownItem color={Colors.TAN} />
              <ColorDropdownItem color={Colors.BROWN} />
              <ColorDropdownItem color={Colors.BLACK} />
            </div>
          </DropdownButton>
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
