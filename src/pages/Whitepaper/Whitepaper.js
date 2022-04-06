import Title from "components/Title/Title";
import useMediaQuery from "hooks/useMediaQuery";
import Footer from "layouts/Footer/Footer";
import Navbar from "layouts/Navbar/Navbar";
import Team from "layouts/Team/Team";
import React from "react";
import styles from "./Whitepaper.module.css";
import logo from "assets/images/logo.svg";

function Whitepaper() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");

  return (
    <div>
      <div className="mb-60px">
        <Navbar />
      </div>

      <div className="mb-150px">
        <div className="container-wrapper ">
          <div
            className={`${styles.hero} ${
              isBellow1000px ? "mb-50px" : "mb-150px"
            } text-center`}
          >
            <img src={logo} className={`${styles.logo} mb-20px`} alt="" />
            <Title title="Lucky Buddha Club Whitepaper 1.0" className="red" />
          </div>

          <div className={isBellow600px ? "mb-40px" : "mb-60px"}>
            <div className={isBellow600px ? "mb-25px" : "mb-40px"}>
              <Title
                title="Introduction"
                className={`${isBellow1000px ? "mb-20px" : "mb-30px"}`}
              />
              <hr />
            </div>

            <p
              className={`${
                isBellow1000px
                  ? isBellow600px
                    ? "fs-12px mb-15px"
                    : "fs-16px mb-20px"
                  : "fs-22px mb-30px"
              } lh-1_6  red`}
            >
              Every Lucky Buddha that you mint holds the value of an entry pass
              to the Sacred Temple of the Lucky Buddha Club. Since the
              membership pool is full of diverse contributors ranging from
              cryptocurrency experts to influencers, and even celebrities, you
              will get expert advice regarding the maintenance and management of
              your wealth. You can interact with contributors from various walks
              of life, in order to help you with your financial matters and come
              up with an efficient roadmap to your goal of multiplying your
              wealth.
            </p>
            <p
              className={`${
                isBellow1000px
                  ? isBellow600px
                    ? "fs-12px"
                    : "fs-16px"
                  : "fs-22px"
              }  lh-1_6 red text-indent-10`}
            >
              Moreover, if you have an entrepreneurial mindset and wish to
              explore the crypto industry with a unique and intriguing idea,
              then a dedicated group of investors and community engagement will
              help you obtain funds for your start-up ideas. These meetings
              won’t just be digital, you can meet the expert folks in-person at
              the Lucky Buddha Club Meetings and Parties in the Luxury Base
              Temple in Miami, Florida.
            </p>
          </div>
          <div className={isBellow600px ? "mb-40px" : "mb-60px"}>
            <div className={isBellow600px ? "mb-25px" : "mb-40px"}>
              <Title
                title="The Lucky Buddha Club Mission Statement"
                className={`${isBellow1000px ? "mb-20px" : "mb-30px"}`}
              />
              <hr />
            </div>

            <p
              className={`${
                isBellow1000px
                  ? isBellow600px
                    ? "fs-12px mb-15px"
                    : "fs-16px mb-20px"
                  : "fs-22px mb-30px"
              }  red lh-1_6 `}
            >
              It should be clear that the Lucky Buddha NFT is a lot more than
              just a fast track to making money in the crypto world and
              business. We value our community, and we value our holders. For
              this reason, we have decided to launch and reward the NFT holders
              with a surprise utility to be announced.
            </p>
            <p
              className={`${
                isBellow1000px
                  ? isBellow600px
                    ? "fs-12px mb-15px"
                    : "fs-16px mb-20px"
                  : "fs-22px mb-30px"
              }  red lh-1_6  text-indent-10`}
            >
              Holders will have access to traveling, lodging, coaching, shopping
              for luxury brand wear, exclusive merchandise, as well as
              opportunities for luxury travel and experiences - thanks to the
              launchpad that we will provide to connect club contributors and
              members who can provide value to the community.
            </p>
            <p
              className={`${
                isBellow1000px
                  ? isBellow600px
                    ? "fs-12px mb-15px"
                    : "fs-16px mb-20px"
                  : "fs-22px mb-30px"
              }  red lh-1_6  text-indent-10`}
            >
              The Lucky Buddha Club will become a full-service marketplace for
              exclusive IRL experiences, on top of granting access to pertinent
              tools for business (including real-estate, e-commerce, and
              credit/loans). The vision for the Lucky Buddha Club is a renowned
              launchpad where distinctive individuals with great ideas can bring
              their creation to life.
            </p>
          </div>

          <div className={isBellow600px ? "mb-40px" : "mb-60px"}>
            <div className={isBellow600px ? "mb-25px" : "mb-40px"}>
              <Title
                title="Lucky Buddha Club Investment Series"
                className={`${isBellow1000px ? "mb-20px" : "mb-30px"}`}
              />
              <hr />
            </div>

            <p
              className={`${
                isBellow1000px
                  ? isBellow600px
                    ? "fs-12px mb-15px"
                    : "fs-16px mb-20px"
                  : "fs-22px mb-30px"
              }  red lh-1_6  text-indent-10`}
            >
              Following the successful launch of Lucky Buddha Club collectibles,
              the Club will purchase several pieces of land as well as other
              assets in Decentraland, Sandbox and other growing metaverses that
              will be used for marketing purposes and to collect rental income.
              The proceeds for the Club’s investments will be distributed evenly
              among the holders of the Lucky Buddha Club collection through the
              utility-token that will power the entire Lucky Buddha Club
              ecosystem.
            </p>
          </div>
          <div className={isBellow600px ? "mb-40px" : "mb-60px"}>
            <div className={isBellow600px ? "mb-25px" : "mb-40px"}>
              <Title
                title="Lucky Buddha Club Utility-Token
              "
                className={`${isBellow1000px ? "mb-20px" : "mb-30px"}`}
              />
              <hr />
            </div>

            <p
              className={`${
                isBellow1000px
                  ? isBellow600px
                    ? "fs-12px mb-15px"
                    : "fs-16px mb-20px"
                  : "fs-22px mb-30px"
              }  red lh-1_6  text-indent-10`}
            >
              This utility-token lies at the center of what the Lucky Buddha
              Club hopes to accomplish.{" "}
              <span className="weight-9 red">
                {" "}
                The Lucky Buddha Club collectibles are ultimately a whitelist
                opportunity for the planned hedge-fund style community
                investment initiative token.
              </span>{" "}
              The details of how this utility-token is intended to be revealed
              through official channels. End goal for the utility-token is to
              combine the extensive conventional investment experience of the
              Lucky Buddha Club founders and the power of a Crypto native
              community in order to become a force to be reckoned with in the
              financial world.
            </p>
          </div>

          <div className={isBellow600px ? "mb-50px" : "mb-100px"}>
            <div className="mb-40px">
              <Title
                title="Lucky Buddha Club Roadmap 1.0
              "
                className={`${isBellow1000px ? "mb-20px" : "mb-30px"}`}
              />
              <hr />
            </div>

            <div className={isBellow600px ? "mb-40px" : "mb-60px"}>
              <div className="mb-40px">
                <Title
                  title="Q1 2022"
                  className={`${isBellow1000px ? "mb-20px" : "mb-30px"}`}
                />
                <hr />
              </div>

              <ul style={{ paddingLeft: "1.8%" }}>
                <li
                  className={`${
                    isBellow1000px
                      ? isBellow600px
                        ? "fs-12px"
                        : "fs-16px"
                      : "fs-22px"
                  }  red lh-1_6 mb-10px`}
                >
                  Each Lucky Buddha finds a home!
                </li>
                <li
                  className={`${
                    isBellow1000px
                      ? isBellow600px
                        ? "fs-12px"
                        : "fs-16px"
                      : "fs-22px"
                  }  red lh-1_6 mb-10px`}
                >
                  Celebratory giveaways are kicked off to spread the love.
                </li>
                <li
                  className={`${
                    isBellow1000px
                      ? isBellow600px
                        ? "fs-12px"
                        : "fs-16px"
                      : "fs-22px"
                  }  red lh-1_6 mb-10px`}
                >
                  Lucky Buddha Club metaverse investments are planned with the
                  contribution of the entire community
                </li>
                <li
                  className={`${
                    isBellow1000px
                      ? isBellow600px
                        ? "fs-12px"
                        : "fs-16px"
                      : "fs-22px"
                  }  red lh-1_6 mb-10px`}
                >
                  Incredible announcement detailing the “surprise” utility of
                  Lucky Buddha Club collection.
                </li>
              </ul>
            </div>

            <div className={isBellow600px ? "mb-40px" : "mb-60px"}>
              <div className="mb-40px">
                <Title
                  title="Q2 2022                "
                  className={`${isBellow1000px ? "mb-20px" : "mb-30px"}`}
                />
                <hr />
              </div>

              <ul style={{ paddingLeft: "1.8%" }}>
                <li
                  className={`${
                    isBellow1000px
                      ? isBellow600px
                        ? "fs-12px"
                        : "fs-16px"
                      : "fs-22px"
                  }  red lh-1_6 mb-10px`}
                >
                  Reward Exchange Program (a platform for access to deeply
                  discounted services, experiences and tools that can only be
                  redeemed with utility token. As well as a mentorship program
                  powered entirely by the utility token)
                </li>
              </ul>
            </div>

            <div className={isBellow600px ? "mb-40px" : "mb-60px"}>
              <div className="mb-40px">
                <Title
                  title="Q3 2022"
                  className={`${isBellow1000px ? "mb-20px" : "mb-30px"}`}
                />
                <hr />
              </div>

              <ul style={{ paddingLeft: "1.8%" }}>
                <li
                  className={`${
                    isBellow1000px
                      ? isBellow600px
                        ? "fs-12px"
                        : "fs-16px"
                      : "fs-22px"
                  }  red lh-1_6 mb-10px`}
                >
                  Crypto Community Investment INitiative for LBC to trade
                  digital and physical assets. LBC NFT holders will be eligible
                  to participate in the private sale of this token to be
                  launched. Holders of this token will be eligible for ongoing
                  rewards which will be mirroring the trade profits of LBC
                  management to its holders.
                </li>
                <li
                  className={`${
                    isBellow1000px
                      ? isBellow600px
                        ? "fs-12px"
                        : "fs-16px"
                      : "fs-22px"
                  }  red lh-1_6 mb-10px`}
                >
                  The completed Lucky Buddha Club launchpad to fund and
                  bootstrap new projects.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-80px">
            <Title
              title="The Brains Behind the lucky Buddha Club"
              className={`${isBellow1000px ? "mb-20px" : "mb-30px"}`}
            />
            <hr />
          </div>

          <Team showTitles={false} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Whitepaper;
