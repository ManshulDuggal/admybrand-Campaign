import styles from "./longbutton/styles/longbutton.module.scss";
interface Props {
  buttontext: string;
  customstyleButton?: any;
  type?: any;
  onClick?: any;
}
const PrimaryBtn = ({
  buttontext,
  customstyleButton,
  type,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      className={`${styles.primaryBtn} ${customstyleButton}`}
      onClick={onClick}
    >
      {buttontext}
    </button>
  );
};

export default PrimaryBtn;
