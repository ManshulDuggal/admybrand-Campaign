import React, { useState } from "react";
import styles from "./Enquiry.module.scss";
import Enquiryformcontainer from "./helper/enquiryformcontainer";
import { icons } from "../../constants/icons/icons";
import Image from "next/image";
import InputBox from "../../elements/InputBox.tsx/InputBox";
import { inputfields } from "../../constants/api/adagency";

const EnquiryForm = () => {
  const [data, setData] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <button
          className={styles.enquiryButton}
          onClick={() => setData(true)}
          style={{
            color: data ? "#E40678" : "#839FC0",
            borderBottomWidth: data ? 2 : 0,
            borderBottomColor: data ? "#E40678" : "#839FC0",
          }}
        >
          <h1>Enquiry</h1>
        </button>
        <button
          className={styles.referenceButton}
          onClick={() => setData(false)}
          style={{
            color: data ? "#839FC0" : "#E40678",
            borderBottomWidth: data ? 0 : 2,
            borderBottomColor: data ? "#839FC0" : "#E40678",
          }}
        >
          <h1>Refer a Brand</h1>
        </button>
      </div>
      <Enquiryformcontainer>
        {data ? (
          <>
            <form action="">
              <div className={styles.formcontrols}>
                {inputfields.map((item) => (
                  <InputBox
                    key={item.key}
                    heading={item.heading}
                    type={item.type}
                    placeholder={item.placeholder}
                  />
                ))}
              </div>
              <div className={styles.enquireButtonDiv}>
                <button className={styles.enquirebutton}>
                  <h2>Enquire</h2>
                  <Image
                    src={icons.privatearrowright}
                    alt="enquire"
                    height={15}
                    width={15}
                    className="object-cover"
                  />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div>
            <h1>Refer a Brand Content</h1>
          </div>
        )}
      </Enquiryformcontainer>
    </div>
  );
};
export default EnquiryForm;
