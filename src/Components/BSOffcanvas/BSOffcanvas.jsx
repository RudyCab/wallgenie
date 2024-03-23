import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./BSOffcanvas.css";

// https://react-icons.github.io/react-icons/
import { IoShuffle } from "react-icons/io5";
import { LuLassoSelect } from "react-icons/lu";
import { RiImageAddFill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";

const BSOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="clear" onClick={handleShow}>
        <GiHamburgerMenu />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <IoShuffle className="offcanvas-icon" /> <span>Shuffle Decor</span>
          <br />
          <LuLassoSelect className="offcanvas-icon" /> <span>Multiselect Decor</span>
          <br />
          <FaCamera className="offcanvas-icon camera" /> <span>Access Camera</span>
          <br />
          <RiImageAddFill className="offcanvas-icon" /> <span>Import New Decor</span>
          <br />
          <MdOutlineSaveAlt className="offcanvas-icon" /> <span>Save Project</span>
          <br />
          <VscSettings className="offcanvas-icon" /> <span>Wall Settings</span>
          <br />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BSOffcanvas;
