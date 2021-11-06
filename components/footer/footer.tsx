import React, { useRef } from "react";
import Link from "next/link";
import Item from "./helper/item";
import { countryData, payments, data } from "./../../constants/api/api";
import { paymentGrid, socialLinks,bottomFooterLinks } from "./helper/data";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles/footer.module.scss";
import { icons, svgs } from "../../constants/icons/icons";
const Footer = () => {
  const [expand, setExpand] = React.useState(false);

  const handleExpand = () => {
    if (expand === false) return setExpand(true);
    else setExpand(false);
  };

  const Button = () => (
    <a
      className={styles.button}
      onClick={() => {
        handleExpand();
      }}
      href={'#brandGrid'}
    >
      <span
        className={`${
          expand && `transform rotate-45`
        } flex justify-center items-center transition-all`}
      >
        <Image src={icons.plus} width={25} height={25} />
      </span>
      <span className="hidden sm:flex">{expand ? `Hide Acquisitions` : `Show Acquisitions`}</span>
    </a>
  );

  const Grid = () => {
    if (expand === true)
      return (
        <motion.div
          className={styles.gridcontainer}
          initial={{ y: 100 }}
          animate={{ y: -15 }}
          transition={{ duration: 0.1 }}
          
        >
          {data.map((component) => (
            <Item item={component} key={component.key} />
          ))}
        </motion.div>
      );
    else return null;
  };

  var footerdate = new Date();
  var footeryear = footerdate.getFullYear();

  return (
    <React.Fragment>
      <div className={styles.maincontainer} id={'brandGrid'}>
        <div className={styles.topcontainer}>
          <div className={styles.alternativePayment}>
            <Image
              src={icons.paymentStrip}
              height={26}
              width={839}
              objectFit={"contain"}
              quality={100}
              layout={"intrinsic"}
            />
          </div>
          <div className="lg:hidden flex flex-wrap items-center gap-2">
            {paymentGrid.map((item) => (
              <div className={item.styles} key={Math.random()}>
                <Image
                  src={item.imgSrc}
                  width={item.width}
                  height={item.height}
                  alt="img"
                  objectFit={"contain"}
                  quality={100}
                />
              </div>
            ))}

            {payments.map((component, index) => (
              <div key={index} className={styles.paymenttext}>
                {component.data}
              </div>
            ))}

            <div className={styles.coin}>
              <Image
                src={svgs.bitcoin}
                width={100}
                height={80}
                alt="img"
                objectFit={"contain"}
              />
            </div>
          </div>
          <div className="flex py-2 space-x-1 w-full justify-between items-center  lg:w-auto  flex-row-reverse lg:flex-row">
            <Button />
            <div className="flex space-x-1 justify-center sm:justify-start">
              {socialLinks.map((item, index) => (
                <div key={index} className={styles.social}>
                  <Link href={item.url}>
                  <Image
                    src={item.imgUrl}
                    width={20}
                    height={20}
                    alt="img"
                    quality={100}
                  />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Grid />
        <div className={styles.bottom}>
          <div className="text-sm text-secondary my-2 flex flex-col md:flex-row items-center space-x-2">
            <h1 className="mb-2 md:mb-0">{`© ${footeryear} ADmyBRAND  `}</h1>
            <ul className="flex flex-wrap gap-x-2 justify-center">
              {bottomFooterLinks.map((link) => (
                <li key={Math.random()}>
                  {` • `}
                  <span className="text-sm text-secondary space-x-1 hover:underline text-center">
                    <Link href={link.url}>{link.name}</Link>
                  </span>
                </li>
              ))}
              {`•`}
            </ul>
          </div>
          <div className="flex items-center my-2">
            <div>
              <Image
                src="/assets/svg/globe.svg"
                height={13.5}
                width={13.5}
                alt="img"
              />
            </div>
            <div className={styles.bottomtext}>{countryData.language}</div>
            <div className="ml-4">
              <Image
                src="/assets/images/india.png"
                height={13.5}
                width={13.5}
                alt="img"
              />
            </div>
            <div className={styles.bottomtext}>{countryData.country}</div>
            <div className={styles.bottomtext2}>{countryData.currency}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;