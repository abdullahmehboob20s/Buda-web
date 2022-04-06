import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import useMediaQuery from "hooks/useMediaQuery";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll/modules";

function Navbar() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow670px = useMediaQuery("(max-width : 670px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setIsSidebarOpen(false));
  let history = useNavigate();
  const location = useLocation();

  const scrollTarget = (target, options) => scroller.scrollTo(target, options);

  const scrollToPage = async (target, options) => {
    if (location.pathname !== "/") {
      await history("/");
    }
    scrollTarget(target, options);
    setIsSidebarOpen(false);
  };

  return (
    <div className="container-wrapper">
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.left} flex`}>
          <Link to="/" className="pointer">
            <img src={logo} className={`${styles.logo}`} alt="" />
          </Link>
        </div>
        <div className={`${styles.hamburger_wrapper}`}>
          <button
            className={`${styles.hamburger} pointer`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <GiHamburgerMenu size={26} />
          </button>
        </div>

        <div className={`black-screen ${isSidebarOpen ? "show" : ""}`}></div>
        <div
          className={`${styles.links} ${isSidebarOpen ? styles.open : ""}`}
          ref={sidebarRef}
        >
          <button
            className={`${styles.close_icons} w-fit-content pointer`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <GrFormClose size={30} />
          </button>

          <div
            onClick={() => scrollToPage("about", { offset: -100 })}
            className={`${isBellow1000px ? "fs-16px" : "fs-22px"} ${
              isBellow670px ? "black" : "white"
            } pointer`}
          >
            About
          </div>
          <div
            onClick={() => scrollToPage("sell-out", { offset: -100 })}
            className={`${isBellow1000px ? "fs-16px" : "fs-22px"} ${
              isBellow670px ? "black" : "white"
            } pointer`}
          >
            Sell Out
          </div>
          <Link
            to="/whitepaper"
            className={`${isBellow1000px ? "fs-16px" : "fs-22px"} ${
              isBellow670px ? "black" : "white"
            } pointer`}
          >
            Whitepaper
          </Link>
          <div
            onClick={() => scrollToPage("team", { offset: -100 })}
            className={`${isBellow1000px ? "fs-16px" : "fs-22px"} ${
              isBellow670px ? "black" : "white"
            } pointer`}
          >
            Team
          </div>

          <div
            onClick={() => scrollToPage("faqs", { offset: 100 })}
            className={`${isBellow1000px ? "fs-16px" : "fs-22px"} ${
              isBellow670px ? "black" : "white"
            } pointer`}
          >
            FAQS
          </div>
        </div>
        <div className={`${styles.socialLinks}`}>
          <a href="#">
            <FaDiscord size={isBellow1000px ? 28 : 50} color="white" />
          </a>
          <a href="#">
            <FaTwitter size={isBellow1000px ? 24 : 44} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
