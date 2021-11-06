import GetStarted from '../buttons/GetStarted/getStarted'
import DownloadApp from '../downloadapp/downloadapp'
import Scrollanimation from '../scrollanimation/scrollanimation'

const CampaignHeader = () => {
  const scrollfuction = () => {
    const scrollelement: any = document.querySelector('#scrollthree')
    scrollelement.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div id={'#scrollone'} className='h-screen mt-16'>
      <div className='flex flex-col items-center text-center  p-14 m-auto'>
        <h1 className='text-grey text-2xl font-medium'>
          Let us join Hands to deliver the best experience for your clients
        </h1>

        <div className='font-medium text-3xl'>
          <h1>Largest Online Marketplace</h1>
          <h1>for A-Z Media.</h1>
        </div>
        <div className=' text-xl'>
          <h1>Create. Plan. Book. Execute. Manage. Analyze</h1>
        </div>
        {/* Button */}
        <GetStarted text={'get started'} />
        <DownloadApp />
        <div className='items-center text-center text-grey mt-20'>
          <h1 className=''>Scroll down</h1>

          <Scrollanimation onClick={() => scrollfuction()} />
        </div>
      </div>
    </div>
  )
}

export default CampaignHeader
