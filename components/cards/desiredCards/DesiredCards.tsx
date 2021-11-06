import Image from 'next/dist/client/image'

const DesiredCards = ({ src, description, id, heading }) => {
  return (
    <div className='bg-white md:px-6 md:py-10 md:w-3/12 w-52 m-3 rounded-2xl mx-auto shadow-lg border-solid border-2'>
      <div className=''>
        <Image src={src ? src : ''} height={200} width={200} />
      </div>
      <div className='md:text-left text-left p-3'>
        <div>
          <h1 className='font-semibold md:text-2xl  text-secondary  '>
            {heading ? heading : ''}
          </h1>
        </div>
        <div>
          <p className=' font-normal mt-2 text-secondary'>
            {description ? description : ''}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DesiredCards
