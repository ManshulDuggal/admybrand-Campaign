import React from "react";
import { bottomFooterLinks, countryData } from "./data";
import Link from "next/link";
import styles from "../footer.module.scss";
import ImageWithWrap from "../../../elements/ImageWithWrap/ImageWithWrap";

const Bottom = () => {
  var footerdate = new Date();
  var footeryear = footerdate.getFullYear();

  return (
    <div className={styles.bottom}>
      <div className={styles.bottomleftcontainer}>
        <h1 className="mb-2 md:mb-0">{`© ${footeryear} ADmyBRAND  `}</h1>
        <ul className="flex flex-wrap gap-x-2 justify-center">
          {bottomFooterLinks.map((link) => (
            <li key={Math.random()}>
              <span className="text-sm text-secondary space-x-1 hover:underline">
                <Link href={link.url}>{link.name}</Link>
              </span>
              {` •`}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center my-2">
        <ImageWithWrap
          source="/assets/svg/globe.svg"
          height={13.5}
          width={13.5}
        />
        <div className={styles.bottomtext}>{countryData.language}</div>

        <ImageWithWrap
          styles="ml-4"
          source="/assets/images/india.png"
          height={13.5}
          width={13.5}
        />
        <div className={styles.bottomtext}>{countryData.country}</div>
        <div className={styles.bottomtext2}>{countryData.currency}</div>
      </div>
    </div>
  );
};

export default Bottom;
