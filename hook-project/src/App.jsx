import { useState } from 'react'  // useState hook  state chage me kaaam ata hai UI updation 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  // let counter=0;

  let addvalue= ()=>{

    if (counter===10) {
      return
      
    }
    else{
    counter=counter+1
    setCounter(counter)

    console.log(counter);
    }
    
  }
  let removevalue= ()=>{
    if (counter===0) {
      return

    }
   else{
    counter=counter-1
    setCounter(counter)
    console.log(counter);
    
   }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addvalue}>add value </button>
      <br />
      <button 
      onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
