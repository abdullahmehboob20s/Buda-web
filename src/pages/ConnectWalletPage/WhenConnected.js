import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./ConnectWalletPage.module.css";

function WhenConnected({ data, setIsConnected }) {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");

  return (
    <div className={`${styles.whenConnected}`}>
      <div className={`${styles.details}`}>
        <div className={`${styles.details_img_wrapper}`}>
          <img
            src={data.walletImg}
            className={`${styles.details_img} mb-20px`}
            alt=""
          />
        </div>
        <p className={`${styles.connected_wallet_title} text-center black`}>
          your {data.walletName} wallet had been <br /> connected successfully!
        </p>
      </div>

      <button
        className={`${styles.mint_btn} white uppercase weight-3 btn-red`}
        onClick={() => setIsConnected(false)}
      >
        MINT NOW
      </button>
    </div>
  );
}

export default WhenConnected;
