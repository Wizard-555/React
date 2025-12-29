import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importing card
import Cards from '../components/Cards'

function App() {
  const [count, setCount] = useState(0)

  // creating myArray (to pass through props in cards)
  const myArray = [1,2,3]

  // passing object
  const user = {
    name:"Kishan",
    roll:"25"
  }

  return (
    <>
      <h1 className='text-black bg-green-400  font-bold rounded-xl p-4 mb-4' >Tailwind Test</h1>

      <Cards />

      {/* we will add some props to the cards and can see by using "inspect in browser" */}
      <Cards username="No-Po" myArr={myArray} myObj={user}/>

      <Cards username="akashVaani" />
      
    </>
  )
}

export default App
