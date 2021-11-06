import styles from "./longbutton/styles/longbutton.module.scss";

const PrimaryBtnWhite = ({ buttontext }: { buttontext: string }) => {
  return (
    <button className={styles.primaryBtnWhite} type="button">
      {buttontext}
    </button>
  );
};

export default PrimaryBtnWhite;
