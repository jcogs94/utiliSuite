import PercentageCalculator from './PercentageCalculator/PercentageCalculator'
import TipCalculator from './TipCalculator/TipCalculator'
import * as service from '../../services/quoteService.js'
import addStarterQuotes from '../../services/api_starter_file/init_quotes_db.js'
import './UtilitiesCard.css'

const UtilitiesCard = () => {
    const fetchData = async () => {
        // const data = await service.index()
        // console.log(data)

        addStarterQuotes()
    }
    
    return <>
        <div id='utils-card'>
            <h3>Utils Testing...</h3>
            <div id="utils-container">
                <TipCalculator />
                <PercentageCalculator />
            </div>
            <button onClick={fetchData}>Fetch to log</button>
        </div>
    </>
}

export default UtilitiesCard
