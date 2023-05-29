import { useState, useEffect } from "react"

import Loading from './Loading'
import BaseButton from "./Button/Base"
import IconButton from "./Button/Icon"

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

    const speakQuote = () => {
        const speech = new SpeechSynthesisUtterance(quote)
        const voice = speechSynthesis.getVoices().find(({name}) => name === 'Samantha')
        speech.voice = voice
        speech.volume = 0.6
        speech.rate = 0.9
        speech.pitch = 1.3
        speechSynthesis.speak(speech)
    }

    const copyQuote = () => {
        const dummy = document.createElement('textarea')
        document.body.appendChild(dummy)
        dummy.value = quote
        dummy.select()
        document.execCommand('copy')
        document.body.removeChild(dummy)
        alert('Copied Quote')
    }

    useEffect(() => {
        fetchQuote()
    },[])

  return (
    <article className="flex flex-col justify-center sm:justify-around items-center gap-y-4 sm:gap-y-5 w-10/12 max-w-xl p-6 sm:p-8 bg-white rounded-lg sm:rounded-2xl drop-shadow-2xl">

        {/* title */}
        <div className="w-full text-center font-medium text-xl sm:text-3xl">
            {
                loading ?
                <Loading className="w-1/2 h-6 m-auto" /> :
                'Quote of the day'
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
                <p className="mb-3 text-gray-600 text-center font-light text-sm sm:text-lg select-all">
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
        <div className="flex justify-between items-end w-full h-10">
            {
                !loading && (
                    <>
                        {/* icon actions */}
                        <div className="flex gap-x-2">
                            <IconButton icon="voice" handleClick={speakQuote} />
                            <IconButton icon="clipboard" handleClick={copyQuote} />
                            <IconButton icon="share" />
                        </div>

                        {/* new quote action */}
                        <BaseButton handleClick={fetchQuote}>
                            New Quote
                        </BaseButton>
                    </>
                )
            }
        </div>

    </article>
  )
}

export default Card