import React from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaDiscord, FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <div className="container-wrapper">
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.left}`}>
          <img src={logo} className={`${styles.logo}`} alt="" />
        </div>
        <div className={`${styles.navbarRight}`}>
          <div className={`${styles.links}`}>
            <Link to="/" className={`fs-22px white`}>
              About
            </Link>
            <Link to="/" className={`fs-22px white`}>
              Sell Out
            </Link>
            <Link to="/" className={`fs-22px white`}>
              Whitepaper
            </Link>
            <Link to="/" className={`fs-22px white`}>
              Team
            </Link>
            <Link to="/" className={`fs-22px white`}>
              FAQS
            </Link>
          </div>
          <div className={`${styles.socialLinks}`}>
            <a href="#">
              <FaDiscord size={50} color="white" />
            </a>
            <a href="#">
              <FaTwitter size={44} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
