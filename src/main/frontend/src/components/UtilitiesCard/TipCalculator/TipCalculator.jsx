import { useState } from 'react'
import './TipCalculator.css'

const TipCalculator = () => {
    // State for necessary nums and calcs
    const [nums, setNums] = useState({
        subTotal: 0,
        tipPercentage: 0,
        roundUp: false,
        tipTotal: 0,
        billTotal: 0
    })

    // Calculates new values for tipTotal and billTotal
    const calcTotals = (newNums) => {
        // Calculates the new tip based on the percentage, rounded to two decimals
        let tip = newNums.subTotal * (newNums.tipPercentage / 100)
        tip = parseFloat(tip.toFixed(2))
        
        // Sets new totals
        newNums.tipTotal = tip
        newNums.billTotal = newNums.subTotal + newNums.tipTotal
        
        // If the user wishes to round up, updates totals accordingling
        if (newNums.roundUp) {
            // Rounds up the billTotal and adds the difference to the tip
            let newBillTotal = parseInt(newNums.billTotal.toFixed())
            let newTipTotal = newNums.tipTotal + (newBillTotal - newNums.billTotal)
            
            // Sets new values
            newNums.tipTotal = newTipTotal
            newNums.billTotal = newBillTotal
        }
        
        return newNums
    }

    // Handles change of input and calculations
    const handleChange = (event) => {
        let newNums
        
        // Updates newNums object based on input changed
        switch (event.target.name) {
            case 'sub-total':
                let newSub = parseFloat(event.target.value)
                newSub = parseFloat(newSub.toFixed(2))
                newNums = { ...nums, subTotal: newSub }
                break
            case 'tip-percentage':
                newNums = { ...nums, tipPercentage: parseInt(event.target.value) }
                break
            case 'round-up-yes':
            case 'round-up-no':
                newNums = { ...nums, roundUp: !nums.roundUp }
                break
            default: break
        }

        // Sets the state of Nums to include the calc of the total values
        setNums(calcTotals(newNums))
    }

    return <>
        <div id='tip-calculator'>
            <h3>Tip Calculator</h3>
            <div>
                <label htmlFor="sub-total-container">Subtotal:</label>
                <div name="sub-total-container">
                    <label htmlFor="sub-total"><b>$</b></label>
                    <input name='sub-total' type="number" value={nums.subTotal} step="0.01" min="0"
                        onChange={(e) => { e.target.value !== '' ? handleChange(e) : setNums({ ...nums, subTotal: '' }) }} />
                    <div className="adjustment"></div>
                </div>
            </div>
            <div>
                <label htmlFor="tip-percentage-container">Tip Percentage:</label>
                <div name="tip-percentage-container">
                <div className="adjustment"></div>
                    <input name='tip-percentage' type="number" value={nums.tipPercentage} min="0"
                        onChange={(e) => { e.target.value !== '' ? handleChange(e) : setNums({ ...nums, tipPercentage: '' }) }} />
                    <label htmlFor="tip-percentage"><b>%</b></label>
                </div>
            </div>
            <div>
                <label htmlFor="round-up">Round up to nearest dollar?</label>
                <div name="round-up">
                    <label htmlFor="round-up-yes">Yes</label>
                    <input name='round-up-yes' type="radio" checked={ nums.roundUp ? 'checked' : false }
                        onChange={handleChange} />
                    <label htmlFor="round-up-no">No</label>
                    <input name='round-up-no' type="radio" checked={ !nums.roundUp ? 'checked' : false }
                        onChange={handleChange} />
                </div>
            </div>
            <div id="tip-results">
                <h4>Tip: ${nums.tipTotal.toFixed(2)}</h4>
                <h4>Bill Total: ${nums.billTotal.toFixed(2)}</h4>
            </div>
        </div>
    </>
}

export default TipCalculator
