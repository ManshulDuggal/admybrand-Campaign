import TitleCard from '../cards/desiredCards/TitleCard'
import { shareClients } from '../../constants/api/campaign'

function ShareClients () {
  return (
    <div className='h-full pt-8 pb-20 md:p-20 text-center bg-primary-placeholder'>
      <div className='text-placeholder'>
        <h1 className='font-bold text-4xl'>Share with your Clients</h1>
      </div>
      <div className='m-11 font-normal'>
        <p>
          Tired of sharing large size PPTs and Excel sheets? The clients are
          tired too!!
        </p>
        <p>Go DIGITAL today, share your customized portfolio in seconds!</p>
      </div>
      <div className='lg:flex md:p-32  justify-start text-left'>
        {/* Cards Section */}
        {shareClients.map(data => (
          <TitleCard
            src={data.images}
            heading={data.heading}
            key={data.id}
            id={data.id}
          />
        ))}
      </div>
    </div>
  )
}

export default ShareClients
