import styles from "./styles/badges.module.scss";

const DefaultBadge = ({ buttontext }: { buttontext: string }) => {
  return <span className={styles.defaultBadge}>{buttontext}</span>;
};

export default DefaultBadge;
