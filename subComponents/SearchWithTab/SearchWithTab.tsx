/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-30 16:51:18
 * @modify date 2021-09-30 16:51:18
 * @desc [description]
 */
import React from "react";

// Custom
import SearchDescription from "../../elements/SearchDescription";
import Slidingheader from "../../components/ui/slidingheader/slidingheader";
import { searchheader } from "../../constants/api/api";

// Styles 
import styles from './SearchWithTab.module.scss';
import Normalsearchouter from "../../components/search/normalsearchouter/normalsearchouter";
import Homesearch from "../../components/search/normalsearch/helpers/homesearch";

const SearchWithTab = () => {
    const [itemstate, setItemstate] = React.useState(0);
    const [moreState, setMoreState] = React.useState(true);
    const [tab, settab] = React.useState(0);

    return (
        <>
            <section className={styles.searchbarheader}>
                <Slidingheader
                    data={searchheader}
                    itemstate={itemstate}
                    morestate={moreState}
                    onclickitem={(e, index) => {
                        setItemstate(index);
                        settab(itemstate);
                    }}
                    onclickmore={() => setMoreState(!moreState)}
                    previoustab={tab}
                    elementwidth={208}
                />
            </section>
            <SearchDescription itemstate={itemstate} />
            <Normalsearchouter>
                <Homesearch state={itemstate} />
            </Normalsearchouter>
        </>
    )
}

export default SearchWithTab;
