import { RiArrowRightLine } from 'react-icons/ri'

interface Props {
  onClick?: any
  text: string
}
const GetStarted = ({ onClick, text }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className='bg-primary-pink w-36 h-10 items-center rounded-full text-white font-bold my-5 hover:bg-pink-800 hover:drop-shadow-lg'
      >
        {text} <RiArrowRightLine className='inline-flex items-center' />
      </button>
    </div>
  )
}

export default GetStarted
