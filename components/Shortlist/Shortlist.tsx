import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/shortlist.module.scss";
import ColumnLayout from "../ColumnLayout/ColumnLayout";
import { RoundedInput } from "../RoundedInput/RoundedInput";

const Shortlist = () => {
  const [user, setUser] = useState(true);
  if (user) {
    return <ColumnLayout>
    <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-2">
        <span className="text-extra-placeholder md:italic font-inter text-sm">{`O items`}</span>
        <div className="flex">
        <RoundedInput placeholder="Search for products..."/>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center py-8 space-y-2">
        <h1 className="text-3xl uppercase font-medium text-secondary font-pops tracking-tighter ">{`Please Log In`}</h1>
        <h1 className="text-text font-inter">{`Login to view items in your wishlist`}</h1>
        <Image src="/assets/svg/loginUserHero.svg" width={300} height={300}/>
        <button className="bg-primary-pink px-6 py-2 text-white font-pops rounded-full hover:bg-primary-pinkDark">{`Login`}</button>
    </div>
    </ColumnLayout>;
  }else{
    return <ColumnLayout>{`Not logged in`}</ColumnLayout>;
  }
};
export default Shortlist;
