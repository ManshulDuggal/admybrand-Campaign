import React from 'react'
import Image from "next/image";
import RoundedBorderCard from '../../components/RoundedBorderCard/RoundedBorderCard';
import globalStyles from "../../styles/feed.module.scss";
import localStyles from "./TopCourses.module.scss";
import { svgs } from '../../constants/icons/icons';

 const TopCourses = () => {
    return (
        <RoundedBorderCard>
            <div className={localStyles.wrapper}>
              <h1
                className={`${globalStyles.headingDark} font-pops`}
              >{`Today’s Top Courses`}</h1>
              <div className={localStyles.secondaryWrapper}>
                {[1, 2].map((item) => (
                  <div className={localStyles.coursesListItem} key={item}>
                    <h1 className={globalStyles.headingDark}>{`${item}.`}</h1>
                    <div className={localStyles.coursesSubListItem}>
                      <h1
                        className={globalStyles.headingDark}
                      >{`Excel: VLOOKUP and XLOOKU...`}</h1>
                      <p
                        className={globalStyles.textLight}
                      >{`Jess Stratton`}</p>
                    </div>
                  </div>
                ))}
                <h1
                  className={`${globalStyles.textPink} ${localStyles.showMoreCaption}`}
                >
                  {`Show More`}
                  <Image src={svgs.arrowPinkRight} width={24} height={24} />
                </h1>
              </div>
            </div>
          </RoundedBorderCard>
    )
}
export default TopCourses;