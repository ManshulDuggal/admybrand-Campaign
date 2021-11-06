import Image from 'next/image'
const ClicksCard = ({ description, src, heading }) => {
  return (
    <div className='bg-white  mt-8 md:w-96 w-5/6 m-auto md:m-0 md:p-8 tex-center rounded-2xl md:mx-7 shadow-md border-solid border-2 '>
      <div className='p-2 mt-2 text-left'>
        <Image src={src ? src : ''} height={100} width={100} />
      </div>
      <div className='p-5 mt-5'>
        <h1 className='font-bold md:text-2xl text-secondary'>
          {heading ? heading : ''}
        </h1>

        <p className=' font-normal mt-1 text-secondary'>
          {description ? description : ''}
        </p>
      </div>
    </div>
  )
}

export default ClicksCard
