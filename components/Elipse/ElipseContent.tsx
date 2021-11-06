import { campaignData } from '../../constants/api/campaign'
const ElipseContent = ({ title, value, id }) => {
  return (
    <div className='flex justify-center'>
      <div className='rounded-full h-40 w-40 m-8 border-8 border-solid border-primary text-center items-center'>
        <div className='p-8 font-semibold text-lg'>
          <h1>{value}</h1>
          <h1 className='text-extra-placeholder'>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default ElipseContent
