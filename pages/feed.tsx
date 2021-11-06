import React from "react";
import Homeheader from "../components/Header/Header";
import Feed from "../components/Feed/Feed";
import Footer from "../components/footer/footer";

const feed = () => {
  return (
    <>
      <Homeheader
        type={true}
        ninedots
        buttononetext={"Sell Ad Space"}
        buttontwotext={"Ad Agency"}
      />
      <Feed/>
    </>
  );
};

export default feed;
