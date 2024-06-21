const rn = require('random-number')

// const BASE_URL = 'http://localhost:8080/api/quotes'
const BASE_URL = '/api/quotes'
// const BASE_URL = 'http://18.224.41.247:8080/api/quotes'

// Fetches all quotes
const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Fetches data for specific quote
const allIds = async () => {
    try {
        const res = await fetch(BASE_URL + '/all-ids')
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Fetches a random quote
const fetchQuote = async () => {
    const ids = await allIds()
    const maxIndex = ids.length - 1
    const randGen = rn.generator({
        min: 0,
        max: maxIndex,
        integer: true
    })
    const randIndex = randGen()
    
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + String(ids[randIndex])

    try {
        const res = await fetch(REQ_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    index,
    fetchQuote
}
