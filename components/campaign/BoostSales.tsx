import { boostSales } from '../../constants/api/campaign'
import BotSvgCards from '../cards/desiredCards/BotSvgCards'
import React from 'react'
const BoostSales = () => {
  return (
    <div className='h-full'>
      <div className='text-center md:p-24  mt-16'>
        <h1 className='font-bold text-4xl text-secondary'>Boost Your Sales</h1>
        <div className=' text-secondary m-4'>
          <p>We understand your assets can earn you much more</p>
          <p>than they do today! Let the brands award you campaign</p>
          <p>while you sit back & relax!</p>
        </div>
      </div>
      <div className='md:flex justify-evenly'>
        {boostSales.map(data => (
          <BotSvgCards
            src={data.images}
            id={data.id}
            key={data.id}
            heading={data.heading}
            description={data.description}
          />
        ))}
      </div>
    </div>
  )
}

export default BoostSales
