import { useState } from 'react'
import './App.css'
import Cards from './componenets/Cards.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-green-700 p-3.5 rounded-md'>Vite with Tailwind</h1>
     <Cards />
     <Cards />
     <Cards />
    </>
  )
}

export default App
