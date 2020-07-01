import React, {useState} from 'react';
import Calculator from './calculator'

function RootCalculator () {
    const [currentValue, setCurrentValue] = useState('');
    const [previosNumber, setPreviosNumber] = useState(0);
    const [operator, setOperator] = useState('');
    const [helperValue, setHelperValue] = useState('');
    
    
    const hanldeCurrentValueClick = e => {
        setCurrentValue(currentValue + e.target.textContent);
        setHelperValue(helperValue + e.target.textContent);
        if(currentValue[0] === '0' && currentValue[1] !== '.'){
            setCurrentValue(e.target.textContent);
        }
        if(helperValue[0] === '0' && helperValue[1] !== '.'){
            setHelperValue(e.target.textContent);
        }
    }

    const handleDot = (e) => {
        if(!currentValue.includes('.') && currentValue ){
            setCurrentValue(currentValue.concat(e.target.textContent));
        }

        if(!helperValue.includes('.') && helperValue){
            setHelperValue(helperValue.concat(e.target.textContent));
        }
    }

    const handleACClick = () => {
        setCurrentValue('');
        setHelperValue('');
        setOperator('')
    }

    const handleDeleteClick = () => {
        if(typeof(currentValue) === 'string'){
            setCurrentValue(currentValue.slice(0,-1));
        }
        if(typeof(helperValue) == 'string'){
            setHelperValue(helperValue.slice(0, -1))
        }
    }

    const handleMinusClick = (e) => {
        if(currentValue && typeof(currentValue) === 'string' && currentValue[0] !== '-'){
            setCurrentValue(e.target.textContent.concat(currentValue));
        }else if(!currentValue){
            setCurrentValue(e.target.textContent + currentValue);
        }

        if(helperValue && typeof(helperValue) === 'string' && helperValue[0] !== '-'){
            setHelperValue(e.target.textContent.concat(helperValue));
        }else if(!currentValue){
            setHelperValue(e.target.textContent + helperValue);
        }
    }

    const handleOperations =(e) => {
        if(currentValue && currentValue[currentValue.length-1] !== e.target.textContent){
            setCurrentValue(currentValue + e.target.textContent);
            setPreviosNumber(parseFloat(helperValue));
            setHelperValue('');
        }

        setOperator(e.target.textContent);

        if(helperValue && helperValue[helperValue.length-1] !== operator){
            let es = parseFloat(currentValue);
            if(operator === '/'){
                es = previosNumber /parseFloat(helperValue);
                setPreviosNumber(previosNumber /parseFloat(helperValue));
            }else if(operator === 'x'){
                es = previosNumber*parseFloat(helperValue);
                setPreviosNumber(previosNumber*parseFloat(helperValue));
            }else if(operator === '+'){
                es = previosNumber+parseFloat(helperValue);
                setPreviosNumber(previosNumber+parseFloat(helperValue));
            }else if(operator === '-'){
                es = previosNumber-parseFloat(helperValue);
                setPreviosNumber(previosNumber-parseFloat(helperValue));
            }
            
            if(e.target.textContent === '='){
                setCurrentValue('' + es);
                setHelperValue('' + es);
            }
        }
    }

    return (
        <>
            <Calculator 
                handleACClick = {handleACClick} 
                handleCurValueClick = {hanldeCurrentValueClick} 
                curVal = {currentValue} 
                handleDot = {handleDot}
                handleOperations = {handleOperations}
                handleFinalValue = {handleOperations}
                handleDeleteClick = {handleDeleteClick}
                handleMinusClick = {handleMinusClick}
                />
        </>
    )
}

export default RootCalculator;