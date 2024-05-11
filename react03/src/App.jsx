

import './App.css'

function App() {

  let Counter = 15 
  
  const addValue = () =>{
     console.log("clicked", Math.random())
     Counter = counter + 1
     
    }
  return (
    <>
      <h1>React learning</h1>
      <h2>Counter Value:{Counter}</h2>

      <button onClick={addValue}>Click</button>
      <br/>
      <button>Remove value</button>

    </>
  )
}

export default App
