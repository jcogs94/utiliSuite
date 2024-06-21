import PercentageCalculator from './PercentageCalculator/PercentageCalculator'
import QuoteGenerator from './QuoteGenerator/QuoteGenerator'
import TipCalculator from './TipCalculator/TipCalculator'
import './UtilitiesCard.css'

const UtilitiesCard = () => {
    return <>
        <div id='utils-card'>
            <h3>Utils Testing...</h3>
            <div id="utils-container">
                <TipCalculator />
                <PercentageCalculator />
                <QuoteGenerator />
            </div>
        </div>
    </>
}

export default UtilitiesCard
