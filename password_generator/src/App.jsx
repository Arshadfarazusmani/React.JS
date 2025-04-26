import { useState, useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {

 const [length,setlength]=useState(8)
 const [numberAllowed,setnumberAllowed]=useState(false)
const [charecterAllowed,setCharAllowed]=useState(false)
const [password,setpassword]=useState("")
const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if (numberAllowed===true) {
  str+="0123456789"
  
}

if (charecterAllowed===true) {
  str+="!@#$%^&*"
  
}

for (let i = 1; i <=length; i++){
  let char= Math.floor(Math.random()*str.length + 1)
  pass+=str.charAt(char)
  

}

setpassword(pass)

} , [length,numberAllowed,charecterAllowed,setpassword])


// useRef
const passwordRef=useRef(null)

const coppyPasswordToClipboard= useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

  


useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charecterAllowed,passwordGenerator])

  return (
    <>
   <div className='w-full max-w-md mx-auto rounded-lg  my-8 px-4 bg-gray-800  '>
    <h1 className='text-white text-center px-5'>PASSWORD GENERATOR</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 text-white' >

    <input 
    
    type="text" 
    value={password}
    className='outline-none w-full py-1 px-3 bg-white text-black '
    placeholder='PASSWORD'
    readOnly
    ref={passwordRef}

    />
    <button
    onClick={coppyPasswordToClipboard}
    className='outline-none bg-blue-900 px-3 py-0.5 shrink-0'
    >Copy</button>
   </div>
   <div className='flex text-sm gap-x-2 '>
    <div className='flex items-center gap-x-1'>
      <input type="range"
      min={6}
      max={50}
      className='cursor-pointer'
      onChange={(e)=>{setlength(e.target.value)}}
      />
      <label className='text-white'>length:{length}</label>


    </div>

    <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setnumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput" className='text-white'>Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charecterAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput" className='text-white'>Characters</label>
      </div>
   </div>
   </div>

   
      


      


    </>
  )
}

export default App
