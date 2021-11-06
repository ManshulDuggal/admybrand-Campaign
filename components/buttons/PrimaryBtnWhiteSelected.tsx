import styles from "./longbutton/styles/longbutton.module.scss";
import {HiCheckCircle} from "react-icons/hi";

const PrimaryBtnWhiteSelected = ({ buttontext }: { buttontext: string }) => {
  return (
    <button className={styles.primaryBtnWhiteSelected} type="button">
      {buttontext} <HiCheckCircle className={styles.primarycheck}/>
    </button>
  );
};

export default PrimaryBtnWhiteSelected;
