import styles from "./styles/badges.module.scss";

const PromotionBadge = ({ buttontext }: { buttontext: string }) => {
  return <span className={styles.promotionBadge}>{buttontext}</span>;
};

export default PromotionBadge;
