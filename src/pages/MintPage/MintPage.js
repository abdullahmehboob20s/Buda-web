import useMediaQuery from "hooks/useMediaQuery";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import styles from "./MintPage.module.css";

function MintPage() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");
  return (
    <div className="container-wrapper">
      <div className="mb-50px">
        <Navbar />
      </div>

      <div className={`${styles.page_content}`}>
        <div className={isBellow1000px ? "mb-40px" : "mb-80px"}>
          <h1
            className={`text-center font-mouse white ${
              isBellow1000px ? "fs-50px" : "fs-100px"
            } weight-4 mb-20px`}
          >
            Mint Now.
          </h1>
          <p
            className={`text-center white ${
              isBellow1000px ? "fs-18px" : "fs-28px"
            } uppercase mb-30px`}
          >
            WHITELIST MINTS WILL BE PRICED AT 0.069420 ETH
          </p>

          <button
            className={`${styles.connect_btn} yellow-btn white fs-28px text-center pointer`}
          >
            CONNECT WALLET
          </button>
        </div>
      </div>
    </div>
  );
}

export default MintPage;
