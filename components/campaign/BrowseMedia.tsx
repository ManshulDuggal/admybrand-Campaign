import { cardItemsBrowseMedia } from '../../constants/api/campaign'
import TitleCard from '../cards/desiredCards/TitleCard'
const BrowseMedia = () => {
  return (
    <div className='h-full p-14 md:p-36'>
      {/* Text sction with heading */}
      <div className='text-secondary lg:grid lg:grid-cols-4'>
        <div className='text-center lg:col-span-2 lg:justify-center lg:flex lg:flex-col lg:place-items-start lg:gap-2 '>
          <h1 className='font-semibold text-3xl'>Browse Through Media</h1>
          <p className='pt-5'>
            While the world is moving from OFFLINE to ONLINE, don't shy away!
          </p>
          <p> Showcase your assets to the widest spectrum of brands</p>
        </div>
        <div className='p-9 lg:grid lg:grid-cols-2 lg:text-center lg:grid-row-1 lg:gap-x-96 lg:gap-y-5 '>
          {/* Card Section */}
          {cardItemsBrowseMedia.map(data => (
            <TitleCard
              src={data.images}
              heading={data.heading}
              key={data.id}
              id={data.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowseMedia
