import { campaignData } from '../../constants/api/campaign'
import ElipseContent from '../Elipse/ElipseContent'
import PrimaryBtnPinkOutline from '../buttons/PrimaryBtnPinkOutline'
const AgencyPartnership = () => {
  return (
    <div className='h-full mt-16'>
      {/* Elipse area */}
      <div className='md:flex md:justify-center'>
        {campaignData.map(data => (
          <ElipseContent
            title={data.title}
            value={data.value}
            key={data.id}
            id={data.id}
          />
        ))}
      </div>
      <div className='text-center p-8 md:p-10  mt-16'>
        <h1 className='font-bold text-4xl text-secondary'>
          Agency Partnership Program
        </h1>
        <div className='text-secondary m-4'>
          <p>
            Evolving the marketing program to support advertising partners
            through our data driven analytics and heat maps. The Admybrand
            Agency partner
          </p>
          <p>
            program is designed to acknowledge to agencies through their clients
            to use technology to provide a more nimble, targeted and responsive
            portals that{' '}
          </p>
          <p>
            can interpret, adjust and optimize digital experiences in real time
            to better deliver on client business goals.
          </p>
        </div>
      </div>
      <div className='md:flex md:py-10 md:w-2/5 md:mx-auto'>
        <PrimaryBtnPinkOutline onclick={''} content={'View Full details'} />
        <PrimaryBtnPinkOutline onclick={''} content={'Enroll Now'} />
      </div>
    </div>
  )
}

export default AgencyPartnership
