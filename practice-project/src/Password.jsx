
import { useState,useCallback,useEffect } from 'react'
import './App.css'

function Password() {
    let[length,setLength]=useState(6)
    let[NumberAllowed,setNumberAllowed]=useState(false)
    let[CharAllowed,setCharAllowed]=useState(false)
    let [password,setPassword]=useState("")
    const passwordGenerator=useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (NumberAllowed===true) {
      str+="0123456789"
      
    }
    
    if(CharAllowed===true) {
      str+="!@#$%^&*"
      
    }
    
    for (let i = 1; i <=length; i++){
      let char= Math.floor(Math.random()*str.length + 1)
      pass+=str.charAt(char)
      
    
    }
    
    setPassword(pass)
    
    } , [length,NumberAllowed,CharAllowed,setPassword])

   useEffect(()=>{
     passwordGenerator()
   },[length,NumberAllowed,CharAllowed,passwordGenerator])
    


   return (<>

   <div className='w-full max-w-md mx-auto rounded-lg  my-8 px-4 bg-gray-800' >
   <h1 className='text-white text-center px-5'>PASSWORD GENERATOR</h1>

   <div className='flex shadow rounded-lg overflow-hidden mb-4 text-white'>
    <input 
    type="text"
    value={password}
    className='outline-none w-full py-1 px-3 bg-white text-black '
    placeholder='PASSWORD'
    readOnly

    
    />

<button className='outline-none bg-blue-900 px-3 py-0.5 shrink-0'>
    
    Copy
    
    
    </button>

   </div>

   <div className='flex text-sm gap-x-2 '>
   <div className='flex items-center gap-x-1'>

   <input type="range"
      min={6}
      max={50}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
      
      />

<label className='text-white'>length:{length}</label>



   </div>


   <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={NumberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
        }}
          
      />
      <label htmlFor="numberInput" className='text-white'>Numbers</label>
      </div>


      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={CharAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput" className='text-white'>Characters</label>
      </div>


   </div>




   </div>

 
  
    </>
)}

export  default Password