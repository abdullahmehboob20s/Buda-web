import ConnectCard from "components/Cards/ConnectCard/ConnectCard";
import Navbar from "layouts/Navbar/Navbar";
import React, { useState } from "react";
import styles from "./ConnectWalletPage.module.css";
import coinbase_icon from "assets/images/coinbase_icon.png";
import metamask_icon from "assets/images/metamask_icon.png";
import trust_icon from "assets/images/trust_icon.png";
import WhenConnected from "./WhenConnected";
import useMediaQuery from "hooks/useMediaQuery";

function ConnectWalletPage() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");
  const [isConnected, setIsConnected] = useState(false);
  const [walletData, setWalletData] = useState({
    walletImg: null,
    walletName: "",
  });

  const onConnect = (data) => {
    setWalletData({ walletImg: data.walletImg, walletName: data.walletName });
    setIsConnected(true);
  };

  return (
    <div className={styles.connect_wallet_page}>
      <div className="mb-50px">
        <Navbar />
      </div>
      <div className={`${styles.page_content} container-wrapper`}>
        <div className={isBellow1000px ? "mb-40px" : "mb-80px"}>
          <h1
            className={`text-center font-mouse white ${
              isBellow1000px ? "fs-50px" : "fs-100px"
            } weight-4 mb-20px`}
          >
            Connect Wallet.
          </h1>
          <p
            className={`text-center white ${
              isBellow1000px ? "fs-18px" : "fs-28px"
            } uppercase`}
          >
            connect your preffered wallet
          </p>
        </div>

        {isConnected ? (
          <WhenConnected data={walletData} setIsConnected={setIsConnected} />
        ) : (
          <div className={`${styles.cards}`}>
            <ConnectCard
              title="coinbase"
              icon={coinbase_icon}
              onConnect={onConnect}
            />
            <ConnectCard
              title="metamask"
              icon={metamask_icon}
              onConnect={onConnect}
            />
            <ConnectCard
              title="trust"
              icon={trust_icon}
              onConnect={onConnect}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ConnectWalletPage;
