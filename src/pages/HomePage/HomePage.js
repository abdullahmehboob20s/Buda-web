import FAQ from "layouts/FAQ/FAQ";
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
      <div className="mb-200px">
        <Team />
      </div>
      <div className="mb-200px">
        <FAQ />
      </div>
    </div>
  );
}

export default HomePage;
