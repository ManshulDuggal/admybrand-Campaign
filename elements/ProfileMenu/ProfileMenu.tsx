/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-28 17:51:54
 * @modify date 2021-09-28 17:51:54
 * @desc [description]
 */
import React, { useState } from "react";
// Custom
import Mediumbtn from "../../components/ui/buttons/mediumbtn";
import Iconsbtn from "../../components/ui/buttons/iconsbtn";
import Dropdown from "../../components/ui/dropdown/dropdown";
import { useDimentions } from "../../customhooks/customhooks";
import { smallmenudata } from "../../constants/api/api";
import { menuhandler, imageobj, imageobjmenu, clossobj } from '../../constants/Helper/Helper';
import { svgs } from "../../constants/icons/icons";

// styles
import styles from './ProfileMenu.module.scss';

interface props {
    openmenustate?: boolean,
    setopenmenustate?: Function
}
const ProfileMenu = ({ openmenustate, setopenmenustate }: props) => {
    const [height, width] = useDimentions();
    const smallmenu = React.useRef<HTMLElement>();

    return (
        <section className={styles.profileMenuMenuwrapper} onMouseLeave={width >= 1330 ? () => menuhandler(openmenustate, setopenmenustate, width) : null}>
            <Mediumbtn onclick={() => menuhandler(openmenustate, setopenmenustate, width)} customstylebtn={`${styles.profileMenuContainer}`}>
                <Iconsbtn customiconbtnstyles={`${styles.menuicons}`} imagesrc={svgs.menu} imagealt={'menu'} imageprops={imageobjmenu} />
                <Iconsbtn customiconbtnstyles={`${styles.menuicons}`} imagesrc={svgs.profilelogo} imagealt={'profilelogo'} imageprops={imageobj} />
            </Mediumbtn>
            {
                openmenustate && width >= 800 && (<div><Dropdown smallmenudata={smallmenudata} customstyle={`${styles.smallmenu}`} ref={smallmenu} /></div>)
            }
        </section>
    )
}

export default ProfileMenu;