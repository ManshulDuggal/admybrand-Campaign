import styles from "./styles/hoardingmodal.module.scss";
import { icons } from "../../../../constants/icons/icons";
import { hoardingData } from "../../../../constants/api/hoarding";
import Image from "next/image";

interface Modal {
  hoardingModal: any;
  setHoardingModal: any;
}
const Hoardingmodal = (props: Modal) => {
  return (
    <div>
      {props.hoardingModal && (
        <div className={styles.container}>
          <div className={styles.closecontainer}>
            <button
              onClick={() => props.setHoardingModal(!props.hoardingModal)}
            >
              <Image
                src={icons.close}
                alt="close"
                height={25}
                width={25}
                className="object-contain"
              />
            </button>
          </div>
          <div
            className={styles.body}
            onMouseOut={() => props.setHoardingModal(!props.hoardingModal)}
          >
            {hoardingData.map((item) => (
              <h1 key={item.key} className={styles.item}>
                {item.name}
              </h1>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hoardingmodal;
