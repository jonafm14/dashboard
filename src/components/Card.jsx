const Card = ({ content }) => {
  return (
    <div className="w-[27rem]">
        <div className='border rounded-lg bg-white p-2'>
          {content}
        </div>
    </div>
  )
}

export default Card
