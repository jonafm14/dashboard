const Card = ({ content, size = 'default' }) => {
  let width

  switch (size) {
    case 'fit':
      width = 'w-fit'
      break
    case 'full':
      width = 'w-full'
      break
    case 'double':
      width = 'w-[55rem]'
      break
    case 'default':
    default:
      width = 'w-[27rem]'
      break
  }

  return (
    <div className={`${width}`}>
        <div className='border rounded-lg bg-white p-2'>
          {content}
        </div>
    </div>
  )
}

export default Card
