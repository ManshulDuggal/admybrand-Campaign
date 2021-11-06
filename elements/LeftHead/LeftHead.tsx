/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-28 15:41:06
 * @modify date 2021-09-28 15:41:06
 * @desc [description]
 */
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Custom
import Ninedots from "../../components/ui/ninedots/ninedots";
import { svgs } from "../../constants/icons/icons";
import { useDimentions } from "../../customhooks/customhooks";
import Homelogo from "../../components/ui/logocontainer/homelogo";

// Styles
import styles from './LeftHead.module.scss';

interface props {
    ninedots?: boolean;
    type?: boolean;
}

const LeftHead = ({ ninedots, type }: props) => {
    const [showNineDots, toggleNineDots] = useState(false);
    const [height, width] = useDimentions();
    const router = useRouter();
    return (
        <section
            className={`${type ? styles.leftHeadContainer : styles.leftcontainerSearchPage}`}>
            {ninedots && (
                <section
                    className={styles.leftHeadNinedots}
                    onClick={() => toggleNineDots(true)}
                >
                    <Image
                        src={svgs.ninedots}
                        height={width >= 1065 ? 20 : 16}
                        width={width >= 1065 ? 20 : 16}
                        alt={"ninedots"}
                        className={"cursor-pointer"}
                        objectFit={"contain"}
                    />
                </section>
            )}
            {showNineDots && <Ninedots toggleNineDots={toggleNineDots} />}
            <Homelogo
                customstyle={styles.leftHeadHomelogo}
                onclick={() => router.push('/')}
                imagesrc={svgs.weblogo}
                imagealt={"brandlogo"}
            />
        </section>
    )
}

export default LeftHead;