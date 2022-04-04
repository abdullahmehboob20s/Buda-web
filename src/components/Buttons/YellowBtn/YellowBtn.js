import React from "react";
import styles from "./YellowBtn.module.css";
import btn_bottom_right_path from "assets/images/btn_bottom_right_path.png";
import yellow_btn_glass from "assets/images/yellow_btn_glass.png";

function YellowBtn({ style, title, className, fontSize, onClick }) {
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

export default YellowBtn;
