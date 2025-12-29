import { useState } from 'react'        // importing "useState" Hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter = 5;

  let [counter, counterFunc] = useState(0)   // initisaliszing with 0

  const addValue = () => { counterFunc(counter = counter+1) }

  const decValue = () => { 
    if(counter > 0){    // counter will not show negative value
      counterFunc(counter = counter-1)
    }
  }

  const reset = () => { counterFunc(counter = 0) }

  return (
    <>
      <h1>My Counter App</h1>

      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>increment</button>

      <button onClick={reset}>Reset</button>

      <button onClick={decValue}>Decrement</button>
    </>
  )
}

export default App
