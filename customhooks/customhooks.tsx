import React from "react";

export const useDimentions = () => {
  const [dimention, setDimention] = React.useState([]);
  React.useEffect(() => {
    setDimention([window.innerHeight, window.innerWidth]);
  }, []);
  React.useEffect(() => {
    const resizehandler = () => {
      setDimention([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", resizehandler);
    return () => {
      window.removeEventListener("resize", resizehandler);
    };
  }, []);
  return dimention;
};
