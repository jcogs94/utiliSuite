import { useState } from 'react'
import './TipCalculator.css'

const TipCalculator = () => {
    const [subTotal, setSubTotal] = useState(0)
    const [tipPercentage, setTipPercentage] = useState(0)
    const [roundUp, setRoundUp] = useState(false)
    const [totals, setTotals] = useState({
        tip: 0,
        bill: 0
    })
    const [tipTotal, setTipTotal] = useState(0)
    const [billTotal, setBillTotal] = useState(0)
    


    const handleChange = (event) => {
        
        
        // let tip =  (tipPercentage / 100)
        
        // setTotals({
        //     tip: tip,
        //     bill: (subTotal + tip)
        // })
    }

    return <>
        <div id='tip-calculator'>
            <h3>Tip Calculator</h3>
            <div>
                <label htmlFor="sub-total">Subtotal: $</label>
                <input name='sub-total' type="number" value={subTotal} step="0.01" min="0"
                    onChange={(e) => {
                        setSubTotal(parseFloat(e.target.value))
                        // updateTotals(e.target.value)
                    }} />
            </div>
            <div>
                <label htmlFor="tip-percentage">Tip Percentage: %</label>
                <input name='tip-percentage' type="number" value={tipPercentage} min="0"
                    onChange={(e) => {
                        setTipPercentage(parseInt(e.target.value))
                        // updateTotals(e.target.value)
                    }} />
            </div>
            <div>
                <label htmlFor="round-up">Round up to nearest dollar?</label>
                <div name="round-up">
                    <label htmlFor="round-up-yes">Yes</label>
                    <input name='round-up-yes' type="radio" checked={ roundUp ? 'checked' : null }
                        onChange={(e) => {
                            setRoundUp(e => !e)
                            // updateTotals()
                        }} />
                    <label htmlFor="round-up-no">No</label>
                    <input name='round-up-no' type="radio" checked={ !roundUp ? 'checked' : null }
                        onChange={(e) => {
                            setRoundUp(e => !e)
                            // updateTotals()
                        }} />
                </div>
            </div>
            <div id="tip-results">
                <h4>Tip: ${totals.tip}</h4>
                <h4>Bill Total: ${totals.bill}</h4>
            </div>
        </div>
    </>
}

export default TipCalculator
