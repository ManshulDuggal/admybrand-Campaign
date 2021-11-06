import React from "react";
import Footer from "../components/footer/footer";
import Homeheader from "../components/Header/Header";
import Shortlist from "../components/Shortlist/Shortlist";

const shortlist = () => {
  return (
    <>
      <Homeheader
        type={true}
        ninedots
        buttononetext={"Sell Ad Space"}
        buttontwotext={"Ad Agency"}
      />
      <Shortlist/>
      <Footer />
    </>
  );
};
export default shortlist;
