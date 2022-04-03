import useMediaQuery from "hooks/useMediaQuery";
import FAQ from "layouts/FAQ/FAQ";
import Footer from "layouts/Footer/Footer";
import Hero from "layouts/Hero/Hero";
import Navbar from "layouts/Navbar/Navbar";
import SellOut from "layouts/SellOut/SellOut";
import Story from "layouts/Story/Story";
import Team from "layouts/Team/Team";
import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  const isBellow700px = useMediaQuery("(max-width : 700px)");

  return (
    <div>
      <div className={`${styles.app}`}>
        <div className="mb-50px">
          <Navbar />
        </div>
        <div className={isBellow700px ? "mb-80px" : "mb-150px"}>
          <Hero />
        </div>
        <div className={isBellow700px ? "mb-80px" : "mb-200px"}>
          <Story />
        </div>
        <div className={isBellow700px ? "mb-80px" : "mb-200px"}>
          <SellOut />
        </div>
        <div className="">
          <Team />
        </div>
        <div
          className={`${
            isBellow700px ? "py-100px mb-40px" : "py-150px mb-100px"
          }`}
        >
          <FAQ />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
