import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./Title.module.css";

function Title({ title, className, style }) {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");

  return (
    <h1
      className={`font-mouse ${
        isBellow1000px ? (isBellow600px ? "fs-32px" : "fs-50px") : "fs-80px"
      }  weight-3 ${className}`}
      style={style}
    >
      {title}
    </h1>
  );
}

export default Title;
