/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-25 22:28:41
 * @modify date 2021-09-25 22:28:41
 * @desc [description]
 */
import React, { useState } from 'react'
import Loadable from 'react-loadable'

import Privatecomponent from '../../components/privatecomponents/privatecomponent'
import Quicklinks from '../../components/quicklinks/quicklinks'
import Quicklinkstwo from '../../components/quiklinkstwo/quicklinkstwo'
import Scrollanimation from '../../components/scrollanimation/scrollanimation'
import Scrollfive from '../../components/scrollcomponents/scrollfive/scrollfive'
import Scrollfour from '../../components/scrollcomponents/scrollfour/scrollfour'
import Scrollone from '../../components/scrollcomponents/scrollone/scrollone'
import Scrollthree from '../../components/scrollcomponents/scrollthree/scrollthree'
import SecondaryFooter from '../../components/secondaryfooter/secondaryfooter'
import Normalsearchouter from '../../components/search/normalsearchouter/normalsearchouter'
import Homesearch from '../../components/search/normalsearch/helpers/homesearch'
import DownloadApp from '../../components/downloadapp/downloadapp'
import Footer from '../../components/footer/footer'
import Header from '../Header/Header'
import Slidingheader from '../../components/ui/slidingheader/slidingheader'
import { searchdescription, searchheader } from '../../constants/api/api'
import BannerScroll from '../scrollcomponents/BannerScroll/BannerScroll'

// Styles
import styles from './HomeComp.module.scss'
import SearchWithTab from '../../subComponents/SearchWithTab'

const LoadableScrollOne = Loadable({
  loader: () => import('../../components/scrollcomponents/scrollone/scrollone'),
  loading: 'Loading'
})

const HomeComp = () => {
  const onLeft = () => {
    const getbtn: any = document.querySelector(
      '#scrollfour .swiper-button-prev'
    )
    getbtn.click()
  }
  const onRight = () => {
    const getbtn: any = document.querySelector(
      '#scrollfour .swiper-button-next'
    )
    getbtn.click()
  }
  const onLeftscroll = () => {
    const getbtn: any = document.querySelector('#scrollsix .swiper-button-prev')
    getbtn.click()
  }
  const onRightscroll = () => {
    const getbtn: any = document.querySelector('#scrollsix .swiper-button-next')
    getbtn.click()
  }

  const scrollfuction = () => {
    const scrollelement: any = document.querySelector('#scrollthree')
    scrollelement.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id={styles.wrapper}>
      <section className={styles.maintop}>
        <Header
          type={true}
          ninedots
          buttononetext={'Sell Ad Space'}
          buttontwotext={'Ad Agency'}
          buttontwolink={'/adagency'}
        />
        <div className='min-h-screen md:min-h-0'>
          {/* <LoadableScrollOne /> */}
          <Scrollone />
          <SearchWithTab />
          <DownloadApp />
          <Scrollanimation onClick={() => scrollfuction()} />
        </div>

        <BannerScroll />
      </section>
      <Scrollthree id={'scrollthree'} />
      <Scrollfour
        id={'scrollfour'}
        name={'Popular Media Owner'}
        onLeft={() => onLeft()}
        onRight={() => onRight()}
      />

      <Scrollfour
        name={'Adspaces you should try'}
        onLeft={() => onLeftscroll()}
        onRight={() => onRightscroll()}
        id={'scrollsix'}
      />
      <Privatecomponent />
      <Quicklinks />
      <Quicklinkstwo />
      <SecondaryFooter />
      <Footer />
    </div>
  )
}

export default HomeComp
