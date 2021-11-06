import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDimentions } from "../../customhooks/customhooks";
import Headercard from "../ui/headercard/headercard";
import classes from "./Header.module.scss";
import Headerrowtwo from "../headerrowtwo/headerrowtwo";
import LeftHead from "../../elements/LeftHead";
import RightHead from '../../elements/RightHead';
import CountryModal from "../countrymodal/countrymodal";

interface props {
  children?: React.ReactNode;
  buttononetext?: string;
  buttontwotext?: string;
  buttononelink?: string;
  buttontwolink?: string;
  customrightcontainerstyle?: string;
  ninedots?: boolean;
  type?: boolean;
}

const Header = ({
  type,
  buttononetext,
  buttontwotext,
  buttononelink,
  buttontwolink,
  children,
  customrightcontainerstyle,
  ninedots,
}: props) => {
  const router = useRouter();
  const [height, width] = useDimentions();
  const [openmenustate, setopenmenustate] = useState(false);
  const [state, setState] = useState(true);

  const onclicklink = (link: string) => {
    router.push(link);
  };

  let parentClass = `${type ? classes.headercontainer : classes.headercontainerSearchPage}`
  return (
    <>
    <CountryModal state={state} setState={setState} />
      <Headercard
        type={type}
        customstyle={parentClass}
      >
        <div className='flex justify-between flex-grow'>
          <LeftHead ninedots={ninedots} type={type} />
          {children}
          <RightHead
            setContryOpened={setState}
            buttononetext={buttononetext}
            buttontwotext={buttontwotext}
            type={type}
            openmenustate={openmenustate}
            setopenmenustate={setopenmenustate}
            isContryOpened={state}
            buttononelink={buttononelink}
            buttontwolink={buttontwolink}
            customrightcontainerstyle={customrightcontainerstyle} />
        </div>
        <div className={`${type ? 'hidden' : 'block'}`}>
          <Headerrowtwo />
        </div>
      </Headercard>    
    </>
  );
};

export default Header;
