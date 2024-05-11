import { useState } from 'react'

import './App.css'

function App() {

 let [counter,setCounter] = useState(0) 
  
  //let counter = 15 
  
  const addValue = () =>{
     
     counter = counter + 1
     setCounter(counter)
     console.log("clicked", counter);
 
    }
    const RemoveValue = ()=>{
      counter = counter - 1
      setCounter(counter)
      console.log(counter);
      

    }
  return (
    <>
      <h1>React learning</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Click</button>
      <br/>
      <button onClick={RemoveValue}>Remove value{counter} </button>

    </>
  )
}

export default App
