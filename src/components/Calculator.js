import { useState } from 'react'
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
const [nums, setNums] = useState(0);
const [secondNums, setSecondNums] = useState(0);
const [operator, setOperator] = useState("");
const [result, setResult] = useState(0);

  const ops = ['/', '*', '-', '+'];
  /** TODO: what happens when I click a number? */
  const handleNumberClick = (e) => {
      if(nums > 0 && operator !== "" ){
        setSecondNums(secondNums.toString() + e.toString())
      } else {
        setNums(nums.toString() + e.toString())
      }
      
    
  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (e) => {
    if(nums === 0) {
      return
    }
    if (
			ops.includes(e) && nums === '' || 
			ops.includes(e) && ops.includes(nums.toString().slice(-1))
		) {
			return;
		}
    setOperator(e)
		
  };
    
  const handleEquals = () => {
      let sum = 0;
      
      if(operator === '+') {
        sum = parseInt(nums, 10) + parseInt(secondNums, 10)
        setResult(sum)
      } else if(operator === '-'){
        sum = parseInt(nums, 10) - parseInt(secondNums, 10)
        setResult(sum)
        setResult(sum)
      } else if( operator === "x"){
        sum = parseInt(nums, 10) * parseInt(secondNums, 10)
        setResult(sum)
      } else if( operator === '/'){
        sum = parseInt(nums, 10) / parseInt(secondNums, 10)
        setResult(sum)
      }
      
  }

  const handleClear = () => {
    setNums(0)
    setSecondNums(0)
    setOperator("")
    setResult(0)
  }
  
  return (
    <div>
      <Screen result={result} nums={nums} operator={operator} secondNums={secondNums} />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleEquals} />
          <Operation value="clear" onClick={handleClear} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
