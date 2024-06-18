import { useState } from 'react'
import './PercentageCalculator.css'

const PercentageCalculator = () => {
    // State for all necessary nums in calc
    const [nums, setNums] = useState({
        partial: 0,
        whole: 0,
        results: 'undefined'
    })

    // Handler for the input changes and calcs new percentage value
    const handleChange = (event) => {
        // Makes new copy of current nums
        let updatedNums = {...nums}

        // Updates the new nums with current user input
        switch (event.target.name) {
            case 'partial-amount':
                updatedNums.partial = parseFloat(event.target.value) || event.target.value
                break
            case 'whole-amount':
                updatedNums.whole = parseFloat(event.target.value) || event.target.value
                break
            default: break
        }

        // Calculates the new percentage based on user input (if valid)
        if (updatedNums.whole == 0 || isNaN(updatedNums.partial)) {
            updatedNums.results = 'undefined'
        } else {
            let result = ( updatedNums.partial / updatedNums.whole ) * 100
            updatedNums.results = `${result.toFixed(2)}%`
        }

        setNums({ ...updatedNums })
    }
    
    return <>
        <div id="percentage-calculator">
            <h3>Percentage Calculator</h3>
            <div>
                <label htmlFor="partial-amount">What is the amount that you want the percentage of?</label>
                <input type="number" name="partial-amount" value={nums.partial} min="0"
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="whole-amount">What is the amount that is considered 100%?</label>
                <input type="number" name="whole-amount" value={nums.whole} min="0"
                    onChange={handleChange} />
            </div>
            <h4 id='percentage-results'>Percentage: {nums.results}</h4>
        </div>
    </>
}

export default PercentageCalculator
