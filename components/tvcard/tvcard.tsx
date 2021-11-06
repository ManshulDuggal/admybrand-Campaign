import React from "react";
import Image from "next/image";
import styles from "./styles/tvcard.module.scss";
import { svgs } from "../../constants/icons/icons";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineBook,
  AiOutlineYoutube,
} from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { BiBuildings, BiBus } from "react-icons/bi";
import { RiAdvertisementLine } from "react-icons/ri";
import TvScrollsmall from "../scrollcomponents/tvscrollsmall/tvscrollsmall";

function Tvcard() {
  const onLeft = () => {
    const getbtn: any = document.querySelector(
      "#scrolleight .swiper-button-prev"
    );
    getbtn.click();
  };
  const onRight = () => {
    const getbtn: any = document.querySelector(
      "#scrolleight .swiper-button-next"
    );
    getbtn.click();
  };

  return (
    <div className={styles.tvcardStyle}>
      <div className={styles.tvcardContainer}>
        <div>
          <p className={styles.tvcardHeading}>Rate a channel</p>
        </div>
        <div className="flex mb-6 justify-between">
          <div className={styles.tvlinksimg}>
            <Image
              src={svgs.googleplay}
              height={48}
              width={158}
              objectFit={"contain"}
              alt="img"
            />
          </div>
          <div className={styles.tvcardReview}>Write a Review</div>
        </div>

        <div className={styles.tvcardLikeRow}>
          <div className={styles.tvcardLikeText}>
            <div className={styles.tvcardLikeTextHeading}>
              80% users like this TV channel
            </div>
            <div className={styles.tvcardLikeTextPara}>AdmyBrand users</div>
          </div>
          <div className={styles.tvcardLike}>
            <AiFillLike className={styles.tvcardLikeBtn} />
            <AiFillDislike className={styles.tvcardLikeBtn} />
          </div>
        </div>

        <div className={styles.tvcardBookRow}>
          <div className={styles.tvcardBookElement}>
            <HiOutlineClipboardList className={styles.tvcardBookIcon} />
            <div className={styles.tvcardBookText}>Mandate to ADmyBRAND</div>
          </div>
          <div className={styles.tvcardBookBorder}></div>

          <div className={styles.tvcardBookElement}>
            <IoCalendarOutline className={styles.tvcardBookIcon} />
            <div className={styles.tvcardBookText}>Book a Consultation</div>
          </div>
        </div>

        <div className={styles.tvcardTools}>
          <div className={styles.tvcardToolsHeading}>Tools Links</div>
          <div className={styles.tvcardToolsGrid}>
            <div className={styles.tvcardToolsElements}>
              <RiAdvertisementLine
                className={styles.tvcardToolsElementsIcons}
              />
              <div className={styles.tvcardToolsElementsText}>Tool 1</div>
            </div>
            <div className={styles.tvcardToolsElements}>
              <BiBus className={styles.tvcardToolsElementsIcons} />
              <div className={styles.tvcardToolsElementsText}>Tool 2</div>
            </div>
            <div className={styles.tvcardToolsElements}>
              <BiBuildings className={styles.tvcardToolsElementsIcons} />
              <div className={styles.tvcardToolsElementsText}>Tool 3</div>
            </div>
            <div className={styles.tvcardToolsElements}>
              <AiOutlineYoutube className={styles.tvcardToolsElementsIcons} />
              <div className={styles.tvcardToolsElementsText}>Tool 4</div>
            </div>
            <div className={styles.tvcardToolsElements}>
              <AiOutlineBook className={styles.tvcardToolsElementsIcons} />
              <div className={styles.tvcardToolsElementsText}>Tool 5</div>
            </div>
          </div>
        </div>

        <div className={styles.tvcardCards}>
          <div className={styles.tvcardCardsHeading}>
            People also search for
          </div>
          <div className={styles.tvcardCardsGrid}>
            <TvScrollsmall
              id={"scrolleight"}
              name={""}
              onLeft={() => onLeft()}
              onRight={() => onRight()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tvcard;
