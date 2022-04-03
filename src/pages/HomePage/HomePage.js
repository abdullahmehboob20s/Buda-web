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
  return (
    <div>
      <div className={`${styles.app}`}>
        <div className="mb-50px">
          <Navbar />
        </div>
        <div className="mb-150px">
          <Hero />
        </div>
        <div className="mb-200px">
          <Story />
        </div>
        <div className="mb-200px">
          <SellOut />
        </div>
        <div className="">
          <Team />
        </div>
        <div className="py-150px mb-100px">
          <FAQ />
        </div>
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
}

export default HomePage;
