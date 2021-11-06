import Image from "next/image";
import styles from "./longbutton/styles/longbutton.module.scss";

const BtnWithSvg = ({ imagesrc }: { imagesrc: string }) => {
  return (
    <button className={styles.buttonWithSvg}>
      <Image src={imagesrc} height="24" width="30" alt={"alt"} />
    </button>
  );
};

export default BtnWithSvg;
