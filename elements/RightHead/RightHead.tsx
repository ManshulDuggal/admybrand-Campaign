/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-30 13:47:17
 * @modify date 2021-09-30 13:47:17
 * @desc [description]
 */
import { useRouter } from "next/router";
import React from "react";
import Iconsbtn from "../../components/ui/buttons/iconsbtn";
import Mediumbtn from "../../components/ui/buttons/mediumbtn";
import { svgs } from "../../constants/icons/icons";
import ProfileMenu from "../ProfileMenu";

// Styles
import styles from './RightHead.module.scss';

interface props {
    buttononetext?: string;
    buttontwotext?: string;
    type?: boolean;
    openmenustate?: boolean;
    setopenmenustate?: any;
    setContryOpened?: any;
    isContryOpened: boolean;
    buttononelink?: string;
    buttontwolink?: string;
    customrightcontainerstyle?: string;
}
const RightHead = ({ buttononetext, buttontwotext, type, openmenustate, setopenmenustate, isContryOpened, setContryOpened, buttononelink, buttontwolink, customrightcontainerstyle }: props) => {
    console.log(buttononetext, buttononelink);
    const router = useRouter();
    const onclicklink = (link: string) => {
        if (link) {
            router.push(link);
        }
    };

    return (
        <section className={`${type ? styles.rightHeadContainer : styles.rightHeadContainerSearchPage} ${customrightcontainerstyle}`}>
            {buttononetext && (<Mediumbtn onclick={() => onclicklink(buttononelink)} text={buttononetext} customstylebtn={`${styles.rightHeadAddspacebtn}`} />)}
            {buttontwotext && (<Mediumbtn onclick={() => onclicklink(buttontwolink)} text={buttontwotext} customstylebtn={`${styles.rightHeadAddagencybtn}`} customstylelabel={styles.addagencylabel} />)}
            <Iconsbtn onclick={() => setContryOpened(!isContryOpened)} customiconbtnstyles={`${styles.rightHeadIcons}`} imagesrc={svgs.globe} imagealt={'globe'} />
            <Iconsbtn onclick={() => onclicklink('/shortlist')} customiconbtnstyles={`${styles.rightHeadIcons}`} imagesrc={svgs.shortlist} imagealt={'shortlist'} />
            <Iconsbtn onclick={() => onclicklink('/bag')} customiconbtnstyles={`${styles.rightHeadIcons}`} imagesrc={svgs.bag} imagealt={'bag'} />
            <ProfileMenu openmenustate={openmenustate} setopenmenustate={setopenmenustate} />
        </section>
    )
}

export default RightHead;