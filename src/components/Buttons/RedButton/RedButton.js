import React from "react";
import styles from "./RedButton.module.css";

function RedButton({ style, title, className, fontSize, onClick }) {
  return (
    <button
      className={`${styles.btn} ${className} ${fontSize} white text-center pointer `}
      style={style}
      onClick={onClick}
    >
      <div className={`${styles.btn_bg}`}></div>
      <div className={`${styles.glass_top}`}></div>
      <div className={`${styles.glass_bottom}`}></div>

      {title}
    </button>
  );
}
export default RedButton;
