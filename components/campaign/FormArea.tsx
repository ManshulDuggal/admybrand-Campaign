import React, { useState } from 'react'
import Image from 'next/dist/client/image'
import styles from '../enquiryform/Enquiry.module.scss'
import Enquiryformcontainer from '../enquiryform/helper/enquiryformcontainer'
import InputBox from '../../elements/InputBox.tsx/InputBox'
import { formfields } from '../../constants/api/campaign'
import { icons } from '../../constants/icons/icons'
import { svgs } from '../../constants/icons/icons'
const FormArea = () => {
  const scrollfuction = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }
  const [data, setData] = useState(true)
  return (
    <div id={'scrollthree'} className='h-full mt-32'>
      <div className='font-bold text-4xl text-secondary text-center'>
        <h1>Agency folks! Reach out for your queries here</h1>
      </div>
      <div className='flex justify-center mt-28'>
        <Enquiryformcontainer>
          {data ? (
            <>
              <form action=''>
                <div className=''>
                  {formfields.map(item => (
                    <InputBox
                      key={item.key}
                      heading={item.heading}
                      type={item.type}
                      placeholder={item.placeholder}
                    />
                  ))}
                </div>
                <div className={styles.enquireButtonDiv}>
                  <button className={styles.enquirebutton}>
                    <h2>Enquire</h2>
                    <Image
                      src={icons.privatearrowright}
                      alt='enquire'
                      height={10}
                      width={10}
                      className='object-cover'
                    />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div>
              <h1>Refer a Brand Content</h1>
            </div>
          )}
        </Enquiryformcontainer>
        <div className='md:flex md:justify-center rotate-90 md:ml-8 cursor-pointer hidden'>
          <Image
            src={svgs.circlearrow}
            width={50}
            height={50}
            onClick={() => scrollfuction()}
          />
        </div>
      </div>
      <div className='mt-2 md:hidden text-center'>
        <Image
          className=' rotate-90  flex cursor-pointer'
          src={svgs.circlearrow}
          width={50}
          height={50}
          onClick={() => scrollfuction()}
        />
      </div>
    </div>
  )
}

export default FormArea
