import useMediaQuery from "hooks/useMediaQuery";
import Navbar from "layouts/Navbar/Navbar";
import React, { useState } from "react";
import styles from "./MintPage.module.css";

import { ImMinus, ImPlus } from "react-icons/im";
import { CgFormatSlash } from "react-icons/cg";

const Colon = () => {
  return (
    <div className={`${styles.colon}`}>
      <div className="fs-30px white">.</div>
      <div className="fs-30px white">.</div>
    </div>
  );
};

const Timer = ({ time, title }) => {
  return (
    <div className={`${styles.timer}`}>
      <div className={`${styles.timerBox_wrapper} mb-10px`}>
        <div className={`${styles.timer_box} fs-40px text-center black`}>
          {time}
        </div>
      </div>
      <p className="text-center fs-18px uppercase">{title}</p>
    </div>
  );
};

function MintPage() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");
  let [counter, setCounter] = useState(1);

  return (
    <div className="container-wrapper">
      <div className="">
        <Navbar />
      </div>

      <div className={`${styles.page_content} py-50px`}>
        <div className={isBellow1000px ? "mb-20px" : "mb-40px"}>
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
            className={`${styles.connect_btn} yellow-btn white fs-20px text-center pointer`}
          >
            CONNECT WALLET
          </button>
        </div>

        <div>
          <h1 className="text-center fs-40px white mb-40px">
            JANUARY 21ST 1PM EST
          </h1>

          <div className={`${styles.timer_container} mb-50px`}>
            <Timer time="13" title="Days" />
            <Colon />
            <Timer time="12" title="Hours" />
            <Colon />
            <Timer time="21" title="Minutes" />
            <Colon />
            <Timer time="34" title="Seconds" />
          </div>

          <div
            className={`${styles.maximum_mint} fs-30px white text-center weight-4 mb-25px`}
          >
            {counter} <CgFormatSlash /> 10000
          </div>
          <div
            className={`${styles.whitelist_mint} fs-30px black text-center uppercase mb-25px`}
          >
            WHITELIST MINT (MAX 1)
          </div>
          <button
            className={`${styles.mint_btn} fs-24px white text-center btn-red mb-30px`}
          >
            Mint Now
          </button>

          <div className={`${styles.counter}`}>
            <button
              className="pointer"
              onClick={() => setCounter(counter < 2 ? counter : counter - 1)}
            >
              <ImMinus color="white" size={30} />
            </button>
            <div className={`${styles.counter_box} fs-30px black`}>
              {counter}
            </div>
            <button className="pointer" onClick={() => setCounter(counter + 1)}>
              <ImPlus color="white" size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintPage;
