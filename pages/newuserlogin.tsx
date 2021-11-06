import Navigation from "../components/prevheader/header";
import styles from "/styles/newuserlogin.module.scss";
import SearchProduct from "../components/searchproduct/searchproduct";
import Image from "next/image";
const newUser = () => {
  const Login = "/assets/images/loginimage.png";
  return (
    <div className={styles.container}>
      <Navigation />
      <SearchProduct />
      <div className={styles.bodyContainer}>
        <h1 className={styles.loginHeading}>PLEASE LOG IN</h1>
        <h3 className={styles.subHeading}>
          Login to view items in your wishlist.
        </h3>
        <div className={styles.imageContainer}>
          <Image
            src={Login}
            height={230}
            width={230}
            className="object-contain"
            alt="img"
          />
        </div>
        <div className={styles.loginButton}>
          <button title="Login">
            <a className={styles.loginText}>Login</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default newUser;
