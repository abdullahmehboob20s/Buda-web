import React from "react";
import styles from "./Story.module.css";
import story_images_collection from "assets/images/story_images_collection.png";
import Title from "components/Title/Title";
import useMediaQuery from "hooks/useMediaQuery";

function Story() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");

  return (
    <div className="container-wrapper">
      <Title
        title="Story Behind The Buddhas."
        className={`text-center ${isBellow1000px ? "mb-30px" : "mb-50px"}`}
      />

      <div className={`${isBellow1000px ? "mb-30px" : "mb-60px"}`}>
        <p
          className={`${
            isBellow1000px
              ? isBellow600px
                ? "fs-10px mb-15px"
                : "fs-16px mb-20px"
              : "fs-24px mb-30px"
          } white uppercase text-center `}
        >
          there once was a time when the world was in a state of turmoil.
          despite the strides humanity had made with technology humans remained
          ignorant and selfish. unwilling to help one another if they did not
          see any benefits for self gain.
        </p>
        <p
          className={`${
            isBellow1000px
              ? isBellow600px
                ? "fs-10px mb-15px"
                : "fs-16px mb-20px"
              : "fs-24px mb-30px"
          } white uppercase text-center`}
        >
          but in the midst of this chaos, a group of awakened people emerged and
          together decided that it was time they went on a quest to find the
          buddha.
        </p>
        <p
          className={`${
            isBellow1000px
              ? isBellow600px
                ? "fs-10px mb-15px"
                : "fs-16px"
              : "fs-24px"
          } white uppercase text-center`}
        >
          after months of searching the world, the group eventually found a
          temple deep within the mountain ranges. inside it, they found the
          buddha. who knew exactly what to do.
        </p>
      </div>

      <div
        className={`${styles.images_collection} ${
          isBellow600px ? "mb-25px" : "mb-70px"
        }`}
      >
        <img src={story_images_collection} className="w-full" alt="" />
      </div>

      <div>
        <h4
          className={`text-center ${
            isBellow1000px
              ? isBellow600px
                ? "fs-14px mb-10px"
                : "fs-18px mb-20px"
              : "fs-26px"
          } white `}
        >
          it’s time”, the buddha said.
        </h4>

        <div
          className={`${styles.buddha_said} ${
            isBellow1000px ? (isBellow600px ? "fs-12px" : "fs-20px") : "fs-28px"
          } text-center yellow relative w-fit-content margin-center`}
        >
          time we spread the dao and transcended into a new era.
          {/* <span className={`${styles.quote_style} yellow fs-60px`}>"</span> */}
        </div>
      </div>
    </div>
  );
}

export default Story;
