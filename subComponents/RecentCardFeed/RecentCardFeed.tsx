import React from 'react'
import RoundedBorderCard from '../../components/RoundedBorderCard/RoundedBorderCard';
import globalStyles from "../../styles/feed.module.scss";
import localStyles from "./RecentCardFeed.module.scss";

export const RecentCardFeed = () => {
    return (
        <RoundedBorderCard>
        <div className={localStyles.wrapper}>
          <h1
            className={`${globalStyles.headingDark} font-pops`}
          >{`Recent`}</h1>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className={localStyles.listContainer}>
              <div className={localStyles.listContainerSecondary}>
                <h1
                  className={globalStyles.textLight}
                >{`${item}. Entertainment`}</h1>
              </div>
              <h1
                className={globalStyles.headingDark}
              >{`#4YrsofvalientVIVEGAM`}</h1>
              <p
                className={`${globalStyles.textLight} opacity-80`}
              >{`496 Tweets`}</p>
            </div>
          ))}
          <button className={localStyles.discoverBtn}>
            <span className={globalStyles.headingDark}>{`Discover More`}</span>
          </button>
        </div>
      </RoundedBorderCard>
    )
}
