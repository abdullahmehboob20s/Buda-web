import React from "react";
import styles from "./Footer.module.css";
import {
  FaDiscord,
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import useMediaQuery from "hooks/useMediaQuery";

function Footer() {
  const isBellow700px = useMediaQuery("(max-width : 700px)");

  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper">
        <h1
          className={`text-center ${
            isBellow700px ? "fs-12px" : "fs-30px"
          } red weight-7 font-poppins mb-10px`}
        >
          Privacy Policy
        </h1>

        <h2
          className={`white text-center ${
            isBellow700px ? "fs-12px mb-20px" : "fs-24px mb-40px"
          }`}
        >
          @Luckybuddhaclub, 2022
        </h2>

        <p
          className={`${
            isBellow700px ? "fs-10px mb-30px" : "fs-22px mb-70px"
          }  white opacity-0_8 text-center font-poppins`}
        >
          Passionate about what to do? <br /> Join the community Discord and
          contribute to the growth of Lucky Buddha.
        </p>

        <div className={`${styles.socialIcons} mb-50px`}>
          <a href="/" target="_blank">
            {" "}
            <FaFacebookF size={isBellow700px ? 20 : 44} color="white" />
          </a>
          <a href="/" target="_blank">
            {" "}
            <AiFillInstagram size={isBellow700px ? 20 : 44} color="white" />
          </a>
          <a href="/" target="_blank">
            {" "}
            <FaDiscord size={isBellow700px ? 20 : 44} color="white" />
          </a>
          <a href="/" target="_blank">
            {" "}
            <FaTwitter size={isBellow700px ? 20 : 44} color="white" />
          </a>
          <a href="/" target="_blank">
            {" "}
            <FaTelegramPlane size={isBellow700px ? 20 : 44} color="white" />
          </a>
        </div>
      </div>

      <div
        className={`${styles.copyRights} ${
          isBellow700px ? "fs-10px" : "fs-20px"
        } white text-center weight-4 font-poppins`}
      >
        Copyrights, 2022. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
