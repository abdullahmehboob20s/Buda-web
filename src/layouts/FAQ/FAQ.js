import Accordion from "components/Accordion/Accordion";
import Title from "components/Title/Title";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./FAQ.module.css";

function FAQ() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div>
      <div className="container-wrapper">
        <div className={isBellow500px ? "mb-30px" : "mb-70px"}>
          <Title title="FAQS." className="text-center mb-30px" />
          <p
            className={`uppercase text-center ${
              isBellow1000px
                ? isBellow500px
                  ? "fs-14px"
                  : "fs-20px"
                : "fs-30px"
            }`}
          >
            frquentlyy asked questions.
          </p>
        </div>

        <div className={`${styles.accordions_container}`}>
          <Accordion
            title="What is a Lucky Buddha NFT?"
            desc={
              <p
                className={`font-poppins weight-4 ${
                  isBellow1000px
                    ? isBellow500px
                      ? "fs-10px"
                      : "fs-16px"
                    : "fs-20px"
                }`}
              >
                A collection of 10,000 chubby, cute, and very lucky Buddhas with
                proof of ownership stored on the Ethereum Blockchain as ERC-721
                tokens. Our Lucky Buddhas represent joy, wisdom, and abundance
                and are characterized by their level of enlightenment. The
                rarest class of Buddha NFTs are the ultraenlightened ones, which
                only a few extremely fortunate ones will be able to mint. Each
                Lucky Buddha NFT will be available in high resolution, which you
                may choose to showcasewherever you see fit in the real world.
              </p>
            }
          />
          <Accordion
            title="Who's behind then project?"
            desc={
              <p
                className={`font-poppins weight-4 ${
                  isBellow1000px
                    ? isBellow500px
                      ? "fs-10px"
                      : "fs-16px"
                    : "fs-20px"
                }`}
              >
                A collection of 10,000 chubby, cute, and very lucky Buddhas with
                proof of ownership stored on the Ethereum Blockchain as ERC-721
                tokens. Our Lucky Buddhas represent joy, wisdom, and abundance
                and are characterized by their level of enlightenment. The
                rarest class of Buddha NFTs are the ultraenlightened ones, which
                only a few extremely fortunate ones will be able to mint. Each
                Lucky Buddha NFT will be available in high resolution, which you
                may choose to showcasewherever you see fit in the real world.
              </p>
            }
          />
          <Accordion
            title="When is Minting?"
            desc={
              <p
                className={`font-poppins weight-4 ${
                  isBellow1000px
                    ? isBellow500px
                      ? "fs-10px"
                      : "fs-16px"
                    : "fs-20px"
                }`}
              >
                A collection of 10,000 chubby, cute, and very lucky Buddhas with
                proof of ownership stored on the Ethereum Blockchain as ERC-721
                tokens. Our Lucky Buddhas represent joy, wisdom, and abundance
                and are characterized by their level of enlightenment. The
                rarest class of Buddha NFTs are the ultraenlightened ones, which
                only a few extremely fortunate ones will be able to mint. Each
                Lucky Buddha NFT will be available in high resolution, which you
                may choose to showcasewherever you see fit in the real world.
              </p>
            }
          />
          <Accordion
            title="How to Mint?"
            desc={
              <p
                className={`font-poppins weight-4 ${
                  isBellow1000px
                    ? isBellow500px
                      ? "fs-10px"
                      : "fs-16px"
                    : "fs-20px"
                }`}
              >
                A collection of 10,000 chubby, cute, and very lucky Buddhas with
                proof of ownership stored on the Ethereum Blockchain as ERC-721
                tokens. Our Lucky Buddhas represent joy, wisdom, and abundance
                and are characterized by their level of enlightenment. The
                rarest class of Buddha NFTs are the ultraenlightened ones, which
                only a few extremely fortunate ones will be able to mint. Each
                Lucky Buddha NFT will be available in high resolution, which you
                may choose to showcasewherever you see fit in the real world.
              </p>
            }
          />
          <Accordion
            title="Lucky Buddha Utility?"
            desc={
              <p
                className={`font-poppins weight-4 ${
                  isBellow1000px
                    ? isBellow500px
                      ? "fs-10px"
                      : "fs-16px"
                    : "fs-20px"
                }`}
              >
                A collection of 10,000 chubby, cute, and very lucky Buddhas with
                proof of ownership stored on the Ethereum Blockchain as ERC-721
                tokens. Our Lucky Buddhas represent joy, wisdom, and abundance
                and are characterized by their level of enlightenment. The
                rarest class of Buddha NFTs are the ultraenlightened ones, which
                only a few extremely fortunate ones will be able to mint. Each
                Lucky Buddha NFT will be available in high resolution, which you
                may choose to showcasewherever you see fit in the real world.
              </p>
            }
          />
          <Accordion
            title="Why Royalties?"
            desc={
              <p
                className={`font-poppins weight-4 ${
                  isBellow1000px
                    ? isBellow500px
                      ? "fs-10px"
                      : "fs-16px"
                    : "fs-20px"
                }`}
              >
                A collection of 10,000 chubby, cute, and very lucky Buddhas with
                proof of ownership stored on the Ethereum Blockchain as ERC-721
                tokens. Our Lucky Buddhas represent joy, wisdom, and abundance
                and are characterized by their level of enlightenment. The
                rarest class of Buddha NFTs are the ultraenlightened ones, which
                only a few extremely fortunate ones will be able to mint. Each
                Lucky Buddha NFT will be available in high resolution, which you
                may choose to showcasewherever you see fit in the real world.
              </p>
            }
          />
          <Accordion
            title="Presale?"
            desc={
              <p
                className={`font-poppins weight-4 ${
                  isBellow1000px
                    ? isBellow500px
                      ? "fs-10px"
                      : "fs-16px"
                    : "fs-20px"
                }`}
              >
                A collection of 10,000 chubby, cute, and very lucky Buddhas with
                proof of ownership stored on the Ethereum Blockchain as ERC-721
                tokens. Our Lucky Buddhas represent joy, wisdom, and abundance
                and are characterized by their level of enlightenment. The
                rarest class of Buddha NFTs are the ultraenlightened ones, which
                only a few extremely fortunate ones will be able to mint. Each
                Lucky Buddha NFT will be available in high resolution, which you
                may choose to showcasewherever you see fit in the real world.
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
