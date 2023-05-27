import { useState, useEffect } from "react"

import Loading from './Loading'

const Card = () => {
    const [quote, setQuote] = useState(null)
    const [author, setAuthor] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchQuote = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://api.quotable.io/random?minLength=100&maxLength=200')
            if (!response.ok)
                throw response.status
            const { author, content } = await response.json()
            setAuthor(author)
            setQuote(content)
            setLoading(false)
        }
        catch (error) {
            let errorMsg
            if (error === 429)
                errorMsg = 'Seems like the quote quota has expired.\nPlease try again later.'
            else 
                errorMsg = 'Something has gone wrong.\nPlease try again later.'
            alert(`Oops! ${errorMsg}`)
        }
    }

    useEffect(() => {
        fetchQuote()
    },[])

  return (
    <article className="flex flex-col justify-center sm:justify-around items-center gap-y-4 sm:gap-y-5 w-10/12 max-w-xl p-6 sm:p-8 bg-white rounded-lg sm:rounded-2xl drop-shadow-2xl">

        {/* title */}
        <div className="w-full text-center font-semibold text-xl sm:text-3xl">
            {
                loading ?
                <Loading className="w-1/2 h-6 m-auto" /> :
                'Quotes of the day'
            }
        </div>

        {/* quote */}
        <div className="w-full sm:w-11/12">
            {/* content */}
            {
                loading ?
                <div className="flex flex-col gap-y-2">
                    <Loading className="w-full h-3 mt-5 mx-auto" />
                    <Loading className="w-full h-3 mx-auto" />
                    <Loading className="w-3/4 h-3" /> 
                </div> :
                <p className="mb-3 text-gray-600 text-center font-light text-sm sm:text-lg">
                    {quote}
                </p>
            }

            {/* author */}
            {
                loading ?
                <Loading className="w-2/5 h-3 mt-5 ml-auto" /> :
                <span className="text-sky-900 block w-full text-right text-xs sm:text-base italic">
                    ⎯⎯ &nbsp;
                    {author}
                </span>
            }
        </div>

        {/* actions */}
        {
            !loading &&
            <div className="w-full">
            </div>
        }

    </article>
  )
}

export default Card