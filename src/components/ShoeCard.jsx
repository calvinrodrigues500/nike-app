const ShoeCard = ({imageURL, changeBigShoeImage, bigShoeImage}) => {

    const handleClick = () => {
        if(bigShoeImage !== imageURL.bigShoe)
        changeBigShoeImage(imageURL.bigShoe)
    }

    console.log('im ', imageURL)

  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImage === imageURL
     ? 'border-coral-red'
    : 'border-transparent'}
    cursor-pointer max-sm:flex-1
    `}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-lg">
            <img src={imageURL} alt="" />
        </div>
    </div>
  )
}

export default ShoeCard