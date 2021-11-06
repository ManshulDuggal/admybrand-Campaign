import Image from 'next/image'
const BotSvgCards = ({ description, src, id, heading }) => {
  return (
    <div className='bg-whitem-auto mt-8 md:w-96 w-72 m-auto md:m-0 md:p-8 tex-center rounded-2xl md:mx-12 shadow-md border-solid border-2 p-2 '>
      <div>
        <h1 className='font-bold p-2 md:text-2xl md:p-8 text-secondary'>
          {heading ? heading : ''}
        </h1>
      </div>
      <div className='flex'>
        <div>
          <p className=' font-normal mt-1 p-8 text-secondary'>
            {description ? description : ''}
          </p>
        </div>
        <div className='p-4 mt-12 text-right '>
          <Image src={src ? src : ''} height={250} width={250} />
        </div>
      </div>
    </div>
  )
}

export default BotSvgCards
