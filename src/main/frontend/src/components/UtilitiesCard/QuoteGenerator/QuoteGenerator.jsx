import { useEffect, useState } from 'react'
import * as service from '../../../services/quoteService.js'
import './QuoteGenerator.css'

const QuoteGenerator = () => {
    // useState for displayed quote
    const [currentQuote, setCurrentQuote] = useState({
        id: 0,
        author: '',
        quote: ''
    })
    
    // function obtains new random quote and sets it as currentQuote
    const getQuote = async () => {
        const data = await service.fetchQuote()
        setCurrentQuote(data)
    }

    // On load, fetches a new random quote
    useEffect(() => {
        getQuote()
    },[])

    return <>
        <div id="quote-generator">
            <h3>Quote Generator</h3>
            <div id="quote">
                <p><em>"{currentQuote.quote}"</em></p>
                <p><b>- {currentQuote.author}</b></p>
            </div>
            <div id="new-quote">
                <button onClick={getQuote}>Get New Quote</button>
            </div>
        </div>
    </>
}

export default QuoteGenerator
