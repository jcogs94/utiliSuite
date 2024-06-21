import FuelCostCalculator from './FuelCostCalculator/FuelCostCalculator'
import PercentageCalculator from './PercentageCalculator/PercentageCalculator'
import QuoteGenerator from './QuoteGenerator/QuoteGenerator'
import RNG from './RNG/RNG'
import TipCalculator from './TipCalculator/TipCalculator'
import './UtilitiesCard.css'

const UtilitiesCard = () => {
    return <>
        <div id='utils-card'>
            <div id="utils-container">
                <TipCalculator />
                <PercentageCalculator />
                <RNG />
                <FuelCostCalculator />
                <QuoteGenerator />
            </div>
        </div>
    </>
}

export default UtilitiesCard
