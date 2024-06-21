import PercentageCalculator from './PercentageCalculator/PercentageCalculator'
import QuoteGenerator from './QuoteGenerator/QuoteGenerator'
import TipCalculator from './TipCalculator/TipCalculator'
import './UtilitiesCard.css'

const UtilitiesCard = () => {
    return <>
        <div id='utils-card'>
            <h2>Utilities</h2>
            <div id="utils-container">
                <TipCalculator />
                <PercentageCalculator />
                <QuoteGenerator />
            </div>
        </div>
    </>
}

export default UtilitiesCard
