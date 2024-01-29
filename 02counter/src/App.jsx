import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(20)

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }
  
  return (
    <>
    <h1>Hello Ajeet How r u </h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}
    >Add value</button>
    <br/>
    <button onClick={removeValue}
    >Remove value</button>
        <br/>
    </>
  )
}

export default App