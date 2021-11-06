import React from "react";
import { BsDot } from "react-icons/bs";
import { quicklinks } from "../../constants/api/api";
import styles from "./styles/quicklinks.module.scss";

interface Link {
  key: string;
  name: string;
  url:string;
}
interface BottomLink {
  key: string;
  name: string;
  innerdata: Link[];
}

const Linksone = ({ data }: { data: BottomLink }) => {
  return (
    <div className={styles.linksone}>
      <div className={styles.linkheading}>
        <h3 className={styles.linkheadingnames}>{data.name}</h3>
      </div>
      <div className={styles.linknamecontainer}>
        {data.innerdata.map((i, _) => {
          return (
            <a href={i.url} target="_blank" className={styles.linkheadingname} key={i.key} rel="noreferrer">
              {i.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

const Quicklinks = () => {
  return (
    <div className={styles.quicklinksmaincontainer}>
      <div className={styles.innercontainer}>
        <div className={styles.topcontainer}>
          <div className={styles.lefttopcontainer}>
            {quicklinks[0].left.map((i: Link, _: number) => {
              if (_ === quicklinks[0].left?.length - 1) {
                return (
                  <div className={styles.itemcontainer} key={i.key}>
                    <a href={i.url} target="_blank" className={styles.link} rel="noreferrer">{i.name}</a>
                  </div>
                );
              } else {
                return (
                  <div className={styles.itemcontainer} key={i.key}>
                    <a href={i.url} target="_blank" className={styles.link} rel="noreferrer">{i.name}</a>
                    <div className={"md:flex justify-center items-center"}>
                      <BsDot className={styles.dot} />
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.righttopcontainer}>
            {quicklinks[1].right.map((i: Link, _: number) => {
              if (_ === quicklinks[0].left?.length - 1) {
                return (
                  <div className={styles.itemcontainer} key={i.key}>
                    <a href={i.url} target="_blank" className={styles.link} rel="noreferrer">{i.name}</a>
                  </div> 
                );
              } else {
                return (
                  <div className={styles.itemcontainer} key={i.key}>
                    <a href={i.url} target="_blank" className={styles.link} rel="noreferrer">{i.name}</a>
                    <div className={"md:flex justify-center items-center"}>
                      <BsDot className={styles.dot} />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className={styles.bottomcontainer}>
          {quicklinks[2].bottom.map((i: BottomLink) => {
            return <Linksone key={i.key} data={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Quicklinks;
