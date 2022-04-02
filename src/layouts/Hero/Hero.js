import React from "react";
import styles from "./Hero.module.css";
import buddha from "assets/images/buddha.png";

const DivisionCard = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h4 className="font-mouse fs-48px white mb-15px">{title}</h4>
      <p className="uppercase fs-20px yellow">{subTitle}</p>
    </div>
  );
};

function Hero() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper">
        <div className={`${styles.hero}`}>
          <div className={`${styles.left}`}>
            <h1 className="font-mouse fs-110px weight-3 mb-25px">
              Lucky Buddha Club
            </h1>
            <p className="fs-26px white mb-60px">
              an nft collection of 10,000 lucky buddhas illuminating the
              eightfold path to real life utility. meet us at the temple in
              march 2022.
            </p>

            <div className={`${styles.btns} mb-60px`}>
              <button
                className={`${styles.redBtn} fs-20px white uppercase btn-red pointer`}
              >
                MINT NOW
              </button>
              <button
                className={`${styles.redBtn} fs-20px white uppercase yellow-btn pointer`}
              >
                CONNECT WALLET
              </button>
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
