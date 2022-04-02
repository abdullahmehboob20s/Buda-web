import React from "react";
import styles from "./Accordion.module.css";

function Accordion() {
  return (
    <div>
      <button className={`${styles.btn}`}>
        <span className="fs-36px white font-poppins weight-4">
          What is a Lucky Buddha NFT?
        </span>

        <span className={`${styles.indicator}`}></span>
      </button>
    </div>
  );
}

export default Accordion;
