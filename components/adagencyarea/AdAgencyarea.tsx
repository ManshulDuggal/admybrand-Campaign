import React from "react";
// Custom
import AdAgencyTabs from "../scrollcomponents/adagencytabs/adagencytab";
import DownloadApp from "../downloadapp/downloadapp";
import Scrollanimation from "../scrollanimation/scrollanimation";
import FloatingImages from "../floatingimages/floatingimages";
import Footer from "../footer/footer";
import EnquiryForm from "../enquiryform/enquiryform";
import ConsultationArea from "./consultation/consultationarea";
import Header from "../Header/Header";
import CreditArea from "./credit/creditarea";
import DesignCenter from "./designcenter/designcenter";
import AdServiceArea from "./adservice/adservice";
import CustomerReview from "./customerreview/customerreview";
import BrandsArea from "../../subComponents/Brands";

// Styles
import styles from "../../styles/adagency.module.scss";

export default function AdAgencyarea() {
  const scrollfuction = () => {
    const scrollelement: any = document.querySelector("#floating_images");
    scrollelement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.maincontainer}>
        <Header
          type={true}
          ninedots
          buttononetext={"Agency Partnership Program"}
          buttontwotext={"Marketplace"}
          buttononelink={'https://in.admybrand.com/agencies'}
          buttontwolink={'/'}
        />
        <AdAgencyTabs />
        <DownloadApp />
        <Scrollanimation onClick={() => scrollfuction()} />
        <div className="lg:w-5/12">
          <h1 id={"floating_images"} className={styles.heading}>
            Preferred Marketing partner of leading brands across the world
          </h1>
        </div>
        <FloatingImages />
        <ConsultationArea />
        <h1 className={styles.heading}>Made in India for the World</h1>
        <BrandsArea />
        <CreditArea id={"credit_area"} />
        <DesignCenter />
        <AdServiceArea />
        <h1 className={styles.heading}>What they say about Us</h1>
        <CustomerReview />
        <EnquiryForm />
      </div>
      <Footer />
    </>
  );
}
