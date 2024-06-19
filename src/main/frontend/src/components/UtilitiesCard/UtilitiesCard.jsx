import PercentageCalculator from './PercentageCalculator/PercentageCalculator'
import TipCalculator from './TipCalculator/TipCalculator'
import * as service from '../../services/userService.js'
import './UtilitiesCard.css'

const UtilitiesCard = () => {
    const fetchData = async () => {
        const data = await service.show('52')
        console.log(data)
    }
    
    return <>
        <div id='utils-card'>
            <h3>Utils Testing...</h3>
            <TipCalculator />
            <PercentageCalculator />
            <button onClick={fetchData}>Fetch to log</button>
        </div>
    </>
}

export default UtilitiesCard
