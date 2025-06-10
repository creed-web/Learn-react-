import { useState } from 'react'

import './App.css'

function App() {
  let counter = 15
  const addValue = () => {
    counter = counter + 1
    console.log(counter);
  }
  
  return (
    <>
     <h1>React Course learning importance of hook</h1>
     <h2>Counter Value : {counter}</h2>
     <button
     onClick={addValue}
     >Add Value</button> {"  "}
     <button>Remove Value</button>
     <p>footer :</p>
    </>
  )
}

export default App
