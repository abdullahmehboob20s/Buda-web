import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./ConnectCard.module.css";

const ConnectCard = ({ title, icon, onConnect }) => {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");
  const isBellow680pxHeight = useMediaQuery("(max-height : 680px)");

  return (
    <div className={`${styles.connectCard}`}>
      <div
        className={`${styles.connectCard_header} ${
          isBellow1000px ? "fs-18px" : "fs-28px"
        }  uppercase black text-center`}
      >
        {title}
      </div>

      <div className={`${styles.content}`}>
        <img src={icon} className={`${styles.icon} `} alt="" />

        <button
          onClick={() => onConnect({ walletImg: icon, walletName: title })}
          className={`${styles.btn}  yellow-btn uppercase white`}
        >
          CONNECT
        </button>
      </div>
    </div>
  );
};

export default ConnectCard;
