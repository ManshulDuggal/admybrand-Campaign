/**
 * @author Rishi Raj
 * @email rishi@snaphy.com
 * @create date 2021-10-19 16:26:35
 * @modify date 2021-10-19 16:26:35
 * @desc [description]
 */
export const Validate = (inputFieldvalue,setErrors) => {
    let inputValue = inputFieldvalue;
    let error = {};
    let isValid = true;

    if (
      typeof inputValue["password"] !== "undefined" &&
      typeof inputValue["confirm_password"] !== "undefined"
    ) {
      if (inputValue["password"] !== inputValue["confirm_password"]) {
        isValid = false;
        error["password"] = "* Passwords don't match.";
      }

      if (inputValue["confirm_password"].length <= 7) {
        isValid = false;
        error["confirm_password"] =
          "* Password must have atleast  8 characters";

        if (inputValue["password"] !== inputValue["confirm_password"]) {
          isValid = false;
          error["password"] = "* Passwords don't match.";
        }
      }
    }

    setErrors(error);
    return isValid;
  };