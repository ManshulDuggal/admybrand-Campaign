import styles from "./styles/searchproduct.module.scss";
import Image from "next/image";
import { icons } from "../../constants/icons/icons";
const searchProduct = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.items}>0 items</h3>
      </div>
      <div className={styles.inputContainer}>
        <Image
          height={16}
          width={16}
          className={styles.imgContainer}
          src={icons.textboxsearch}
          alt="search"
        />
        <input placeholder="Search for products" className={styles.inputText} />
      </div>
    </div>
  );
};
export default searchProduct;
