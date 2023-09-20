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

  function handleDecreaseStep() {
    setCount(0)
    setStep(1)
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
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={handleDecreaseCount}> - </button>
        {/* <span>Count: {count}</span> */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleIncreaseCount}> + </button>
      </div>

      <div>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <span>{date.toDateString()}</span>
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button className="resetButton" onClick={() => handleDecreaseStep()}>
            Reset
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
