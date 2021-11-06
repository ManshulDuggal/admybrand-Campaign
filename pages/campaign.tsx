import React from 'react'
import CampaignHeader from '../components/campaign/CampaignHeader'
import MarketingSuit from '../components/campaign/MarketingSuit'
import Desired from '../components/campaign/Desired'
import BrowseMedia from '../components/campaign/BrowseMedia'
import ShareClients from '../components/campaign/ShareClients'
import BoostSales from '../components/campaign/BoostSales'
import ClicksSection from '../components/campaign/ManageClicksSection'
import AgencyPartnership from '../components/campaign/AgencyPartnership'
import FormArea from '../components/campaign/FormArea'
import Footer from '../components/footer/footer'

const Campaign = () => {
  return (
    <div className='overflow-hidden'>
      {/* Header */}
      <CampaignHeader />
      {/* Section Marketing Suit */}

      <MarketingSuit />

      {/* Section "All that you desire" */}
      <Desired />
      {/* Browse Media Section */}
      <BrowseMedia />
      {/* Share With Your Clients Section */}
      <ShareClients />

      {/* Boost your Sales Column */}
      <BoostSales />
      {/* Manage on clicks Sections */}
      <ClicksSection />
      {/* Agency Partnership Program section */}
      <AgencyPartnership />
      {/* Form Area */}
      <FormArea />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Campaign
