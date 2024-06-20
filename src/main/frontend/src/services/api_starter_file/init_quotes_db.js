// const csvToJson = require('convert-csv-to-json')
// const Papa = require('papaparse')

// import data from './quotes.js'
const data = require('./quotes.js')
const url = 'http://localhost:8080/api/quotes'

// let json = csvToJson.getJsonFromCsv('Quotes.csv')


const addQuote = async (newQuote) => {
    try {
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newQuote)
        })
        
        console.log("Successfully added quote...")
    } catch (err) {
        console.log(err)
    }
}

const addStarterQuotes = () => {
    data.forEach( async quote => {
        let quoteToAdd = {
            "whoSaid": quote.AUTHOR,
            "quote": quote.QUOTE
        }
        await addQuote(quoteToAdd)
    })
}

addStarterQuotes();

module.exports = addStarterQuotes
