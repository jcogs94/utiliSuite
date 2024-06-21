import { useEffect, useState } from 'react'
import * as service from '../../../services/quoteService.js'
import './QuoteGenerator.css'

const QuoteGenerator = () => {
    const [currentQuote, setCurrentQuote] = useState({
        id: 0,
        author: '',
        quote: ''
    })
    
    const getQuote = async () => {
        // const data = await service.index()
        // const data = await service.allIds()
        const data = await service.fetchQuote()
        setCurrentQuote(data)
    }

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
