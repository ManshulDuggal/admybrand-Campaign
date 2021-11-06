import ClicksCard from '../cards/desiredCards/ClicksCard'
import { clicksData } from '../../constants/api/campaign'
const ClicksSection = () => {
  return (
    <div className='h-full mt-24 lg:p-6 p-14 bg-primary-placeholder'>
      <div className='text-center md:p-11  mt-16'>
        <h1 className='font-bold text-4xl text-secondary'>Manage on Clicks</h1>
        <div className='text-secondary m-4'>
          <p>
            Finding it difficult to manage your client's expectations?...not any
          </p>
          <p>more! Leverage the power of technology to deliver the most</p>
          <p>satisfactory campaign experience</p>
        </div>
      </div>
      <div className='md:flex'>
        {clicksData.map(data => (
          <ClicksCard
            src={data.images}
            key={data.id}
            heading={data.heading}
            description={data.description}
          />
        ))}
      </div>
    </div>
  )
}

export default ClicksSection
