import { GetServerSideProps, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import styles from "./styles/quicklinkstwo.module.scss";

const Quicklinkstwo = () => {
  const [quickLinksData, setQuickLinksData] = useState<any>([]);
  const [quickLinksList, setQuickLinksList] = useState<any>([]);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    fetch("https://staging-api.admybrand.com/quicklinks/get")
      .then((raw) => raw.json())
      .then((data) => {
        setQuickLinksData(data.reverse());
        setQuickLinksList(data[0].links);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={`${styles.quicklinkstwomainlg}`}>
      <div className={`${styles.quickwrapperlg}`}>
        <div className={styles.quickheading}>
          <h3 className={styles.quickheadingname}>{"Quick Links"}</h3>
        </div>
        <div className={styles.quickdescription}>
          <div className={styles.quickbtn}>
            <h3 className={styles.quickdescriptionone}>
              {"Data Science Labs"}
            </h3>
          </div>
          <div className={styles.quickbtn}>
            <h3 className={styles.quickdescriptiontwo}>{"Seller Apps"}</h3>
          </div>
        </div>
      </div>
      <div className={styles.selectrow}>
        {quickLinksData.map((i, index) => {
          if (selected === index) {
            return (
              <div className={styles.selected} key={index}>
                {i.name}
              </div>
            );
          } else {
            return (
              <div
                onClick={() => {
                  setSelected(index), setQuickLinksList(i.links);
                }}
                className={styles.unselected}
                key={index}
              >
                {i.name}
              </div>
            );
          }
        })}
      </div>
      <div className={styles.quicklinksdescription}>
        {quickLinksList.sort((first,last)=>first.name.length - last.name.length).map((item, index) => (
          <h1 className={styles.quicklinkdescriptionText} key={index}>
            <a href={item.url} className="px-2" target="_blank" rel="noreferrer">
              {item.name}
            </a>
          </h1>
        ))}
      </div>
    </div>
  );
};


export default Quicklinkstwo;
