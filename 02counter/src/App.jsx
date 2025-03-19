import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 

  let[counter,setcounter]= useState(0)  
  // let counter=5

  const addValue =()=>{
    
    if (counter<20){
      counter=counter+1
    }    
    setcounter(counter)
  }

  const removeValue=()=>{
    
    if (counter>0){
      counter=counter-1
    }
    setcounter(counter)
  }
 

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value : {counter}</h2>

      <button 
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
