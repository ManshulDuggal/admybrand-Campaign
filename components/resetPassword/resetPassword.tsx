import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./resetPassword.module.scss";
import PrimaryBtn from "../buttons/PrimaryBtn";
import DownloadApp from "../downloadapp/downloadapp";
import InputBox from "../../elements/InputBox.tsx/InputBox";
import { Validate } from "./Validation";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { updatePassword } from "../../store/user/userAction";
import { useRouter } from "next/router";

function ResetPassword() {
  interface IFormValues {
    password?: any;
    confirm_password?: any;
    responseError?: any;
  }
  const [inputFieldvalue, setInputFieldvalue] = useState<IFormValues>({
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState<IFormValues>({
    password: "",
    confirm_password: "",
    responseError: "",
  });

  const inputElement = (heading: string, value: string, name: string) => {
    return (
      <InputBox
        type="password"
        placeholder="Enter your password"
        customstyleheading={`${styles.customHeading}`}
        customstyleInputBox={`${styles.customInputBox}`}
        customstyleInputDiv={`${styles.customDiv}`}
        heading={heading}
        required={true}
        onChange={handleChange}
        value={value}
        name={name}
      />
    );
  };

  const handleChange = (event: any) => {
    let inputValue = inputFieldvalue;

    inputValue[event.target.name] = event.target.value;

    setInputFieldvalue({ ...inputValue });
  };
  const { query } = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter();

  const SubmitHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (Validate(inputFieldvalue, setErrors)) {
      try {
        if (
          inputFieldvalue.password !== "" &&
          query.id !== "" &&
          loading === false
        ) {
          setloading(true);
          await dispatch(
            updatePassword({
              key: String(query.id),
              password: inputFieldvalue.password,
            })
          );
          let input = {};
          input["password"] = "";
          input["confirm_password"] = "";
          setInputFieldvalue(input);
          setloading(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const homeHandler = () => {
    router.push({
      pathname: "/",
    });
  };
  const isPassUpdated = useAppSelector((state) => state.user.updated);
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.divContainer}>
          <div className={styles.ImgDiv}>
            <Image
              src={"/assets/svg/logo.svg"}
              height={50}
              width={170}
              objectFit={"fill"}
              alt="img"
            />
          </div>
          {isPassUpdated && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "2rem",
              }}
            >
              <div
                className={styles.passwordContainer}
                style={{
                  fontSize: "1.1rem",
                  color: "#000",
                  paddingBottom: "1rem",
                }}
              >
                <p>Password changed successfully!</p>
              </div>
              <PrimaryBtn
                type="button"
                onClick={homeHandler}
                customstyleButton={`${styles.customstyleButton}`}
                buttontext={"Home"}
              />
            </div>
          )}
          {/* {isPassUpdated === false && (
            <p className={styles.errorMessage}>Failed to update password</p>
          )} */}
          {!isPassUpdated && (
            <div>
              <h1
                className={styles.resetHeading}
                style={{ fontFamily: "inter" }}
              >
                Reset Password
              </h1>
              <div className={styles.passwordContainer}>
                Create New ADmyBRAND Password
              </div>
              <form onSubmit={SubmitHandler}>
                <div className={styles.inputContainer}>
                  {inputElement(
                    "Password",
                    inputFieldvalue.password,
                    "password"
                  )}
                  {inputElement(
                    "Confirm Password",
                    inputFieldvalue.confirm_password,
                    "confirm_password"
                  )}

                  <p className={styles.errorMessage}>{errors.password}</p>
                  <p className={styles.errorMessage}>
                    {errors.confirm_password}
                  </p>
                </div>
                <div className={styles.buttonContainer}>
                  <PrimaryBtn
                    type="submit"
                    customstyleButton={`${styles.customstyleButton}`}
                    buttontext={loading ? "..." : "Reset"}
                  />
                </div>
              </form>
            </div>
          )}
        </div>
        <div className={styles.downloadapp}>
          <DownloadApp />
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
