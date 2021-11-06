import Image from 'next/dist/client/image'

const TitleCard = ({ src, id, heading }) => {
  return (
    <div className='bg-white w-40 lg:w-80 lg:p-4 m-3  rounded-2xl mx-auto shadow-lg border-solid border-2'>
      <div className=''>
        <Image src={src ? src : ''} height={200} width={200} />
      </div>
      <div>
        <h1 className='font-bold md:text-2xl md:p-2 p-5 text-secondary'>
          {heading ? heading : ''}
        </h1>
      </div>
    </div>
  )
}

export default TitleCard
