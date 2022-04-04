import OutsideClickDetector from "hooks/OutsideClickDetector";
import useMediaQuery from "hooks/useMediaQuery";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.css";

function Accordion({ title, desc }) {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");
  const accordionBodyRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = OutsideClickDetector(() => setIsOpen(false));

  useEffect(() => {
    if (isOpen) {
      accordionBodyRef.current.style.height =
        accordionBodyRef.current.scrollHeight + "px";
    } else {
      accordionBodyRef.current.style.height = 0 + "px";
    }
  });

  return (
    <div className={`${styles.accordion}`} ref={accordionRef}>
      <button
        className={`${styles.btn} pointer text-left`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`${
            isBellow1000px ? (isBellow500px ? "fs-12px" : "fs-20px") : "fs-30px"
          } white font-poppins weight-4 text-left`}
        >
          {title}
        </span>

        <span
          className={`${styles.indicator} ${isOpen ? styles.open : ""}`}
        ></span>
      </button>

      <div className={`${styles.accordion_body}`} ref={accordionBodyRef}>
        <div className={`${styles.accordion_content}`}>{desc}</div>
      </div>
    </div>
  );
}

export default Accordion;
