import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './copmonents/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-blue-500 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card/>
    </>
  )
}

export default App
