import { cardItems } from '../../constants/api/campaign'

import DesiredCards from '../cards/DesiredCards/DesiredCards'

const Desired = () => {
  return (
    <div className='h-full text-center font-bold bg-primary-placeholder pt-20 pb-20 '>
      <div className='text-secondary text-2xl md:text-4xl md:p-36 p-5 '>
        <h1>All that you've desired</h1>
      </div>
      <div className='md:flex md:m-2 md:mx-auto md:items-center  '>
        {/* Card */}
        {cardItems.map(data => (
          <DesiredCards
            id={data.id}
            src={data.image}
            description={data.description}
            heading={data.heading}
            key={data.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Desired
