import React, { useRef, useState } from "react";
import styles from "./Accordion.module.css";

function Accordion({ title, desc }) {
  const accordionBodyRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handler = () => {
    if (accordionBodyRef.current.clientHeight === 0) {
      accordionBodyRef.current.style.height =
        accordionBodyRef.current.scrollHeight + "px";
      setIsOpen(true);
    } else {
      accordionBodyRef.current.style.height = 0 + "px";
      setIsOpen(false);
    }
  };

  return (
    <div className={`${styles.accordion}`}>
      <button className={`${styles.btn} pointer`} onClick={handler}>
        <span className="fs-30px white font-poppins weight-4">{title}</span>

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
