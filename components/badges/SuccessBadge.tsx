import styles from "./styles/badges.module.scss";

const SuccessBadge = ({ buttontext }: { buttontext: string }) => {
  return <span className={styles.successBadge}>{buttontext}</span>;
};

export default SuccessBadge;
