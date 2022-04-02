import React from "react";
import styles from "./Title.module.css";

function Title({ title, className, style }) {
  return (
    <h1 className={`font-mouse fs-80px weight-3 ${className}`} style={style}>
      {title}
    </h1>
  );
}

export default Title;
