// interface Btnprops {
//   content: string
// }

const PrimaryBtnPinkOutline = ({ content, onclick }) => {
  return (
    <div className='border-solid border-primary text-center p-2 w-72 mt-2 my-5 mx-auto border-2 text-primary rounded-lg  hover:bg-primary-pink hover:text-white'>
      <button onClick={onclick ? onclick : null}>
        {content ? content : 'Click me'}
      </button>
    </div>
  )
}

export default PrimaryBtnPinkOutline
