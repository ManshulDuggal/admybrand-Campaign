import { RiCheckboxCircleLine } from 'react-icons/ri'
import GetStarted from '../buttons/GetStarted/getStarted'
import { listItems } from '../../constants/api/campaign'
import { customPng } from '../../constants/icons/icons'
import Image from 'next/dist/client/image'

const MarketingSuit = () => {
  return (
    <div className='h-full text-center mt-24 p-5 lg:w-10/12 md:mx-auto'>
      <div className=''>
        <div className=' text-2xl md:text-4xl font-bold text-primary'>
          <h1 className='text-secondary'>
            With AMB’s agency partnership program you get
          </h1>
          <h1>Best Price Guarantee</h1>
        </div>

        {/* Flex Container */}
        <div className='mt-14 md:flex md:flex-row md:text-justify md:mt-auto md:p-32 md:items-center'>
          {/* Section Area */}
          <div className='md:flex-grow'>
            <div className='text-2xl  text-extra-blue font-semibold'>
              <h1>Empower your brand with</h1>
              <h1> Admybrand Marketing Suite</h1>
            </div>
            <ul className='text-text text-center p-4 md:md:text-justify md:justify-start md:px-0'>
              {listItems.map((data, index) => (
                <li className='mt-2' key={index}>
                  <RiCheckboxCircleLine className='inline-flex items-center mx-2 text-lightgreen' />
                  {data.name}
                </li>
              ))}
            </ul>
            <GetStarted />
          </div>

          <div className=''>
            <Image src={customPng.kisspng} width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingSuit
