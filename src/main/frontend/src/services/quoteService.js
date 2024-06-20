const BASE_URL = 'http://localhost:8080/api/quotes'

// Fetches data for specific user
const index = async () => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL

    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Fetches data for specific user
const show = async (userId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + userId

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
    show
}
