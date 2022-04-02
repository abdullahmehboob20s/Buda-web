import Title from "components/Title/Title";
import React from "react";
import styles from "./SellOut.module.css";

const Card = ({ title, points }) => {
  return (
    <div>
      <div className={`${styles.titleWrapper} mb-30px`}>
        <div className={`${styles.cricle}`}></div>
        <div
          className={`${styles.title} relative yellow fs-50px font-mouse weight-4`}
        >
          <h4
            className={`${styles.title_text} yellow fs-50px font-mouse weight-4`}
          >
            {title}
          </h4>
        </div>
      </div>

      <ul className={`${styles.cardsPoints}`} style={{ marginLeft: "1.8rem" }}>
        {points.map((point, index) => (
          <li key={index} className="fs-20px white">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

function SellOut() {
  return (
    <div>
      <div className="container-wrapper">
        <Title title="Sell Out." className="text-center mb-50px" />

        <div className={`${styles.cards_container} mb-100px`}>
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

        <a href="#" className={`${styles.btn} btn-red uppercase fs-20px`}>
          READ OUR WHITEPAPER
        </a>
      </div>
    </div>
  );
}

export default SellOut;
