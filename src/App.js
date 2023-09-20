import { useState } from 'react'

export default App
function App() {
  return <Counter />
}

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  const date = new Date()
  date.setDate(date.getDate() + count)

  // ************Step************
  function handleDecreaseStep() {
    setStep((currStep) => currStep - 1)
  }
  function handleIncreaseStep() {
    setStep((currStep) => currStep + 1)
  }
  // ************Count************
  function handleDecreaseCount() {
    setCount((currCount) => currCount - step)
  }
  function handleIncreaseCount() {
    setCount((currCount) => Number(currCount + step))
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          style={{ margin: '2.5rem 1rem 1rem auto', color: 'pink' }}
        />
        {/* <button onClick={handleDecreaseStep}> - </button> */}
        <span>Step: {step}</span>
        {/* <button onClick={handleIncreaseStep}> + </button> */}
      </div>
      <div>
        <button onClick={handleDecreaseCount}> - </button>
        <span>Count: {count}</span>
        <button onClick={handleIncreaseCount}> + </button>
      </div>
      <div>
        <button className="resetButton"> Reset </button>
      </div>
      <div>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <span>{date.toDateString()}</span>
      </div>
    </div>
  )
}
