import Image from "next/image";
import React from "react";
import { icons } from "../../constants/icons/icons";
import Shortmenumodal from "../modal/shortmenumodal/shortmenumodal";
import styles from "./styles/header.module.scss";
import Link from "next/link";

interface props {
  state?: boolean;
  setState?: any;
}
const Header = ({ state, setState }: props) => {
  const modalState = () => {
    setState(!state);
  };

  return (
    <div className={styles.headercontainer}>
      <div className={styles.leftcontainer}>
        <div className={styles.ninedots}>
          <Image
            src={"/assets/svg/nine.svg"}
            height={23}
            width={23}
            objectFit={"contain"}
            alt="img"
          />
        </div>
        <div className={styles.logocontainer}>
          <Image
            src={"/assets/svg/logo.svg"}
            height={30}
            width={170}
            objectFit={"fill"}
            alt="img"
          />
        </div>
        <div className={styles.logocontainermobile}>
          <Image
            src={icons.logo}
            height={18}
            width={116}
            objectFit={"fill"}
            alt="img"
          />
        </div>
      </div>
      <div className={styles.rightcontainer}>
        <div className={styles.sellcontainer}>
          <h3 className={styles.sellcontainertext}>Sell Ad space</h3>
        </div>
        <Link href="/adagency" passHref>
          <div className={styles.adcontainer}>
            <h3 className={styles.adcontainertext}>Ad Agency</h3>
          </div>
        </Link>

        <div className={styles.globecontainer} onClick={modalState}>
          <Image
            src={icons.globe}
            height={18}
            width={18}
            objectFit={"contain"}
            onClick={modalState}
            alt="img"
          />
        </div>
        <div className={styles.heartcontainer}>
          <Image
            src={icons.heart}
            height={18}
            width={18}
            objectFit={"contain"}
            alt="img"
          />
        </div>
        <div className={styles.bagcontainer}>
          <Image
            src={icons.bag}
            height={18}
            width={18}
            objectFit={"contain"}
            alt="img"
          />
        </div>
        <button className={styles.menucontainer}>
          <div className={styles.menuiconcontainer}>
            <Image
              src={icons.menu}
              height={24}
              width={24}
              objectFit={"contain"}
              alt="img"
            />
          </div>
          <div className={styles.userpiccontainer}>
            <Image
              src={icons.user}
              height={40}
              width={40}
              objectFit={"contain"}
              alt="img"
            />
          </div>
          <Shortmenumodal style={styles.menudrawer}>
            <div className={styles.menutopcontainer}>
              <ul>
                <li>
                  <Link href={"#"}>
                    <a>Log in</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Sign up</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.menubottomcontainer}>
              <ul>
                <li>
                  <Link href={"#"}>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>View Demo</a>
                  </Link>
                </li>
              </ul>
            </div>
          </Shortmenumodal>
          {/* <Mobilefullscreenmodal customstyles={styles.mobilemenucontainer} >
              <Menudrawer />
          </Mobilefullscreenmodal> */}
        </button>
      </div>
    </div>
  );
};

export default Header;
