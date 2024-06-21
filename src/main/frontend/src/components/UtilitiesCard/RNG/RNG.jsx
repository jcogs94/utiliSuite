import { useState } from 'react'
import randomNumber from 'random-number'
import './RNG.css'

const RNG = () => {
    const [nums, setNums] = useState({
        min: 0,
        max: 0,
        onlyWhole: true,
        result: 0
    })
    
    const handleInput = (event) => {
        let newNums = {...nums}
        
        switch (event.target.name) {
            case 'rng-min':
                if (event.target.value !== '')
                    newNums.min = parseFloat(event.target.value)
                else
                    newNums.min = ''
                break
            case 'rng-max':
                if (event.target.value !== '')
                    newNums.max = parseFloat(event.target.value)
                else
                    newNums.max = ''
                break
            case 'rng-yes':
            case 'rng-no':
                newNums.onlyWhole = !newNums.onlyWhole
                break
            case 'rng-get-num':
                if (newNums.min !== '' && newNums.max !== '') {
                    if (newNums.min !== newNums.max) {
                        const randGen = randomNumber.generator({
                            min: newNums.min,
                            max: newNums.max,
                            integer: newNums.onlyWhole
                        })
                        newNums.result = randGen()
                    } else
                        newNums.result = newNums.min
                }
                break
            default: break
        }

        setNums(newNums)
    }

    return <>
        <div id="rng">
            <h3>Random Number Generator</h3>
            <div id="rng-input">
                <div id="rng-min-container">
                    <h4>Minimum:</h4>
                    <input type="number" name="rng-min" value={nums.min}
                        onChange={handleInput} />
                </div>
                <div id="rng-max-container">
                    <h4>Maximum:</h4>
                    <input type="number" name="rng-max" value={nums.max}
                        onChange={handleInput} />
                </div>
                <div id="rng-whole">
                    <h4>Do you want only whole numbers?</h4>
                    <div id='rng-radio-container'>
                        <label htmlFor="rng-yes">Yes</label>
                        <input type="radio" name='rng-yes'
                            checked={ nums.onlyWhole ? 'checked' : false }
                            onChange={handleInput} />
                        <label htmlFor="rng-no">No</label>
                        <input type="radio" name='rng-no'
                            checked={ !nums.onlyWhole ? 'checked' : false }
                            onChange={handleInput} />
                    </div>
                </div>
                <button name='rng-get-num' onClick={handleInput}>Get Number</button>
            </div>
            <h4 id="rng-result">Random Number:<br/>{nums.result}</h4>
        </div>
    </>
}

export default RNG
