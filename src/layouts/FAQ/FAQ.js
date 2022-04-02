import Accordion from "components/Accordion/Accordion";
import Title from "components/Title/Title";
import React from "react";
import styles from "./FAQ.module.css";

function FAQ() {
  return (
    <div>
      <div className="container-wrapper">
        <div className="mb-50px">
          <Title title="FAQS." className="text-center mb-30px" />
          <p className="uppercase text-center fs-30px">
            frquentlyy asked questions.
          </p>
        </div>

        <div className={`${styles.accordions_container}`}>
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
