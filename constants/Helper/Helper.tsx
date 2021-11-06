import { svgs } from "../icons/icons";

/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-28 18:03:37
 * @modify date 2021-09-28 18:03:37
 * @desc [description]
 */
export const menuhandler = (openmenustate, setopenmenustate, width) => {
    if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "auto";
    }
    if (!openmenustate && width < 800) {
        document.body.style.overflow = "hidden";
    }
    return openmenustate ? setopenmenustate(false) : setopenmenustate(true);
};

export const imageobj = {
    width: 36,
    height: 36,
    src: svgs.profilelogo,
};
export const imageobjmenu = {
    width: 36,
    height: 36,
    src: svgs.menu,
};
export const clossobj = {
    width: 24,
    height: 24,
    src: svgs.cross,
};