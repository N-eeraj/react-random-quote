const Card = () => {
  return (
    <article className="flex flex-col justify-center sm:justify-around items-center gap-y-4 sm:gap-y-5 w-10/12 max-w-xl p-6 sm:p-8 bg-white rounded-lg sm:rounded-2xl drop-shadow-2xl">

        <div className="w-full text-center font-semibold text-xl sm:text-3xl">
            Quotes of the day
        </div>

        <div className="w-full sm:w-11/12">
            <p className="text-gray-600 text-center font-light text-sm sm:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam iste molestiae dolorum deserunt nam vitae, doloremque architecto. Voluptas esse nisi minus voluptatibus laboriosam eligendi neque nulla iste, fuga amet officiis?
            </p>
            <span className="text-sky-900 block w-full text-right text-xs sm:text-base italic">
                ⎯⎯
                Author
            </span>
        </div>

        <div className="w-full">
            
        </div>

    </article>
  )
}

export default Card