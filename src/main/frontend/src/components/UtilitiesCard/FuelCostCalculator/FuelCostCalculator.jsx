import { useState } from 'react'
import randomNumber from 'random-number'
import './FuelCostCalculator.css'

const FuelCostCalculator = () => {
    // useState for all necessary nums in calc
    const [nums, setNums] = useState({
        distance: 1,
        mpg: 1,
        price: .01,
        result: 0
    })
    
    // handler updates values based on user input and makes current calculation
    const handleInput = (event) => {
        let newNums = {...nums}
        
        // switch sorts out the value that was changed by the user, if empty, leaves
        // it as such, else parses int/float
        switch (event.target.name) {
            case 'fcc-distance':
                if (event.target.value !== '')
                    newNums.distance = parseInt(event.target.value)
                else
                    newNums.distance = ''
                break
            case 'fcc-mpg':
                if (event.target.value !== '')
                    newNums.mpg = parseInt(event.target.value)
                else
                    newNums.mpg = ''
                break
            case 'fcc-price':
                if (event.target.value !== '') {
                    newNums.price = parseFloat(event.target.value)
                } else
                    newNums.price = ''
                break
            default: break
        }

        // if none of the necessary values are empty
        if (newNums.distance !== '' && newNums.mpg !== '' && newNums.price !== '') {
            // makes the calculation and sets the result to the fixed value of x.xx
            let result = ( newNums.distance / newNums.mpg ) * newNums.price
            newNums.result = result.toFixed(2)
        }
        // updates all nums with current values
        setNums(newNums)
    }

    return <>
        <div id="fuel-cost-calculator">
            <h3>Fuel Cost Calculator</h3>
            <div id="fcc-input">
                <div id="fcc-distance-container">
                    <h4>How many miles will you travel?</h4>
                    <input type="number" name="fcc-distance" value={nums.distance}
                        min="1"
                        onChange={handleInput} />
                </div>
                <div id="fcc-mpg-container">
                    <h4>What is your average miles per gallon?</h4>
                    <input type="number" name="fcc-mpg" value={nums.mpg}
                        min="1"
                        onChange={handleInput} />
                </div>
                <div id="fcc-price-container">
                    <h4>What is the average expected price per gallon?</h4>
                    <input type="number" name="fcc-price" value={nums.price}
                        step="0.01" min=".01"
                        onChange={handleInput} />
                </div>
            </div>
            <h4 id="fcc-result">Total Cost: ${nums.result}</h4>
        </div>
    </>
}

export default FuelCostCalculator
