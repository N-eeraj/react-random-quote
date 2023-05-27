import { useState, useEffect } from "react"

const Card = () => {
    const [quote, setQuote] = useState(null)
    const [author, setAuthor] = useState(null)

    const fetchQuote = async () => {
        setLoading(true)
        const response = await fetch('https://api.quotable.io/random?minLength=100&maxLength=150')
        const { author, content } = await response.json()
        setAuthor(author)
        setQuote(content)
        setLoading(false)
    }

    useEffect(() => {
        fetchQuote()
    },[])

  return (
    <article className="flex flex-col justify-center sm:justify-around items-center gap-y-4 sm:gap-y-5 w-10/12 max-w-xl p-6 sm:p-8 bg-white rounded-lg sm:rounded-2xl drop-shadow-2xl">
        
        <div className="w-full text-center font-semibold text-xl sm:text-3xl">
            Quotes of the day
        </div>

        <div className="w-full sm:w-11/12">
            <p className="text-gray-600 text-center font-light text-sm sm:text-lg">
                {quote}
            </p>
            <span className="text-sky-900 block w-full text-right text-xs sm:text-base italic">
                ⎯⎯ &nbsp;
                {author}
            </span>
        </div>

        <div className="w-full">
            
        </div>

    </article>
  )
}

export default Card