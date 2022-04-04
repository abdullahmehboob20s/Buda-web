import useMediaQuery from "hooks/useMediaQuery";
import Navbar from "layouts/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import styles from "./MintPage.module.css";

import { ImMinus, ImPlus } from "react-icons/im";
import { CgFormatSlash } from "react-icons/cg";
import YellowBtn from "components/Buttons/YellowBtn/YellowBtn";
import RedButton from "components/Buttons/RedButton/RedButton";
import { useNavigate } from "react-router-dom";

const Colon = () => {
  return (
    <div className={`${styles.colon}`}>
      <div className="fs-30px white">.</div>
      <div className="fs-30px white">.</div>
    </div>
  );
};

const Timer = ({ time, title }) => {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <div className={`${styles.timer}`}>
      <div className={`${styles.timerBox_wrapper} mb-10px`}>
        <div
          className={`${styles.timer_box} ${
            isBellow1000px ? "fs-26px" : "fs-40px"
          } text-center black`}
        >
          {time}
        </div>
      </div>
      <p
        className={`text-center ${
          isBellow1000px ? "fs-16px" : "fs-18px"
        } uppercase`}
      >
        {title}
      </p>
    </div>
  );
};

function MintPage() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");
  let [counter, setCounter] = useState(1);
  let navigate = useNavigate();

  const [deadline, setDeadline] = useState("April 21, 2022 00:00:00");

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(deadline).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className={`${styles.mint_page}`}>
      <div className={`${styles.mint_page_container} container-wrapper`}>
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

            <YellowBtn
              title="CONNECT WALLET"
              fontSize={isBellow1000px ? "fs-16px" : "fs-20px"}
              className={styles.connect_btn}
              onClick={() => navigate("/connect-wallet")}
            />
          </div>

          <div>
            <h1
              className={`text-center ${
                isBellow1000px ? "fs-26px" : "fs-40px"
              } white mb-40px`}
            >
              JANUARY 21ST 1PM EST
            </h1>
            <div className={`${styles.timer_container} mb-50px`}>
              <Timer time={timerDays} title={isBellow600px ? "Days" : "Days"} />
              <Colon />
              <Timer
                time={timerHours}
                title={isBellow600px ? "Hrs" : "Hours"}
              />
              <Colon />
              <Timer
                time={timerMinutes}
                title={isBellow600px ? "Min" : "Minutes"}
              />
              <Colon />
              <Timer
                time={timerSeconds}
                title={isBellow600px ? "Sec" : "Seconds"}
              />
            </div>
            <div
              className={`${styles.maximum_mint} ${
                isBellow1000px ? "fs-20px" : "fs-30px"
              } white text-center weight-4 mb-25px`}
            >
              {counter} <CgFormatSlash /> 10000
            </div>
            <div
              className={`${styles.whitelist_mint} ${
                isBellow1000px ? "fs-20px" : "fs-30px"
              } black text-center uppercase mb-25px`}
            >
              WHITELIST MINT (MAX 1)
            </div>

            <RedButton
              title="Mint Now"
              fontSize={isBellow1000px ? "fs-16px" : "fs-20px"}
              className={`${styles.connect_btn} mb-25px`}
            />

            <div className={`${styles.counter}`}>
              <button
                className="pointer"
                onClick={() => setCounter(counter < 2 ? counter : counter - 1)}
              >
                <ImMinus color="white" size={isBellow1000px ? 20 : 30} />
              </button>
              <div
                className={`${styles.counter_box} ${
                  isBellow1000px ? "fs-20px" : "fs-30px"
                } black`}
              >
                {counter}
              </div>
              <button
                className="pointer"
                onClick={() => setCounter(counter + 1)}
              >
                <ImPlus color="white" size={isBellow1000px ? 20 : 30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintPage;
