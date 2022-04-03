import Title from "components/Title/Title";
import React from "react";
import styles from "./Team.module.css";

import team_member_1 from "assets/images/team_member_1.png";
import team_member_2 from "assets/images/team_member_2.png";
import team_member_3 from "assets/images/team_member_3.png";
import team_member_4 from "assets/images/team_member_4.png";
import team_member_5 from "assets/images/team_member_5.png";

import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import useMediaQuery from "hooks/useMediaQuery";

const TeamCard = ({ name, desc, links, img }) => {
  const isBellow600px = useMediaQuery("(max-width : 600px)");

  return (
    <div className={`${styles.teamCard}`}>
      <img src={img} className={`${styles.teamCard_img}`} alt="" />
      <div className={`${styles.teamCard_content}`}>
        <p
          className={`font-mouse text-center ${
            isBellow600px ? "fs-30px" : "fs-50px"
          } white mb-10px`}
        >
          {name}
        </p>
        <p
          className={`yellow text-center ${
            isBellow600px ? "fs-12px" : "fs-18px"
          } mb-20px`}
        >
          {desc}
        </p>

        <div className={`${styles.teamCard_icons}`}>
          {links.map((link, index) => (
            <a key={index} href={link.link} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

function Team() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");

  return (
    <div>
      <div className="container-wrapper">
        <div className={`${isBellow600px ? "mb-50px" : "mb-100px"}`}>
          <Title
            title="Meet Our Team."
            className={`text-center ${isBellow600px ? "mb-20px" : "mb-30px"}`}
          />

          <p
            className={`${
              isBellow1000px
                ? isBellow600px
                  ? "fs-12px"
                  : "fs-16px"
                : "fs-24px"
            }  white uppercase text-center mb-30px`}
          >
            our project was co-founded by willy and ash two big friends with
            years of experience in defi and financial spaces. we also have an
            amazing nft advisor, artist, developer, community managers,
            designer, and marketing and pr professionals.
          </p>
        </div>

        <div className={`${styles.cards_container}`}>
          <TeamCard
            name="ASH"
            img={team_member_1}
            links={[
              {
                icon: <AiFillInstagram size={isBellow600px ? 22 : 30} />,
                link: "/",
              },
              {
                icon: <FaFacebookF size={isBellow600px ? 22 : 30} />,
                link: "/",
              },
              { icon: <FaTwitter size={isBellow600px ? 22 : 30} />, link: "/" },
            ]}
            desc={
              <>
                co founder and <br /> financial maestro
              </>
            }
          />
          <TeamCard
            name="WILLY"
            img={team_member_2}
            links={[
              {
                icon: <AiFillInstagram size={isBellow600px ? 22 : 30} />,
                link: "/",
              },
              {
                icon: <FaFacebookF size={isBellow600px ? 22 : 30} />,
                link: "/",
              },
              { icon: <FaTwitter size={isBellow600px ? 22 : 30} />, link: "/" },
            ]}
            desc={
              <>
                co founder, lbc temple
                <br />
                ambassador and operations
              </>
            }
          />
          <TeamCard
            name="BCC"
            img={team_member_3}
            links={[
              {
                icon: <AiFillInstagram size={isBellow600px ? 22 : 30} />,
                link: "/",
              },
              {
                icon: <FaFacebookF size={isBellow600px ? 22 : 30} />,
                link: "/",
              },
              { icon: <FaTwitter size={isBellow600px ? 22 : 30} />, link: "/" },
            ]}
            desc={
              <>
                nft ninja
                <br />
                advisor
              </>
            }
          />
          <TeamCard
            name="KSTAR"
            img={team_member_4}
            links={[
              {
                icon: <AiFillInstagram size={isBellow600px ? 22 : 30} />,
                link: "/",
              },
              {
                icon: <FaFacebookF size={isBellow600px ? 22 : 30} />,
                link: "/",
              },
              { icon: <FaTwitter size={isBellow600px ? 22 : 30} />, link: "/" },
            ]}
            desc={
              <>
                gatekeeper to the metaverse and our temple. best damn developer
                we know
              </>
            }
          />
          <TeamCard
            name="DILSHAN"
            img={team_member_5}
            links={[
              {
                icon: <AiFillInstagram size={isBellow600px ? 22 : 30} />,
                link: "/",
              },
              {
                icon: <FaFacebookF size={isBellow600px ? 22 : 30} />,
                link: "/",
              },
              { icon: <FaTwitter size={isBellow600px ? 22 : 30} />, link: "/" },
            ]}
            desc={
              <>
                our meta vinci, or cyber <br />
                van gogh... you get it
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
