import Title from "components/Title/Title";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./SellOut.module.css";

const Card = ({ title, points }) => {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");

  return (
    <div>
      <div
        className={`${styles.titleWrapper} ${
          isBellow600px ? "mb-20px" : "mb-30px"
        }`}
      >
        <div className={`${styles.cricle}`}></div>
        <div className={`${styles.title} relative yellow font-mouse weight-4`}>
          <h4
            className={`${styles.title_text} yellow ${
              isBellow1000px
                ? isBellow600px
                  ? "fs-20px"
                  : "fs-34px"
                : "fs-50px"
            } font-mouse weight-4`}
          >
            {title}
          </h4>
        </div>
      </div>

      <ul className={`${styles.cardsPoints}`} style={{ marginLeft: "1.8rem" }}>
        {points.map((point, index) => (
          <li
            key={index}
            className={`${
              isBellow1000px
                ? isBellow600px
                  ? "fs-12px weight-2"
                  : "fs-16px"
                : "fs-20px"
            } white `}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

function SellOut() {
  const isBellow600px = useMediaQuery("(max-width : 600px)");

  return (
    <div>
      <div className="container-wrapper">
        <Title
          title="Sell Out."
          className={`text-center ${isBellow600px ? "mb-30px" : "mb-50px"}`}
        />

        <div
          className={`${styles.cards_container} ${
            isBellow600px ? "mb-50px" : "mb-100px"
          }`}
        >
          <Card
            title="Q1 2022"
            points={[
              "each lucky buddha finds a ",
              "celebratory giveaways are kicked off to spread the ",
              "lucky buddha club metaverse investments are planned with the contribution of the entire community.",
              'incredible announcment detailing the "surprise" utility of lucky buddha club collection.',
            ]}
          />
          <Card
            title="Q2 2022"
            points={[
              "reward exchange program (a platform for access to deeply discounted services, experiences and tools that can only be redeemed with utility token. as well as a mentorship program powered entirely by the utility token.)",
            ]}
          />
          <Card
            title="Q3 2022"
            points={[
              "crypto community investment initiative for lbc to trade digital and physical assets. lbc nft holders will be eligible to participate in the private sale for this token to be launched. holder of this token will be eligible for .",
              "the completed lucky buddha club launchpad to fund and bootstrap new projects.",
            ]}
          />
        </div>

        <Link
          to="/whitepaper"
          className={`${styles.btn} ${
            isBellow600px ? "fs-10px" : "fs-20px"
          } btn-red uppercase`}
        >
          READ OUR WHITEPAPER
        </Link>
      </div>
    </div>
  );
}

export default SellOut;
