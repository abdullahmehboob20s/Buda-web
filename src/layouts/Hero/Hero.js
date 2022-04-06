import React from "react";
import styles from "./Hero.module.css";
import buddha from "assets/images/buddha.gif";
import useMediaQuery from "hooks/useMediaQuery";
import { Link } from "react-router-dom";

const DivisionCard = ({ title, subTitle }) => {
  const isBellow1200px = useMediaQuery("(max-width : 1200px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div className="text-center">
      <h4
        className={`font-mouse ${
          isBellow1200px ? (isBellow500px ? "fs-22px" : "fs-30px") : "fs-48px"
        }  white ${isBellow500px ? "mb-10px" : "mb-15px"}`}
      >
        {title}
      </h4>
      <p
        className={`uppercase ${
          isBellow1200px ? (isBellow500px ? "fs-12px" : "fs-16px") : "fs-20px"
        } yellow`}
      >
        {subTitle}
      </p>
    </div>
  );
};

function Hero() {
  const isBellow1200px = useMediaQuery("(max-width : 1200px)");
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper">
        <div className={`${styles.hero}`}>
          <div className={`${styles.left}`}>
            <h1
              className={`font-mouse ${
                isBellow1200px
                  ? isBellow500px
                    ? "fs-32px"
                    : "fs-80px"
                  : "fs-110px"
              }  weight-3 ${isBellow500px ? "mb-10px" : "mb-25px"} `}
            >
              Lucky Buddha Club
            </h1>
            <p
              className={`${
                isBellow1200px
                  ? isBellow500px
                    ? "fs-14px"
                    : "fs-20px"
                  : "fs-26px"
              }  white ${isBellow500px ? "mb-20px" : "mb-60px"}`}
            >
              an nft collection of 10,000 lucky buddhas illuminating the
              eightfold path to real life utility. meet us at the temple in
              march 2022.
            </p>

            {isBellow1000px ? (
              <img
                src={buddha}
                className={`${styles.buddha} w-full mb-30px`}
                alt=""
              />
            ) : (
              ""
            )}

            <div
              className={`${styles.btns} ${
                isBellow500px ? "mb-40px" : "mb-60px"
              }`}
            >
              <Link
                to="/mint"
                className={`${styles.redBtn} ${
                  isBellow1200px
                    ? isBellow500px
                      ? "fs-10px"
                      : "fs-16px"
                    : "fs-20px"
                } white uppercase btn-red pointer`}
              >
                MINT NOW
              </Link>
              <Link
                to="/connect-wallet"
                className={`${styles.redBtn} ${
                  isBellow1200px
                    ? isBellow500px
                      ? "fs-10px"
                      : "fs-16px"
                    : "fs-20px"
                } white uppercase yellow-btn pointer`}
              >
                CONNECT WALLET
              </Link>
            </div>

            <div className={`${styles.divisions}`}>
              <DivisionCard title="10,000" subTitle="Collections" />
              <div className={`${styles.divider_line}`}></div>
              <DivisionCard title="14,000" subTitle="auctions" />
              <div className={`${styles.divider_line}`}></div>
              <DivisionCard title="5000" subTitle="artists" />
            </div>
          </div>
          <div className={`${styles.right}`}>
            <img src={buddha} className={`${styles.buddha} w-full`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
