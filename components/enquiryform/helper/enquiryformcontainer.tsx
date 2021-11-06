import styles from "../Enquiry.module.scss";
export interface props {
  children: JSX.Element | JSX.Element[];
}

const EnquiryFormContainer = ({ children }: props) => {
  return <div className={styles.formcontainer}>{children}</div>;
};
export default EnquiryFormContainer;
